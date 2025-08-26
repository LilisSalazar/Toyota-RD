import { SchemaTypeDefinition } from 'sanity';

export const NavigationMenu: SchemaTypeDefinition = {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'items',
      type: 'array',
      title: 'Navigation items',
      of: [
        {
          type: 'reference',
          to: [{ type: 'navigationItem' }],
        },
      ],
    },
  ],
};
