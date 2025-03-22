// import Link from "next/link";
import {
	IButtonProps,
	IIconButtonProps,
	// ILinkProps,
} from "./icon-button.types";

export default function IconButton({ children, ...props }: IIconButtonProps) {
	const className = "rounded-full p-2 hover:bg-hue hover:cursor-pointer";
	if (props.href) {
		// const linkProps = props as ILinkProps;
		return (
			<div className={className} title="Icon button">
				{children}
			</div>
		);
	} else {
		const buttonProps = props as IButtonProps;
		return (
			<button {...buttonProps} className={className} title="Icon button">
				{children}
			</button>
		);
	}
}
