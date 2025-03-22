import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainSection from "./MainSection.component";

describe("MainSection", () => {
	it("MainSection contains products section and product nav button", () => {
		render(<MainSection />);
		const section = screen.getAllByText(/Products/i);
		expect(section).toHaveLength(2);
		expect(section[0]).toBeInTheDocument();
		expect(section[1]).toBeInTheDocument();
	});
	it("MainSection contains articles button", () => {
		render(<MainSection />);
		const button = screen.getByText(/Articles/i);
		expect(button.tagName).toBe("BUTTON");
		expect(button).toBeInTheDocument();
	});
	it("MainSection contains reviews button", () => {
		render(<MainSection />);
		const button = screen.getByText(/Reviews/i);
		expect(button.tagName).toBe("BUTTON");
		expect(button).toBeInTheDocument();
	});
});
