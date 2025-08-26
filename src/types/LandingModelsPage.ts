import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from 'next-sanity';

export interface LandingModelsProps {
  heroImage: SanityImageSource;
  heroSlogan: string;
  heroModelTitle: string;
  heroPrice: string;
  heroDescription: PortableTextBlock[];
  subHeaderTitle: string;
  subHeaderDescription: string;
  features: Features[];
  brochureImg: SanityImageSource;
  brochureTitle: string;
  pdfFile?: string;
  colorOptions: ColorOption[];
  functionality: Functionality[];
  galleryTitle: string;
  gallerySubTitle: string;
  galleryImagesInside: SanityImageSource[];
  galleryImagesOutside: SanityImageSource[];
  functionalitySlogan: string;
  functionalitySubSlogan: string;
  chooseLandCruiserTitle: string;
  chooseLandCruiser: ChooseLandCruiser[];
  slug: Slug;
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

interface Features {
  featuresTitle: string;
  featuresDescription: string;
  featuresBackgroundImg: SanityImageSource;
}

export interface Functionality {
  functionalityTitle: string;
  functionalityDescription: PortableTextBlock[];
  functionalityImage: SanityImageSource;
}

export interface ChooseLandCruiser {
  landCruiserTitle: string;
  landCruiserDescription: PortableTextBlock[];
  landCruiserImage: SanityImageSource;
}

interface Slug {
  current: string;
  _type: string;
}
