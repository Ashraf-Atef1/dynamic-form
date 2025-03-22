import { IProperty } from "@/lib/store/category/category.model";
import TextInput from "./text-input/TextInput.component";
import DateInput from "./date-input/DateInput.component";
import CountryInput from "./country-input/CountryInput.component";
import NumberInput from "./number-input/NumberInput.component";
import DropdownInput from "./dropdown-input/DropdownInput.component";
import useProperty from "@/hooks/useProperty.hook";

export default function Property({ property }: { property: IProperty }) {
	const { properties, setValue, setSelectedOption, setProperties } =
		useProperty(property);
	let inputComponent: React.ReactNode;
	switch (property.type) {
		case "list":
			inputComponent = (
				<DropdownInput
					setValue={setValue}
					property={property}
					setProperties={setProperties}
					setSelectedOption={setSelectedOption}
				/>
			);
			break;
		case "size":
			inputComponent = <NumberInput setValue={setValue} property={property} />;
			break;
		case "country_made":
			inputComponent = <CountryInput setValue={setValue} property={property} />;
			break;
		case "date":
			inputComponent = <DateInput setValue={setValue} property={property} />;
			break;
		default:
			inputComponent = <TextInput setValue={setValue} property={property} />;
	}
	return (
		<div className="p-4 m-4 border-2 shadow rounded-2xl grow">
			{inputComponent}{" "}
			{properties.map((property) => (
				<Property key={property.id} property={property} />
			))}
		</div>
	);
}
