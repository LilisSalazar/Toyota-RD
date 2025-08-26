import { SchemaTypeDefinition } from 'sanity';

export const HybridsPage: SchemaTypeDefinition = {
  name: 'hybridsPage',
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
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'whatSection',
      title: 'What Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'savingSection',
      title: 'Saving Section',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'text',
        },
      ],
    },
    {
      name: 'newsSection',
      title: 'News Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'news',
          title: 'Toyota News',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{ type: 'landingNewsPage' }],
            },
          ],
        },
      ],
    },
  ],
};
