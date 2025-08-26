import { defineType } from 'sanity';

export const NavigationLink = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'internalLink',
      title: 'Internal Link',
      description: 'Select pages for navigation',
      type: 'reference',
      to: [
        { type: 'aboutPage' },
        { type: 'newsPage' },
        { type: 'servicesPage' },
        { type: 'repairPage' },
        { type: 'quoterPage' },
        { type: 'calculatorPage' },
        { type: 'takataPage' },
        { type: 'privacyPoliciesPage' },
        { type: 'legalTermsPage' },
        { type: 'landingModelsPage' },
        { type: 'dealersPage' },
        { type: 'vehicleComparatorPage' },
        { type: 'workShopPage' },
        { type: 'hybridsPage' },
        { type: 'testDrivePage' },
        { type: 'homePage' },
        { type: 'menuModelsPage' },
      ],
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      description: 'Use fully qualified URLS for external link',
      type: 'url',
    },
  ],
});
