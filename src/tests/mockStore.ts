import { rootReducer } from "@/lib/store/root.reducer";
import { RootState } from "@/lib/store/store";
import { configureStore } from "@reduxjs/toolkit";

export const createMockStore = (initialState?: Partial<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState as RootState,
	});
};
