import { type SchemaTypeDefinition, defineType } from 'sanity';

import { NavigationItem } from './objects/navItem';
import { NavigationLink } from './objects/navLink';
import { ValuePropItem } from './objects/valuePropItem';
import { NewsPage } from './objects/newsPage';
import { LandingNewsPage } from './objects/landingNewsPage';
import { WorkShopPage } from './documents/workShopPage';
import { Dealer } from './objects/dealer';
import { Vehicle } from './objects/vehicle';

import { SiteSettings } from './documents/siteSettings';
import { Page } from './documents/page';
import { Footer } from './documents/footer';
import { NavigationMenu } from './documents/navigation';
import { AboutPage } from './documents/aboutPage';
import { ServicesPage } from './documents/servicesPage';
import { RepairPage } from './documents/repairPage';
import { CalculatorPage } from './documents/calculatorPage';
import { QuoterPage } from './documents/quoterPage';
import { TakataPage } from './documents/takataPage';
import { PrivacyPoliciesPage } from './documents/privacyPolicies';
import { LegalTermsPage } from './documents/legalTerms';
import { LandingModelsPage } from './documents/landingModelsPage';
import { HybridsPage } from './documents/hybridsPage';
import { DealersPage } from './documents/dealersPage';
import { VehicleComparatorPage } from './documents/vehicleComparatorPage';
import { TestDrivePage } from './documents/testDrivePage';
import { HomePage } from './documents/homePage';
import { MenuModelsPage } from './documents/menuModelsPage';
import { ContactPage } from './documents/contactPage';
import { VehicleCategory } from './objects/vehicleCategory';
import { VehicleVariant } from './documents/vehicleVariant';

const objectTypes = [NavigationItem, NavigationLink, ValuePropItem, NewsPage, LandingNewsPage, Dealer];
const documentTypes = [
  SiteSettings,
  Page,
  Footer,
  NavigationMenu,
  AboutPage,
  ServicesPage,
  RepairPage,
  CalculatorPage,
  QuoterPage,
  TakataPage,
  PrivacyPoliciesPage,
  LegalTermsPage,
  LandingModelsPage,
  HybridsPage,
  DealersPage,
  VehicleComparatorPage,
  TestDrivePage,
  HomePage,
  WorkShopPage,
  MenuModelsPage,
  ContactPage,
  Vehicle,
  VehicleCategory,
  VehicleVariant,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objectTypes, ...documentTypes],
};
