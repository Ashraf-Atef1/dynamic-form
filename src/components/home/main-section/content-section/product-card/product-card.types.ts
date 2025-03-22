import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IProductCardProps {
	src: StaticImport;
	isSale: boolean;
	title: string;
	price: number;
	days: number;
	hours: number;
	minutes: number;
	isFav: boolean;
}
