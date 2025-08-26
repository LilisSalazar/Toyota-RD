import { SanityImageSource } from '@sanity/asset-utils';

export interface VehicleVariant {
  slug: {
    current: string;
  };
  title: string;
  image: SanityImageSource;
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
  customAttributes: Array<CustomAttribute>;
}

interface CustomAttribute {
  title: string;
  value: string;
}
