import { defineType } from 'sanity';

export const Dealer = defineType({
  name: 'dealer',
  title: 'Dealer',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Dealer Title',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Dealer address',
    },
    {
      name: 'phone',
      title: 'Dealer phone',
      type: 'string',
    },
    {
      name: 'openingHoursLV',
      title: 'Opening Hours Lun-Vie',
      type: 'string',
    },
    {
      name: 'openingHoursS',
      title: 'Opening Hours Sab',
      type: 'string',
    },
    {
      name: 'isConcesionario',
      title: 'Es un Concesionario?',
      type: 'boolean',
    },
    {
      name: 'location',
      title: 'Ubicacion',
      type: 'geopoint',
    },
  ],
});
