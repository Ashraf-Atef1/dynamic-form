import { ISeparatorProps } from "./seprator.types";

export default function Seprator({
	direction = "vertical",
	size = 3,
	style,
}: ISeparatorProps) {
	const className = direction === "vertical" ? "h-24" : "w-full";
	return (
		<span
			className={className}
			style={{
				display: "block",
				width: direction === "vertical" ? size : undefined,
				height: direction === "horizontal" ? size : undefined,
				backgroundColor: "var(--hue)",
				...style,
			}}
		></span>
	);
}
