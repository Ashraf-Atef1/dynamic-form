import { IInsightCardProps } from "./insight-card.types";

export default function InsightCard({ icon, title, value }: IInsightCardProps) {
	return (
		<div className="bg-hue h-14 rounded-2xl flex items-center px-2 gap-2 grow">
			<div>{icon}</div>
			<div>
				<h5 className="max-sm:text-xs  text-sm font-semibold mb-0.5">
					{value}
				</h5>
				<p className="max-sm:text-[0.65rem] text-xs text-secondary font-light">
					{title}
				</p>
			</div>
		</div>
	);
}
