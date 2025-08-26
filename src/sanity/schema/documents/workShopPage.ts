import { SchemaTypeDefinition } from 'sanity';

export const WorkShopPage: SchemaTypeDefinition = {
  name: 'workShopPage',
  type: 'document',
  title: 'WorkShopPage',
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
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    },
    {
      name: 'subHeaderTitle',
      title: 'Sub Header Title',
      type: 'string',
    },
    {
      name: 'subHeaderImg',
      title: 'Sub Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subHeaderDescription',
      title: 'Sub Header Description',
      type: 'string',
    },
    {
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'string',
    },
    {
      name: 'footerImg',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'string',
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
