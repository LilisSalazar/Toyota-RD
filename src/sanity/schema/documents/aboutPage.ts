import { SchemaTypeDefinition } from 'sanity';

export const AboutPage: SchemaTypeDefinition = {
  name: 'aboutPage',
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
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },
    {
      name: 'valuePropItems',
      type: 'array',
      title: 'ValueProp items',
      of: [{ type: 'valuePropItem' }],
    },
    {
      name: 'historyTitle',
      title: 'History Title',
      type: 'string',
    },
    {
      name: 'historyDescription',
      title: 'History Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'historyBackgroundImg',
      title: 'History Background Image',
      type: 'image',
    },
    {
      name: 'policyTitle',
      title: 'Policy Title',
      type: 'string',
    },
    {
      name: 'policyDescription',
      title: 'Policy Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'policyBackgroundImg',
      title: 'Policy Background Image',
      type: 'image',
    },
    {
      name: 'policyMobileSection',
      title: 'Policy Mobile Section',
      type: 'object',
      fields: [
        {
          name: 'firstImage',
          title: 'First Image',
          type: 'image',
        },
        {
          name: 'secondImage',
          title: 'Second Image',
          type: 'image',
        },
        {
          name: 'thirdImage',
          title: 'Third Image',
          type: 'image',
        },
        {
          name: 'fourthImage',
          title: 'Fourth Image',
          type: 'image',
        },
        {
          name: 'firstSection',
          title: 'First Section',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'secondSection',
          title: 'Second Section',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'thirdSection',
          title: 'Third Section',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'fourthSection',
          title: 'Fourth Section',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
      ],
    },
  ],
};
