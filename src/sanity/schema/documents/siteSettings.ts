import { SchemaTypeDefinition } from 'sanity';

export const SiteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description (SEO)',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
    },
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      description: 'Select component for navigation',
      type: 'reference',
      to: [{ type: 'navigation' }],
    },
    {
      name: 'mainFooter',
      title: 'Main Footer',
      description: 'Select footer component',
      type: 'reference',
      to: [{ type: 'footer' }],
    },
  ],
};
