import { ICategory } from "@/lib/store/category/category.model";

export interface ICategoryDropdown {
	title: string;
	options: ICategory[];
	onChange: (value: string) => void;
}
