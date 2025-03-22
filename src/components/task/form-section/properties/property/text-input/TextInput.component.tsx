import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ITextInputProps } from "./text-input.types";

export default function TextInput({ setValue, property }: ITextInputProps) {
	return (
		<FormItem>
			<FormLabel>{property.name}</FormLabel>
			<FormControl>
				<Input
					placeholder="Enter the value..."
					onChange={(e) => setValue(e.target.value)}
				/>
			</FormControl>
		</FormItem>
	);
}
