import TabsSection from "./tabs-section/TabsSection.component";
import ContentSection from "./content-section/ContentSection.component";
import {
	articlesData,
	productsData,
	reviewsData,
} from "./content-section/content-section.data";

export default function MainSection() {
	return (
		<main className="xl:col-span-2 bg-background flex flex-col gap-4 p-6 rounded-3xl">
			<TabsSection>
				<ContentSection
					products={productsData}
					title="products"
					value="products"
				/>
				<ContentSection
					products={articlesData}
					title="Articles"
					value="articles"
				/>
				<ContentSection
					products={reviewsData}
					title="Reviews"
					value="reviews"
				/>
			</TabsSection>
		</main>
	);
}
