import AddCircleIcon from "@/components/shared/icons/AddCircle.icon";
import { Button } from "@/components/ui/button";
import UserSection from "./user-section/UserSection.componet";
import Language from "./language/Language.component";

export default function RightSide() {
	return (
		<div className="flex items-center h-full gap-6">
			<UserSection />
			<Button variant="linear">
				<AddCircleIcon color="white" />
				<span>Add new product</span>
			</Button>
			<Language />
		</div>
	);
}
