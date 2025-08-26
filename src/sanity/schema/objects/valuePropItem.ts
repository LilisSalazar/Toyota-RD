import { defineType } from 'sanity';

export const ValuePropItem = defineType({
  name: 'valuePropItem',
  title: 'ValueProp Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Value Prop Title',
    },
    {
      name: 'description',
      title: 'Value Prop Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'valueImage',
      title: 'Value Image',
      type: 'image',
    },
  ],
});
