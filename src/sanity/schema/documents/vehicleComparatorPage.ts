import { SchemaTypeDefinition } from 'sanity';

export const VehicleComparatorPage: SchemaTypeDefinition = {
  name: 'vehicleComparatorPage',
  title: 'Vehicle Comparator Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo de pagina',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug de pagina',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'heroBanner',
      title: 'Hero Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'modelLeft',
      title: 'Model Left',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'carName', title: 'Car Name', type: 'string' },
            { name: 'modelLeftImg', title: 'Model Left Image', type: 'image', options: { hotspot: true } },
            { name: 'categoryLeftTitle', title: 'Category Left Title', type: 'string' },
            { name: 'hoopsLeft', title: 'Hoops Left', type: 'string' },
            { name: 'bluetoothLeft', title: 'Bluetooth Left', type: 'string' },
            { name: 'airBagsLeft', title: 'Air Bags Left', type: 'string' },
            { name: 'insideLeft', title: 'Inside Left', type: 'string' },
            { name: 'keyLeft', title: 'Key Left', type: 'string' },
            { name: 'motorLeft', title: 'Motor Left', type: 'string' },
            { name: 'tiresLeft', title: 'Tires Left', type: 'string' },
            { name: 'passengersLeft', title: 'Passengers Left', type: 'string' },
            { name: 'audioSystemLeft', title: 'Audio System Left', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'modelRight',
      title: 'Model Right',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'carName', title: 'Car Name', type: 'string' },
            { name: 'modelRightImg', title: 'Model Right Image', type: 'image', options: { hotspot: true } },
            { name: 'categoryRightTitle', title: 'Category Right Title', type: 'string' },
            { name: 'hoopsRight', title: 'Hoops Right', type: 'string' },
            { name: 'bluetoothRight', title: 'Bluetooth Right', type: 'string' },
            { name: 'airBagsRight', title: 'Air Bags Right', type: 'string' },
            { name: 'insideRight', title: 'Inside Right', type: 'string' },
            { name: 'keyRight', title: 'Key Right', type: 'string' },
            { name: 'motorRight', title: 'Motor Right', type: 'string' },
            { name: 'tiresRight', title: 'Tires Right', type: 'string' },
            { name: 'passengersRight', title: 'Passengers Right', type: 'string' },
            { name: 'audioSystemRight', title: 'Audio System Right', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'detailTitle',
      title: 'Detail Title',
      type: 'string',
    },
  ],
};
