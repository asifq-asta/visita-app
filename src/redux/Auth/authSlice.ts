// authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	token: string;
	expiresIn: number;
}

const initialState: AuthState = {
	token: "",
	expiresIn: 0,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken(state, action) {
			state.token = action.payload.access_token;
			state.expiresIn = action.payload.expires_in;
		},
		clearToken(state) {
			state.token = "";
		},
	},
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
