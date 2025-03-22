import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SideSection from "./SideSection.component";

describe("SideSection", () => {
	it("SideSection contains username", () => {
		render(<SideSection />);
		const userName = screen.getAllByRole("heading", {
			level: 3,
			name: /Hala Ahmed/i,
		});
		expect(userName).toHaveLength(2);
		expect(userName[0]).toBeInTheDocument();
	});
	it("SideSection contains the follow button", () => {
		render(<SideSection />);
		const followButton = screen.getByRole("button", {
			name: /Follow/i,
		});
		expect(followButton).toBeInTheDocument();
	});
	it("SideSection contains the Qr code card", () => {
		render(<SideSection />);
		const title = screen.getAllByRole("heading", {
			level: 3,
			name: /QR Code/i,
		});
		expect(title).toHaveLength(3);
		expect(title[0]).toBeInTheDocument();
	});
	it("SideSection contains the qr code image", () => {
		render(<SideSection />);
		const qrCodeImage = screen.getByAltText(/QR Code/i);
		expect(qrCodeImage).toBeInTheDocument();
	});
});
