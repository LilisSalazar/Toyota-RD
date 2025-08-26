import { SchemaTypeDefinition } from 'sanity';

export const Footer: SchemaTypeDefinition = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'mission',
      type: 'string',
      title: 'Mission',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'col1Title',
      type: 'string',
      title: 'First column title',
    },
    {
      name: 'col1Links',
      type: 'array',
      title: 'First column links',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigationItem' }],
        },
      ],
    },
    {
      name: 'col2Title',
      type: 'string',
      title: 'Second column title',
    },
    {
      name: 'col2Links',
      type: 'array',
      title: 'Second column links',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigationItem' }],
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'string',
      title: 'Copyright Text',
    },
  ],
};
