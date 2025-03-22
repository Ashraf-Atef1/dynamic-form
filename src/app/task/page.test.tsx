import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Task from "./page";
import { createMockStore } from "@/tests/mockStore";
import { Provider } from "react-redux";

describe("Task page", () => {
	it("renders a task page", () => {
		const mockStore = createMockStore({
			category: {
				mainCategories: [],
				subCategories: [],
				allCategories: [],
				properties: [],
			},
			options: {
				options: {},
				show: false,
			},
		});
		render(
			<Provider store={mockStore}>
				<Task />
			</Provider>
		);
	});
});
