"use client";
import { useState } from "react";
import { IFavIconProps } from "./fav-icon.types";
import HeartFullIcon from "@/components/shared/icons/HeartFull.icon";
import HeartIcon from "@/components/shared/icons/Heart.icon";
import IconButton from "@/components/shared/icon-button/IconButton.component";

export default function FavIcon({ initalState }: IFavIconProps) {
	const [isFav, setIsFav] = useState(initalState);
	return (
		<IconButton onClick={() => setIsFav((prev) => !prev)}>
			{isFav ? <HeartFullIcon color="var(--primary)" /> : <HeartIcon />}
		</IconButton>
	);
}
