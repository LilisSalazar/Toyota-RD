import { SchemaTypeDefinition } from 'sanity';

export const DealersPage: SchemaTypeDefinition = {
  name: 'dealersPage',
  title: 'Dealers Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Dealers Titulo de pagina',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
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
