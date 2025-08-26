import { SchemaTypeDefinition } from 'sanity';

export const ServicesPage: SchemaTypeDefinition = {
  name: 'servicesPage',
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
      name: 'backgroundImgHeader',
      title: 'Background Image Header',
      type: 'image',
    },
    {
      name: 'promiseTitle',
      title: 'Promise Title',
      type: 'string',
    },
    {
      name: 'promiseParagraphs',
      title: 'Promise Paragraphs',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            {
              name: 'featuresTitle',
              title: 'Features Title',
              type: 'string',
            },
            {
              name: 'featuresDescription',
              title: 'Features Description',
              type: 'string',
            },
            {
              name: 'featuresBackgroundImg',
              title: 'Features Background Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
};
