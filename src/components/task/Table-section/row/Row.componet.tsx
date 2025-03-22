import { TableCell, TableRow } from "@/components/ui/table";
import { IRowProps } from "./row.types";

export default function Row({ title, value }: IRowProps) {
	return (
		<TableRow>
			<TableCell className="font-medium border-b-2">{title}</TableCell>
			<TableCell className="border-l-2 border-b-2">{value}</TableCell>
		</TableRow>
	);
}
