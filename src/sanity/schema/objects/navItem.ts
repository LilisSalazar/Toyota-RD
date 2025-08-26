import { defineType } from 'sanity';

export const NavigationItem = defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Navigation Text',
    },
    {
      name: 'url',
      type: 'link',
      title: 'Navigation Item URL',
    },
  ],
});
