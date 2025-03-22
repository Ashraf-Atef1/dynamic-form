import { IProperty } from "../category/category.model";

export interface IInitialState {
	show: boolean;
	options: Record<string, IProperty & { value: string }>;
}
