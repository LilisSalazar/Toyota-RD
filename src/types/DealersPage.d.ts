import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from '@portabletext/types';
import { Dealer } from './Dealer';

export interface DealersPageProps {
  title: string;
  dealers: Dealer[];
}
