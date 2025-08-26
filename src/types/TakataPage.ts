import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from '@portabletext/types';

export interface TakataPageProps {
  backgroundHeaderImg: SanityImageSource;
  heroLogo: SanityImageSource;
  heroText: PortableTextBlock[];
  subHeaderImg: SanityImageSource[];
  carrouselFeature: CarrouselFeatureProps[];
  footerTitle: string;
  footerImg: SanityImageSource;
  vehicleArray: BrandYearImageProps[];
}

export interface CarrouselFeatureProps {
  carrouselImg: SanityImageSource;
  carrouselTitle: string;
  carrouselDescription: string;
}

export interface BrandYearImageProps {
  brand: string;
  modelYear: string;
  image: SanityImageSource;
}
