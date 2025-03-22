import LeftSide from "./left-side/LeftSide.component";
import RightSide from "./right-side/RightSide.component";

export default function MobileHeader() {
	return (
		<main className="container mx-auto h-12 lg:hidden flex justify-between items-center">
			<LeftSide />
			<RightSide />
		</main>
	);
}
