import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ICategoryDropdown } from "./category-dropdown.types";
import { Combobox } from "@/components/ui/combobox";

export default function CategoryDropdown({
	title,
	options,
	onChange,
}: ICategoryDropdown) {
	return (
		<FormItem>
			<FormLabel>{title}</FormLabel>
			<FormControl>
				<Combobox
					options={options.map((category) => ({
						value: category.id.toString(),
						label: category.name,
					}))}
					onSelect={onChange}
				/>
			</FormControl>
		</FormItem>
	);
}
