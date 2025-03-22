import { IOption, IProperty } from "@/lib/store/category/category.model";

export interface IDropdownInputProps {
	setValue: (value: string) => void;
	property: IProperty;
	setProperties: (properties: IProperty[]) => void;
	setSelectedOption: (selectedOption: IOption | null) => void;
}
