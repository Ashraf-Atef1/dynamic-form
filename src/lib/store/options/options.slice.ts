import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./options.model";

const initialState: IInitialState = {
	options: {},
	show: false,
};

const optionsSlice = createSlice({
	name: "options",
	initialState,
	reducers: {
		show(state) {
			state.show = true;
		},
		hide(state) {
			state.show = false;
		},
		addOption(state, action) {
			state.options = {
				...state.options,
				[action.payload.id]: action.payload,
			};
		},
		removeOption(state, action) {
			delete state.options[action.payload];
		},
		reset() {
			return initialState;
		},
	},
});

export const { reset, addOption, removeOption, show, hide } =
	optionsSlice.actions;
export default optionsSlice.reducer;
