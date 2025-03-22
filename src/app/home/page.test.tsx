import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
	it("renders a home page", () => {
		render(<Home />);
	});
});
