import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { IDropdownInputProps } from "./dropdown-input.types";
import { Combobox } from "@/components/ui/combobox";

export default function DropdownInput({
	setValue,
	property,
	setProperties,
	setSelectedOption,
}: IDropdownInputProps) {
	const options = property.options.map((option) => ({
		value: option.id.toString(),
		label: option.name,
	}));
	options.push({ value: "other", label: "Other" });

	const handleChange = (value: string) => {
		const option =
			property.options.find((option) => option.id.toString() === value) || null;
		setSelectedOption(option);
		setValue(option ? option.name : value);
		if (value === "other") {
			setProperties([
				{
					id: Math.floor(Math.random() * 1000000),
					name: "custom value",
					options: [],
					parent_id: property.id,
					type: "text",
				},
			]);
		}
	};

	return (
		<FormItem>
			<FormLabel>{property.name}</FormLabel>
			<FormControl>
				<Combobox options={options} onSelect={handleChange} />
			</FormControl>
		</FormItem>
	);
}
