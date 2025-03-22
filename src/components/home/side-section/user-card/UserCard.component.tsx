import { Button } from "@/components/ui/button";
import User from "@/assets/images/user.jpg";
import Image from "next/image";
import InsightCard from "./insight-card/InsightCard.component";
import { insightsData } from "./user-card.data";

export default function UserCard() {
	return (
		<div className="bg-background flex flex-col gap-4 p-6 rounded-3xl">
			<Image
				src={User}
				alt="User"
				className="max-sm:w-[5.25rem] w-[6.25rem] aspect-square object-cover rounded-3xl"
			/>
			<div>
				<h3 className="max-sm:text-xl text-2xl font-bold mb-2">Hala Ahmed</h3>
				<p className="max-sm:text-xs text-sm font-light text-neutral-mid">
					I am Hala Ahmed, I am the owner of the local brand called Beauty which
					is for Mackeup and Skin Care.
				</p>
			</div>
			<div className="flex flex-wrap gap-4 my-1 mt-auto">
				{insightsData.map((insight, index) => (
					<InsightCard key={index} {...insight} />
				))}
			</div>
			<Button className="h-12 font-bold rounded-xl" variant="linear">
				Follow
			</Button>
		</div>
	);
}
