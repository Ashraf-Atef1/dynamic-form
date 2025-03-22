import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TableSection from "./TableSection.component";
import { createMockStore } from "@/tests/mockStore";
import { Provider } from "react-redux";

describe("TableSection", () => {
	it("The table should not be in the Document", () => {
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
				<TableSection />
			</Provider>
		);
		const tableHeader = screen.queryByText(/Property/i);
		expect(tableHeader).not.toBeInTheDocument();
	});

	it("The table should be in the Document", () => {
		const mockStore = createMockStore({
			category: {
				mainCategories: [],
				subCategories: [],
				allCategories: [],
				properties: [],
				selectedMainCategory: {
					id: 1,
					name: "Main Category",
					parent_id: 3,
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
				selectedSubCategory: {
					id: 2,
					name: "Sub Category",
					parent_id: 3,
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
			},
			options: {
				options: {},
				show: true,
			},
		});
		render(
			<Provider store={mockStore}>
				<TableSection />
			</Provider>
		);
		const tableHeader = screen.queryByText(/Property/i);
		expect(tableHeader).toBeInTheDocument();
	});
});
