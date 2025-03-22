import IconButton from "@/components/shared/icon-button/IconButton.component";
import DocumentDownloadIcon from "@/components/shared/icons/DocumentDownload.icon copy";
import EyeIcon from "@/components/shared/icons/Eye.icon";
import ShareIcon from "@/components/shared/icons/Share.icon";

export default function HeaderSection() {
	return (
		<div className="flex items-center justify-between grow">
			<h3 className="max-sm:text-xl text-2xl font-bold mb-2">QR Code</h3>
			<div className="flex gap-2">
				<IconButton href="/home">
					<EyeIcon />
				</IconButton>
				<IconButton href="/home">
					<ShareIcon />
				</IconButton>
				<IconButton href="/home">
					<DocumentDownloadIcon />
				</IconButton>
			</div>
		</div>
	);
}
