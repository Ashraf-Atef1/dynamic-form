import { IProductCardProps } from "./product-card/product-card.types";

export interface IContentSectionProps {
	products: IProductCardProps[];
	title: string;
	value: string;
}
