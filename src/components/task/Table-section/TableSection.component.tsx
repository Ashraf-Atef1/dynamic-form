"use client";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/store/hooks";
import Row from "./row/Row.componet";

export default function TableSection() {
	const { options, show } = useAppSelector((state) => state.options);
	const { selectedMainCategory, selectedSubCategory } = useAppSelector(
		(state) => state.category
	);

	if (!show || !selectedMainCategory || !selectedSubCategory) return null;
	return (
		<div>
			<Table className="rounded-2xl overflow-hidden">
				<TableHeader>
					<TableRow className="bg-primary ">
						<TableHead className="text-background">Property</TableHead>
						<TableHead className="text-background">Value</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<Row title="Main Category" value={selectedMainCategory?.name} />
					<Row title="Sub Category" value={selectedSubCategory?.name} />
					{Object.values(options).map(({ name, value, id }) => {
						return value && <Row key={id} title={name} value={value} />;
					})}
				</TableBody>
			</Table>
		</div>
	);
}
