import { SanityImageSource } from '@sanity/asset-utils';
import { Dealer } from './Dealer';

export interface RepairPageProps {
  headerImg: SanityImageSource;
  headerTitle: string;
  sectionTitle: string;
  pickMarcaOptions: string[];
  dealers: Dealer[];
  features: {
    featuresTitle: string;
    featuresDescription: string;
    featuresBackgroundImg: SanityImageSource;
  }[];
  dataBrand: string[];
}
