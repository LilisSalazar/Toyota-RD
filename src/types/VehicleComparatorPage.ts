import { SanityImageSource } from '@sanity/asset-utils';

export interface VehicleComparatorProps {
  title: string;
  heroBanner: SanityImageSource;
  modelLeft: ModelLeft[];
  modelRight: ModelRight[];
  detailTitle: string;
}

export interface ModelLeft {
  carName: string;
  modelLeftImg: SanityImageSource;
  categoryLeftTitle: string;
  hoopsLeft: string;
  bluetoothLeft: string;
  airBagsLeft: string;
  insideLeft: string;
  keyLeft: string;
  motorLeft: string;
  tiresLeft: string;
  passengersLeft: string;
  audioSystemLeft: string;
}

export interface ModelRight {
  carName: string;
  modelRightImg: SanityImageSource;
  categoryRightTitle: string;
  hoopsRight: string;
  bluetoothRight: string;
  airBagsRight: string;
  insideRight: string;
  keyRight: string;
  motorRight: string;
  tiresRight: string;
  passengersRight: string;
  audioSystemRight: string;
}

export interface VehicleForComparator {
  title: string;
  brand: string;
  model: string;
  price: string;
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
}
