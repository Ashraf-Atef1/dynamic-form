export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	href?: undefined;
	isDev?: boolean;
}

export interface ILinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
}

export type IIconButtonProps = IButtonProps | ILinkProps;
