"use server";

import fetcher from "../fetcher";

export async function getOptions(categoryId: string) {
	return await fetcher({
		path: "option",
		options: {
			method: "GET",
		},
		urlParam: categoryId,
	});
}
