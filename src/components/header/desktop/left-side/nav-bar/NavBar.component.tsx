import NavLink from "./nav-link/NavLink.component";

export default function NavBar() {
	return (
		<div className="h-full flex items-center gap-6">
			<NavLink href="/home" label="Home" />
			<NavLink href="/task" label="Task" />
		</div>
	);
}
