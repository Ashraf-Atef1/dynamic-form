import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { IDateInputProps } from "./date-input.types";
import { DatePicker } from "@/components/ui/date-picker";

export default function DateInput({ setValue, property }: IDateInputProps) {
	return (
		<FormItem>
			<FormLabel>{property.name}</FormLabel>
			<FormControl>
				<DatePicker onChange={(day) => setValue(String(day))} />
			</FormControl>
		</FormItem>
	);
}
