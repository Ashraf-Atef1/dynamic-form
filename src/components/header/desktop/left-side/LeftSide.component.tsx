import Image from "next/image";
import NavBar from "./nav-bar/NavBar.component";
import Logo from "@/assets/images/logo.svg";

export default function LeftSide() {
	return (
		<div className="flex items-center gap-6 h-full">
			<Image className="h-10" src={Logo} alt="Mazaady logo" />
			<NavBar />
		</div>
	);
}
