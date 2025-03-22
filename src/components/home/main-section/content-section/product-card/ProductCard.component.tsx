import Image from "next/image";
import DurationTag from "./duration-tag/DurationTab.component";
import { IProductCardProps } from "./product-card.types";
import OfferTag from "./offer-tag/OfferTag.component";
import FavIcon from "./fav-icon/FavIcon.component";

export default function ProductCard({
	src,
	title,
	days,
	hours,
	minutes,
	price,
	isSale,
	isFav,
}: IProductCardProps) {
	return (
		<div className="flex gap-4 items-center overflow-auto grow">
			<div className="relative rounded-3xl overflow-hidden max-md:w-24 w-40">
				<Image
					src={src}
					alt="Product Image"
					className="max-md:w-24 w-40 aspect-[9/8] object-cover"
				/>
				<div className="absolute top-0 left-0 bg-background rounded-full block md:hidden scale-50">
					<FavIcon initalState={isFav} />
				</div>
				<OfferTag isSale={isSale} />
			</div>
			<div
				className="tracking-wide grid gap-2 relative grow"
				style={{ maxWidth: "calc(100% - 7rem)" }}
			>
				<div className="absolute top-0 right-0 hidden md:block">
					<FavIcon initalState={isFav} />
				</div>
				<h4 className="capitalize max-md:text-sm text-lg font-light inline truncate">
					{title}
				</h4>
				<p className="text-neutral-light max-md:text-sm text-lg font-light">
					Starting Price{" "}
					<span className="font-bold max-md:text-sm text-xl text-neutral-bold">
						{price} EGP
					</span>
				</p>
				<div className="flex flex-wrap items-center gap-3 grow">
					<span className="text-neutral-light max-md:text-sm text-lg font-light -mr-1">
						Lot starts in
					</span>
					<div className="flex flex-wrap items-center grow gap-3">
						<DurationTag title="Days" value={days} />
						<DurationTag title="Hours" value={hours} />
						<DurationTag title="Minutes" value={minutes} />
					</div>
				</div>
			</div>
		</div>
	);
}
