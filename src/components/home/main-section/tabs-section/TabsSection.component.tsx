import AddCircleIcon from "@/components/shared/icons/AddCircle.icon";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITabsSectionProps } from "./tabs-section.types";

export default function TabsSection({ children }: ITabsSectionProps) {
	return (
		<Tabs defaultValue="products">
			<div className="flex justify-between">
				<TabsList className="flex gap-3 max-md:w-full">
					<TabsTrigger value="products">Products</TabsTrigger>
					<TabsTrigger value="articles">Articles</TabsTrigger>
					<TabsTrigger value="reviews">Reviews</TabsTrigger>
				</TabsList>
				<Button className="max-md:hidden" variant="linear">
					<AddCircleIcon color="white" />
					<span>Add Review</span>
				</Button>
				<Button
					className="md:hidden fixed bottom-10 right-5 z-10"
					variant="linear"
				>
					<AddCircleIcon color="white" />
					<span>Add Review</span>
				</Button>
			</div>
			{children}
		</Tabs>
	);
}
