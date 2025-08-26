import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from 'next-sanity';

export interface ServicesPageProps {
  headerTitle: string;
  backgroundImgHeader: SanityImageSource;
  promiseTitle: string;
  promiseParagraphs: PortableTextBlock[];
  features: {
    featuresTitle: string;
    featuresDescription: string;
    featuresBackgroundImg: SanityImageSource;
  }[];
}
