import IconButton from "@/components/shared/icon-button/IconButton.component";
import GlobalIcon from "@/components/shared/icons/Global.icon";
import { Separator } from "@/components/ui/separator";

export default function Language() {
	return (
		<div className="flex items-center gap-2 h-6">
			<IconButton>
				<GlobalIcon />
			</IconButton>
			<Separator className="border-1 border-gray-100" orientation="vertical" />
			<span className="font-bold text-lg">EN</span>
		</div>
	);
}
