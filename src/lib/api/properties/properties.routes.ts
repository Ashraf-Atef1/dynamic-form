"use server";

import fetcher from "../fetcher";

export async function getProperties(categoryId: string) {
	return await fetcher({
		path: "properties",
		options: {
			method: "GET",
		},
		urlParam: categoryId,
	});
}
