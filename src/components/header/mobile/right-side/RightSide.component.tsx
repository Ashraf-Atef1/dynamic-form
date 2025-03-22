import IconButton from "@/components/shared/icon-button/IconButton.component";
import SearchIcon from "@/components/shared/icons/Search.icon";
import NotificationIcon from "@/components/shared/icons/Notification.icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/assets/images/user.jpg";

export default function RightSide() {
	return (
		<div className="flex justify-between h-10 items-center gap-3">
			<IconButton>
				<SearchIcon size={20} />
			</IconButton>
			<IconButton>
				<NotificationIcon size={20} />
			</IconButton>
			<Avatar className="h-6 w-6">
				<AvatarImage src={User.src} />
				<AvatarFallback>AS</AvatarFallback>
			</Avatar>
		</div>
	);
}
