"use client";
import { getOptions } from "@/lib/api/options/options.routes";
import { IOption, IProperty } from "@/lib/store/category/category.model";
import { useAppDispatch } from "@/lib/store/hooks";
import { addOption, removeOption } from "@/lib/store/options/options.slice";
import { useEffect, useState } from "react";

export default function useProperty(property: IProperty) {
	const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
	const [properties, setProperties] = useState<IProperty[]>([]);
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (selectedOption) {
			if (!selectedOption.has_child) {
				setProperties([]);
			} else {
				(async () => {
					const res = await getOptions(selectedOption.id.toString());
					const allProperties: IProperty[] = res.data;
					setProperties(allProperties);
				})();
			}
		}
	}, [selectedOption]);

	useEffect(() => {
		dispatch(addOption({ ...property, value }));
		return () => {
			dispatch(removeOption(property.id.toString()));
		};
	}, [value]);

	return { properties, setValue, setSelectedOption, setProperties };
}
