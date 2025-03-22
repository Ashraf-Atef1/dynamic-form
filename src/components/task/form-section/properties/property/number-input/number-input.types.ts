import { IProperty } from "@/lib/store/category/category.model";

export interface INumberInputProps {
	setValue: (value: string) => void;
	property: IProperty;
}
