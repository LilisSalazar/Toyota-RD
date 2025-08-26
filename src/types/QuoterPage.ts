import { SanityImageSource } from '@sanity/asset-utils';
import { Dealer } from './Dealer';

export interface QuoterPageProps {
  title: string;
  carImg: SanityImageSource;
  carDescription: string;
  ModelosAutos:string[];
  dealers: Dealer[];
}
