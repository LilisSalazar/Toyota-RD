import { SanityImageSource } from '@sanity/asset-utils';

interface Slug {
  current: string;
  _type: string;
}

export interface VehicleForCategory {
  title: string;
  model: string;
  slug: Slug;
  price: number;
  shortDescription: string;
  image: SanityImageSource;
}

export interface VehicleCategoryProps {
  categoryTitle: string;
  categoryIcon: SanityImageSource;
  vehicles: Array<VehicleForCategory>;
}
