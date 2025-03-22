import { IIconProps } from "./icon.types";

export default function UserTickIcon({
	className = "",
	color = "var(--neutral-bold)",
	size = 24,
}: IIconProps) {
	return (
		<svg
			width={size}
			height={size}
			className={className}
			viewBox="0 0 23 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.1111 12C13.668 12 15.7407 9.76142 15.7407 7C15.7407 4.23858 13.668 2 11.1111 2C8.55423 2 6.48148 4.23858 6.48148 7C6.48148 9.76142 8.55423 12 11.1111 12Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M3.15741 22C3.15741 18.13 6.72222 15 11.1111 15C12 15 12.8611 15.13 13.6667 15.37"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.3704 18C20.3704 18.75 20.1759 19.46 19.8333 20.06C19.6389 20.42 19.3889 20.74 19.1019 21C18.4537 21.63 17.6019 22 16.6667 22C15.3148 22 14.1389 21.22 13.5 20.06C13.1574 19.46 12.963 18.75 12.963 18C12.963 16.74 13.5 15.61 14.3519 14.88C14.9907 14.33 15.7963 14 16.6667 14C18.713 14 20.3704 15.79 20.3704 18Z"
				stroke={color}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.2222 18L16.1389 18.99L18.1111 17.02"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
