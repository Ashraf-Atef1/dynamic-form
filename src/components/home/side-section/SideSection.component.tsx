import QrCard from "./qr-card/QrCard.component";
import UserCard from "./user-card/UserCard.component";

export default function SideSection() {
	return (
		<aside className="flex lg:grid grid-cols-2 xl:flex flex-col gap-6">
			<UserCard />
			<QrCard />
		</aside>
	);
}
