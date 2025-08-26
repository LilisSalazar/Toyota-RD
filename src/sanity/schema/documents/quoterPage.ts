import { SchemaTypeDefinition } from 'sanity';

export const QuoterPage: SchemaTypeDefinition = {
  name: 'quoterPage',
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
      name: 'carImg',
      title: 'Car Image',
      type: 'image',
    },
    {
      name: 'carDescription',
      title: 'Car Description',
      type: 'string',
    },{
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
