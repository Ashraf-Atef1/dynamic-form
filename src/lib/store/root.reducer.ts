import { combineReducers } from "@reduxjs/toolkit";
import CategoryReducer from "./category/category.slice";
import OptionsReducer from "./options/options.slice";

export const rootReducer = combineReducers({
	category: CategoryReducer,
	options: OptionsReducer,
});
