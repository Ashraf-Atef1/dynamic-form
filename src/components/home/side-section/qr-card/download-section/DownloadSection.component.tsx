import DocumentDownloadIcon from "@/components/shared/icons/DocumentDownload.icon copy";

export default function DownloadSection() {
	return (
		<div className="bg-hue flex items-center gap-2 p-4 rounded-2xl">
			<DocumentDownloadIcon color="var(--secondary)" />
			<p className="text-xs">
				Download the QR code or share it with your friends.
			</p>
		</div>
	);
}
