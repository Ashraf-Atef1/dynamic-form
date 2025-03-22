import Logo from "@/assets/images/logo.svg";
import Qr from "@/assets/images/qr.png";
import Image from "next/image";

export default function QrSection() {
	return (
		<div className="bg-gradient-to-r from-primary to-secondary w-full rounded-2xl flex items-center justify-center p-4">
			<div className="bg-background w-full rounded-2xl flex flex-col items-center gap-1 p-3">
				<Image src={Logo} alt="Logo" className="max-sm:w-32 w-36 mb-1" />
				<h3 className="max-sm:text-xl text-2xl font-bold -mb-2">Hala Ahmed</h3>
				<Image
					src={Qr}
					alt="QR Code"
					className="max-sm:w-28 w-32 aspect-square object-cover rounded-3xl"
					width={128}
					height={128}
				/>
				<p className="max-sm:text-xs text-sm font-light text-neutral-mid">
					Follow Us on Mazaady
				</p>
			</div>
		</div>
	);
}
