const endPoints = {
	categories: "all-categories/web",
	properties: "properties",
	option: "option-properties",
};
export type TEndPoints =
	| keyof typeof endPoints
	| { route: keyof typeof endPoints; param: string };
export default function route(route: TEndPoints) {
	const routeString =
		typeof route === "object"
			? `${endPoints[route.route]}/${route.param}`
			: endPoints[route];
	const url = `${process.env.MAIN_API_URL}${routeString}`;
	return url;
}
