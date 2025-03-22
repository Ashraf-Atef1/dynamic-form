"use server";
import fetcher from "../fetcher";

export async function getCategories() {
	return await fetcher({
		path: "categories",
		options: {
			method: "GET",
		},
	});
}
