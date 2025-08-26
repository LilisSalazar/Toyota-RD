import { SchemaTypeDefinition } from 'sanity';

export const RepairPage: SchemaTypeDefinition = {
  name: 'repairPage',
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
      name: 'headerImg',
      title: 'Header Image',
      type: 'image',
    },
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'pickMarcaOptions',
      title: 'Pick Marca Options',
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
