// store.ts
import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userAuth from "./Users/userSlice";
import auth from "./Auth/authSlice";
import attractionSlice from "./Attractions/attractionSlice";

const persistConfig = {
	key: "root",
	storage,
	// You can include a whitelist or blacklist here if needed
	// whitelist: ["userAuth"],
	// blacklist: ["someReducer"],
};

const persistedReducer = persistReducer(persistConfig, userAuth);
const authReducer = persistReducer(persistConfig, auth);

const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	reducer: {
		userAuth: persistedReducer,
		auth: authReducer,
		attractions: attractionSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
