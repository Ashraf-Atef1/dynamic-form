import MainSection from "./main-section/MainSection.component";
import SideSection from "./side-section/SideSection.component";

export default function HomePage() {
	return (
		<section className="grid xl:grid-cols-3 gap-6">
			<SideSection />
			<MainSection />
		</section>
	);
}
