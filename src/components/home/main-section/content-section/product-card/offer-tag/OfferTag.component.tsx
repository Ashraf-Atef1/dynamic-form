import { IOfferTagProps } from "./offer-tag.types";

export default function OfferTag({ isSale }: IOfferTagProps) {
	return (
		<span
			className="absolute bottom-0 right-0 max-md:py-1 max-md:px-3 py-3 px-6 text-white max-md:text-[0.5rem] text-xs rounded-tl-4xl"
			style={{
				backgroundColor: isSale ? "var(--secondary)" : "var(--primary)",
			}}
		>
			{isSale ? "Hot Sale" : "Live Auction"}
		</span>
	);
}
