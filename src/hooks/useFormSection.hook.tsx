"use client";
import { getCategories } from "@/lib/api/categories/categories.routes";
import { ICategory } from "@/lib/store/category/category.model";
import {
	setAllCategories,
	setSelectedMainCategory,
	setSelectedSubCategory,
} from "@/lib/store/category/category.slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { show } from "@/lib/store/options/options.slice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function useFormSection() {
	const { mainCategories, subCategories, selectedSubCategory } = useAppSelector(
		(state) => state.category
	);
	const dispatch = useAppDispatch();
	const form = useForm();

	useEffect(() => {
		(async () => {
			const res = await getCategories();
			const categories: ICategory[] = res.data.categories;
			dispatch(setAllCategories(categories));
		})();
	}, []);
	const handleMainCategorySelect = (value: string) => {
		const selectedCategory = mainCategories.find(
			(category) => category.id.toString() === value
		);
		dispatch(setSelectedMainCategory(selectedCategory));
	};
	const handelSubCategorySelect = (value: string) => {
		const selectedCategory = subCategories.find(
			(category) => category.id.toString() === value
		);
		dispatch(setSelectedSubCategory(selectedCategory));
	};
	const handleFormSubmit = () => {
		dispatch(show());
	};
	return {
		mainCategories,
		subCategories,
		form,
		selectedSubCategory,
		handleMainCategorySelect,
		handelSubCategorySelect,
		handleFormSubmit,
	};
}
