"use client";
import useFormSection from "@/hooks/useFormSection.hook";
import { FormProvider } from "react-hook-form";
import Properties from "./properties/Properties.component";
import CategoryDropdown from "./category-dropdown/CategoryDropdown.component";
import { Button } from "@/components/ui/button";

export default function FormSection() {
	const {
		form,
		handelSubCategorySelect,
		handleMainCategorySelect,
		mainCategories,
		subCategories,
		selectedSubCategory,
		handleFormSubmit,
	} = useFormSection();

	return (
		<div>
			<FormProvider {...form}>
				<form
					className="p-4 m-4 border-2 shadow rounded-2xl"
					onSubmit={form.handleSubmit(handleFormSubmit)}
				>
					<div className="flex flex-wrap gap-4">
						<CategoryDropdown
							title="Main Category"
							onChange={handleMainCategorySelect}
							options={mainCategories}
						/>
						{!!subCategories.length && (
							<CategoryDropdown
								title="Sub Category"
								onChange={handelSubCategorySelect}
								options={subCategories}
							/>
						)}
					</div>
					<Properties />
					{!!selectedSubCategory && (
						<Button
							className="mx-auto w-full mt-4"
							variant={"linear"}
							size={"lg"}
							type="submit"
						>
							Submit
						</Button>
					)}
				</form>
			</FormProvider>
		</div>
	);
}
