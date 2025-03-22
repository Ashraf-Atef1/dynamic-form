import { IProperty } from "@/lib/store/category/category.model";

export interface ICountryInputProps {
	setValue: (value: string) => void;
	property: IProperty;
}
