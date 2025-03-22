import { IProperty } from "@/lib/store/category/category.model";

export interface IDateInputProps {
	setValue: (value: string) => void;
	property: IProperty;
}
