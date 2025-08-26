import { SanityImageSource } from '@sanity/asset-utils';
import { News } from './NewsSection';

export interface HybridsPageProps {
  heroSection: {
    backgroundImage: SanityImageSource;
    title: string;
    subtitle: string;
    icon: SanityImageSource;
  };
  whatSection: {
    title: string;
    image: SanityImageSource;
    content: string[];
  };
  benefits: {
    title: string;
    description: string;
    icon: SanityImageSource;
  }[];
  savingSection: {
    backgroundImage: SanityImageSource;
    text: string;
  };
  newsSection: {
    title: string;
    news: News[];
  };
}
