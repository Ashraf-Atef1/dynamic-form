import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { INumberInputProps } from "./number-input.types";

export default function NumberInput({ setValue, property }: INumberInputProps) {
	return (
		<FormItem>
			<FormLabel>{property.name}</FormLabel>
			<FormControl>
				<Input
					placeholder="Enter the value..."
					type="number"
					inputMode="numeric"
					pattern="[0-9]*"
					onChange={(e) => setValue(e.target.value)}
				/>
			</FormControl>
		</FormItem>
	);
}
