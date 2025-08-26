import { SchemaTypeDefinition } from 'sanity';

export const VehicleCategory: SchemaTypeDefinition = {
  name: 'vehicleCategory',
  type: 'document',
  title: 'Vehicle Category',
  fields: [
    {
      name: 'categoryTitle',
      title: 'Category Title',
      type: 'string',
    },
    {
      name: 'categoryIcon',
      title: 'Category Icon',
      type: 'image',
    },
    {
      name: 'vehicles',
      title: 'Vehicles',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'vehicle' }],
        },
      ],
    },
  ],
};
