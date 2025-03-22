import { IDurationTagProps } from "./duration-tab.types";
import styles from "./styles.module.scss";

export default function DurationTag({ title, value }: IDurationTagProps) {
	return (
		<span
			className={`${styles["tag"]} bg-hue max-md:text-sm text-lg text-secondary font-bold rounded-full py-[0.35rem] flex justify-center items-center gap-1`}
		>
			{value} <span className="max-md:text-[0.5rem] text-xs">{title}</span>
		</span>
	);
}
