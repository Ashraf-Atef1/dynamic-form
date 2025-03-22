import DesktopHeader from "./desktop/DesktopHeader.component";
import MobileHeader from "./mobile/MobileHeader.component";

export default function Header() {
	return (
		<header className="bg-background flex justify-between items-center px-4 sticky top-0 z-50">
			<DesktopHeader />
			<MobileHeader />
		</header>
	);
}
