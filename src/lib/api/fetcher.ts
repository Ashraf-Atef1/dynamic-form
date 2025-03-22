"use server";
import route, { type TEndPoints } from "./api";

export default async function fetcher({
	options,
	path,
	query,
	urlParam,
}: {
	path: TEndPoints;
	options: RequestInit;
	query?: object;
	urlParam?: string;
}) {
	let url = route(path);
	if (urlParam) url += `/${urlParam}`;

	if (query) {
		const queryString = new URLSearchParams(
			Object.entries(query).reduce(
				(acc: Record<string, string>, [key, value]) => {
					acc[key] =
						typeof value === "object" ? JSON.stringify(value) : String(value);
					return acc;
				},
				{} as Record<string, string>
			)
		).toString();
		url += `?${queryString}`;
	}
	const response = await fetch(url, {
		...options,
		headers: {
			"content-language": "en",
			Accept: "application/json",
			"private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
			currency: "USD",
			platform: "web",
			...(options?.headers || {}),
		},
	});
	const responseData = await response.json();
	if (!response.ok) {
		return { error: responseData.message };
	}
	return responseData;
}
