import QrSection from "./qr-section/QrSection.component";
import DownloadSection from "./download-section/DownloadSection.component";
import HeaderSection from "./header-section/HeaderSection.component";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function QrCard() {
	return (
		<>
			<Accordion
				className="bg-background p-6 py-0 rounded-3xl lg:hidden"
				type="single"
				collapsible
			>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<HeaderSection />
					</AccordionTrigger>
					<AccordionContent className="bg-background flex flex-col gap-4">
						<DownloadSection />
						<QrSection />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="bg-background flex flex-col gap-4 p-6 rounded-3xl max-lg:hidden">
				<HeaderSection />
				<DownloadSection />
				<QrSection />
			</div>
		</>
	);
}
