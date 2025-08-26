import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from '@portabletext/types';
import { VehicleVariant } from './VehicleVariant';

export interface Vehicle {
  slug: {
    current: string;
  };
  title: string;
  brand: string;
  model: string;
  price: number;
  modelYear: string;
  shortDescription: string;
  heroPrice: string;
  subHeaderTitle: string;
  subHeaderDescription: string;
  gallerySubTitle: string;
  fullDescription: PortableTextBlock[];
  brochureTitle: string;
  pdfFile: {
    asset: {
      url: string;
    };
  };
  brochureImg: SanityImageSource;
  image: SanityImageSource;
  menuImage: SanityImageSource;
  heroImage: SanityImageSource;
  logo: SanityImageSource;
  galleryImagesInside: SanityImageSource[];
  galleryImagesOutside: SanityImageSource[];
  functionalitySubSlogan: string;
  functionality: Array<{
    functionalityTitle: string;
    functionalityDescription: PortableTextBlock[];
    functionalityImage: SanityImageSource;
  }>;
  chooseVariantTitle: string;
  chooseVariant: Array<VehicleVariant>;
  colorOptions: Array<ColorOption>;
  features: Array<{
    featuresTitle: string;
    featuresDescription: string;
    featuresBackgroundImg: SanityImageSource;
  }>;
  technicalDetailsSection: {
    motor: string;
    transmission: string;
    frontSuspension: string;
    rearSuspension: string;
    brakes: string;
    tires: string;
    traction: string;
    category: string;
    rims: string;
    bluetooth: string;
    airbags: number;
    interior: string;
    key: string;
    passengers: number;
    audioSystem: string;
  };
}

export interface ColorOption {
  colorName: string[] | string;
  colorValue: string[] | string;
  colorImage: {
    asset: {
      url: string;
    };
  };
}
