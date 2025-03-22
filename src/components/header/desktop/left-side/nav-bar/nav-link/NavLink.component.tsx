"use client";
import Link from "next/link";
import { INavLinkProps } from "./nav-link.types";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }: INavLinkProps) {
	const path = usePathname();
	const active = path === href;
	const linkClassNames = [styles["link"], active && styles["active"]].join(" ");
	const textClassNames = active
		? "font-semibold text-primary"
		: "text-neutral-light";
	return (
		<Link className={linkClassNames} href={href}>
			<span className={textClassNames}>{label}</span>
		</Link>
	);
}
