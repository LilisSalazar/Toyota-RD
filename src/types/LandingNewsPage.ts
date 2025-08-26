import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from 'next-sanity';

export interface LandingNewsPageInterface {
  newsTitle: string;
  paragraphs: PortableTextBlock[];
  coverDetailsImg: SanityImageSource;
}
