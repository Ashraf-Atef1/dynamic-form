import NotificationIcon from "@/components/shared/icons/Notification.icon";
import SearchIcon from "@/components/shared/icons/Search.icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User from "@/assets/images/user.jpg";
import IconButton from "@/components/shared/icon-button/IconButton.component";
import { Separator } from "@/components/ui/separator";

export default function UserSection() {
	return (
		<div className="flex justify-between h-10 items-center gap-6">
			<IconButton>
				<SearchIcon />
			</IconButton>
			<Separator className="border-1 border-hue" orientation="vertical" />
			<IconButton>
				<NotificationIcon />
			</IconButton>
			<Separator className="border-1 border-hue" orientation="vertical" />
			<Avatar>
				<AvatarImage src={User.src} alt="user image" />
				<AvatarFallback>AS</AvatarFallback>
			</Avatar>
		</div>
	);
}
