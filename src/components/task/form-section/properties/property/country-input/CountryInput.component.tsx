import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ICountryInputProps } from "./country-input.types";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { useState } from "react";

export default function CountryInput({
	setValue,
	property,
}: ICountryInputProps) {
	const [selectedOption, setSelectedOption] = useState(property.name);
	return (
		<FormItem>
			<FormLabel>{property.name}</FormLabel>
			<FormControl>
				<CountryDropdown
					defaultValue={selectedOption}
					placeholder="Select country"
					onChange={(country) => {
						setValue(country.name);
						setSelectedOption(country.name);
					}}
				/>
			</FormControl>
		</FormItem>
	);
}
