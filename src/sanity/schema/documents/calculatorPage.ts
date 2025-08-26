import { SchemaTypeDefinition } from 'sanity';

export const CalculatorPage: SchemaTypeDefinition = {
  name: 'calculatorPage',
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
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
    },
    {
      name: 'headerDescription',
      title: 'Header Description',
      type: 'string',
    },
    {
      name: 'notas',
      title: 'Notas',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
