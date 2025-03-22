import LeftSide from "./left-side/LeftSide.component";
import RightSide from "./right-side/RightSide.component";

export default function DesktopHeader() {
	return (
		<main className="container mx-auto h-16 hidden lg:flex justify-between items-center">
			<LeftSide />
			<RightSide />
		</main>
	);
}
