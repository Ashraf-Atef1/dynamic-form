"use client";
import { getProperties } from "@/lib/api/properties/properties.routes";
import { IProperty } from "@/lib/store/category/category.model";
import { setProperties } from "@/lib/store/category/category.slice";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect } from "react";

export default function useProperties() {
	const { selectedSubCategory, properties } = useAppSelector(
		(state) => state.category
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (selectedSubCategory) {
			(async () => {
				const res = await getProperties(selectedSubCategory.id.toString());
				const allProperties: IProperty[] = res.data;
				dispatch(setProperties(allProperties));
			})();
		}
	}, [selectedSubCategory]);

	return { properties };
}
