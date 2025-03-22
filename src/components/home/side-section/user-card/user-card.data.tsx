import MagicStarIcon from "@/components/shared/icons/MagicStar.icon";
import UserTickIcon from "@/components/shared/icons/UserTick.icon";

export const insightsData = [
	{
		icon: <UserTickIcon color="var(--secondary)" />,
		title: "Following",
		value: "5",
	},
	{
		icon: <UserTickIcon color="var(--secondary)" />,
		title: "Followers",
		value: "20",
	},
	{
		icon: <MagicStarIcon color="var(--secondary)" />,
		title: "Rate",
		value: (
			<>
				4.2{" "}
				<span className="max-sm:text-[0.4rem] text-[0.65rem] text-neutral-light font-light">
					( 15 )
				</span>
			</>
		),
	},
];
