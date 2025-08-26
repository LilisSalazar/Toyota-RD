import { SanityImageSource } from '@sanity/asset-utils';

export interface MenuModelsProps {
  options: MenuOption[];
}

interface MenuOption {
  category: string;
  vehicles: Vehicle[];
}

interface Vehicle {
  title: string;
  price: string;
  image: SanityImageSource;
}
