import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import MenuIcon from "@/components/shared/icons/Menu.icon";
import IconButton from "@/components/shared/icon-button/IconButton.component";

export default function LeftSide() {
	return (
		<div className="flex items-center h-8">
			<IconButton>
				<MenuIcon />
			</IconButton>
			<Image
				className="h-8 -ml-3"
				src={Logo}
				width={108}
				height={32}
				priority={true}
				alt="Mazaady logo"
			/>
		</div>
	);
}
