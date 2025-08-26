import { SchemaTypeDefinition } from 'sanity';

export const LandingModelsPage: SchemaTypeDefinition = {
  name: 'landingModelsPage',
  type: 'document',
  title: 'Landing Models Page',
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'heroSlogan',
      title: 'Hero Slogan',
      type: 'string',
    },
    {
      name: 'heroModelTitle',
      title: 'Hero Model Title',
      type: 'string',
    },
    {
      name: 'heroPrice',
      title: 'Hero Price',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'subHeaderTitle',
      title: 'Sub Header Title',
      type: 'string',
    },
    {
      name: 'subHeaderDescription',
      title: 'Sub Header Description',
      type: 'string',
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
    {
      name: 'brochureImg',
      title: 'Brochure Image',
      type: 'image',
    },
    {
      name: 'brochureTitle',
      title: 'Brochure Title',
      type: 'string',
    },
    {
      name: 'pdfFile',
      title: 'Brochure PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'colorOptions',
      title: 'Color Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorImage',
              title: 'Image for this color',
              type: 'image',
            },
            {
              name: 'colorName',
              title: 'Color Name',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'colorValue',
              title: 'Color Value',
              type: 'array',
              of: [
                {
                  type: 'string',
                  description: 'Hex code or valid CSS color string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'functionalitySlogan',
      title: 'Functionality Slogan',
      type: 'string',
    },
    {
      name: 'functionalitySubSlogan',
      title: 'Functionality Sub Slogan',
      type: 'string',
    },
    {
      name: 'functionality',
      title: 'Functionality',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'functionality',
          title: 'Functionality',
          fields: [
            {
              name: 'functionalityTitle',
              title: 'Functionality Title',
              type: 'string',
            },
            {
              name: 'functionalityDescription',
              title: 'Functionality Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
            {
              name: 'functionalityImage',
              title: 'Functionality Image',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    },
    {
      name: 'gallerySubTitle',
      title: 'Gallery Sub Title',
      type: 'string',
    },
    {
      name: 'galleryImagesInside',
      title: 'Gallery Inside Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'galleryImagesOutside',
      title: 'Gallery Outside Images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'chooseLandCruiserTitle',
      title: 'Choose Land Cruiser Title',
      type: 'string',
    },
    {
      name: 'chooseLandCruiser',
      title: 'Choose Land Cruiser',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'chooseLandCruiser',
          title: 'Choose Land Cruiser',
          fields: [
            {
              name: 'landCruiserTitle',
              title: 'Land Cruiser Title',
              type: 'string',
            },
            {
              name: 'landCruiserDescription',
              title: 'Land Cruiser Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                },
              ],
            },
            {
              name: 'landCruiserImage',
              title: 'Land Cruiser Image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
};
