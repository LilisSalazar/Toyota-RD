import { SanityImageSource } from '@sanity/asset-utils';
import { Dealer } from './Dealer';

export interface TestDriveProps {
  title: string;
  carImg: SanityImageSource;
  carDescription: string;
  pickSucursalOptions: string[];
  ModelosAutos: string[];
  dealers: Dealer[];
}
