import { SchemaTypeDefinition } from 'sanity';

export const TestDrivePage: SchemaTypeDefinition = {
  name: 'testDrivePage',
  type: 'document',
  fields: [
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'carImg',
      title: 'Car Image',
      type: 'image',
    },
    {
      name: 'carDescription',
      title: 'Car Description',
      type: 'string',
    },
    {
      name: 'pickSucursalOptions',
      title: 'Pick Sucursal Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ModelosAutos',
      title: 'Modelos autos Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'dealers',
      type: 'array',
      title: 'Dealer items',
      of: [
        {
          type: 'reference',
          to: [{ type: 'dealer' }],
        },
      ],
    },
  ],
};
