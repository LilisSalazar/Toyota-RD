import { SchemaTypeDefinition } from 'sanity';

export const LegalTermsPage: SchemaTypeDefinition = {
  name: 'legalTermsPage',
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
};
