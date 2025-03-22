import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormSection from "./FormSection.component";
import { createMockStore } from "@/tests/mockStore";
import { Provider } from "react-redux";

describe("FormSection", () => {
	it("MainSection contains the main category dropdown", () => {
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
				<FormSection />
			</Provider>
		);
		const dropdown = screen.getByText(/Main Category/i);
		expect(dropdown).toBeInTheDocument();
	});
	it("MainSection dose not contain the sub category dropdown", () => {
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
				<FormSection />
			</Provider>
		);
		const dropdown = screen.queryByText(/Sub Category/i);
		expect(dropdown).not.toBeInTheDocument();
	});
	it("MainSection contains the sub category dropdown", () => {
		const mockStore = createMockStore({
			category: {
				mainCategories: [],
				subCategories: [
					{
						id: 1,
						name: "Sub Category",
						parent_id: 1,
						image: {
							id: null,
							medium: "medium",
							custom_properties: null,
							place_holder: {
								medium_bg: "medium_bg",
								small_bg: "small_bg",
								small_no_bg: "small_no_bg",
							},
							thumbnail: "thumbnail",
						},
						is_other: false,
						properties_count: 1,
						seo_tags: [],
						slug: "slug",
					},
				],
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
				<FormSection />
			</Provider>
		);
		const dropdown = screen.queryByText(/Sub Category/i);
		expect(dropdown).toBeInTheDocument();
	});
});
