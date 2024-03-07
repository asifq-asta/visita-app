import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "@service/httpUtility";
import { VITE_API_URL } from "@helpers/constants";
import { RootState } from "@redux/store";

export const signIn = createAsyncThunk(
	"userAuth/fetchData",
	async (values: UserSingIn) => {
		const payload = {
			email: values?.email,
			password: values?.password,
		};
		try {
			const getResponse = await POST(VITE_API_URL, payload);
			if (!getResponse.status) {
				throw new Error(`Failed to fetch data: ${getResponse.error}`);
			}
			const data = getResponse.data;
			return data;
		} catch (error) {
			throw new Error(`Error fetching data: ${error}`);
		}
	},
);
type UserSingIn = {
	email: string;
	password: string;
};

export const ContactUs = createAsyncThunk(
	"userAuth/contactUsThunk",
	async (values: User) => {
		try {
			return values;
		} catch (error) {
			throw new Error(`Error fetching data: ${error}`);
		}
	},
);

type User = {
	name: string;
	email: string;
	description: string;
};

type InitialState = {
	data: string;
	status: "idle" | "loading" | "succeeded" | "failed"; // Adjust the possible values based on your application's states
	error?: string | undefined;
	user: User | null;
	isAuthenticated: boolean;
};

const initialState: InitialState = {
	data: "",
	status: "idle",
	error: undefined,
	user: null,
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: "userAuth",
	initialState: initialState,
	reducers: {
		// Your existing reducer logic
		updateData: (state, action) => {
			state.data = action.payload;
		},
		logout: (state) => {
			state.isAuthenticated = false;
		},
		updateIsAuthenticated: (state, action) => {
			state.isAuthenticated = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
				state.isAuthenticated = true;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(ContactUs.pending, (state) => {
				state.status = "loading";
			})
			.addCase(ContactUs.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(ContactUs.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});
export const { updateData, logout, updateIsAuthenticated } = userSlice.actions;
export const selectUserAuth = (state: RootState) => state.userAuth;

export default userSlice.reducer;
