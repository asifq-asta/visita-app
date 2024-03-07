import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ATTRACTION_FILTER } from "@graphql/Queries/attractions";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Attraction } from "@interfaces/attraction";

interface AttractionState {
	data: Attraction[] | null;
	status: string;
	error: string | null;
}

// Define async thunk for fetching attractions with filtering
export const filterAttractions = createAsyncThunk(
	"attractionSlice/filterAttractions",
	async ({
		client,
		props,
	}: {
		client: ApolloClient<NormalizedCacheObject>;
		props: string;
	}) => {
		try {
			const whereCondition = props
				? {
						where: {
							_or: [
								{ title: { _ilike: `%${props}%` } },
								{ description: { _ilike: `%${props}%` } },
							],
						},
					}
				: { where: null };

			const { data } = await client.query({
				query: GET_ATTRACTION_FILTER,
				variables: whereCondition,
			});

			return data.attraction;
		} catch (error) {
			throw new Error(`Error fetching data: ${error}`);
		}
	},
);

// Define initial state
const initialState: AttractionState = {
	data: null,
	status: "",
	error: "",
};

// Create attraction slice
const attractionSlice = createSlice({
	name: "attractionSlice",
	initialState,
	reducers: {
		attractionsData(state, action) {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(filterAttractions.pending, (state) => {
				state.status = "loading";
			})
			.addCase(filterAttractions.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(filterAttractions.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message ?? null;
			});
	},
});

// Export actions and reducer
export const { attractionsData } = attractionSlice.actions;
export default attractionSlice.reducer;
