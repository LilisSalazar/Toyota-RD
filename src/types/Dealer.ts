export interface Dealer {
  title: string;
  address: string;
  phone: string;
  openingHoursLV: string;
  openingHoursS: string;
  isConcesionario: boolean;
  location: {
    _type: 'geopoint';
    lat: number;
    lng: number;
    alt?: number;
  };
}
