import { TabsContent } from "@radix-ui/react-tabs";
import ProductCard from "./product-card/ProductCard.component";
import { IContentSectionProps } from "./content-section.types";

export default function ContentSection({
	products,
	title,
	value,
}: IContentSectionProps) {
	return (
		<TabsContent value={value} className="flex flex-col">
			<h2 className="max-md:text-2xl text-4xl font-extrabold flex items-center gap-2 my-6">
				{title}{" "}
				<span className="max-md:text-xs text-sm font-light text-neutral-light">
					( {products.length} )
				</span>
			</h2>
			<div className="flex flex-col gap-6 w-full overflow-auto">
				{products.map((product, index) => (
					<ProductCard key={index} {...product} />
				))}
			</div>
		</TabsContent>
	);
}
