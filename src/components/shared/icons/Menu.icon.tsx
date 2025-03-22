import { IIconProps } from "./icon.types";

export default function MenuIcon({
	className = "",
	color = "var(--neutral-bold)",
	size = 24,
}: IIconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3 7H21"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.34"
				d="M3 12H21"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M3 17H21"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
}
