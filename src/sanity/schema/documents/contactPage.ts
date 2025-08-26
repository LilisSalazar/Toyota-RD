import { SchemaTypeDefinition } from 'sanity';

export const ContactPage: SchemaTypeDefinition = {
  name: 'contactPage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
