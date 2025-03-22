import Property from "./property/Property.component";
import useProperties from "@/hooks/useProperties.hook";

export default function Properties() {
	const { properties } = useProperties();

	return (
		<div className="flex flex-wrap">
			{properties.map((property) => (
				<Property key={property.id} property={property} />
			))}
		</div>
	);
}
