import { createSlice } from "@reduxjs/toolkit";
import { ICategory, IInitialState } from "./category.model";

const initialState: IInitialState = {
	allCategories: [],
	mainCategories: [],
	subCategories: [],
	properties: [],
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setAllCategories(state, action) {
			state.allCategories = action.payload;
			state.mainCategories = action.payload.filter(
				(category: ICategory) => !category.parent_id
			);
		},
		setSelectedMainCategory(state, action) {
			return {
				...initialState,
				allCategories: state.allCategories,
				mainCategories: state.mainCategories,
				selectedMainCategory: action.payload,
				subCategories: state.allCategories.filter(
					(category: ICategory) =>
						category.parent_id?.toString() === action.payload.id.toString()
				),
			};
		},
		setSelectedSubCategory(state, action) {
			state.selectedSubCategory = action.payload;
			state.properties = [];
		},
		setProperties(state, action) {
			state.properties = action.payload;
		},
		addProperties(state, action) {
			state.properties = [...state.properties, ...action.payload];
		},
		reset() {
			return initialState;
		},
	},
});

export const {
	reset,
	setAllCategories,
	setSelectedMainCategory,
	setSelectedSubCategory,
	setProperties,
} = categorySlice.actions;
export default categorySlice.reducer;
