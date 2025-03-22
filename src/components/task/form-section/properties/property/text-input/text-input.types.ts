import { IProperty } from "@/lib/store/category/category.model";

export interface ITextInputProps {
	setValue: (value: string) => void;
	property: IProperty;
}
