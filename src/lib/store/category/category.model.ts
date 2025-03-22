export interface ICategory {
	id: number;
	image: {
		medium: string;
		thumbnail: string;
		id: null;
		custom_properties: null;
		place_holder: {
			medium_bg: string;
			small_bg: string;
			small_no_bg: string;
		};
	};
	is_other: boolean;
	name: string;
	parent_id?: number;
	properties_count: number;
	seo_tags: [];
	slug: string;
}

export interface IOption {
	has_child: boolean;
	id: number;
	name: string;
}

export interface IProperty {
	id: number;
	name: string;
	options: IOption[];
	parent_id: null | number;
	type: string;
}

export interface IInitialState {
	allCategories: ICategory[];
	mainCategories: ICategory[];
	subCategories: ICategory[];
	selectedMainCategory?: ICategory;
	selectedSubCategory?: ICategory;
	properties: IProperty[];
}
