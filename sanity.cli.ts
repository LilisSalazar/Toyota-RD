import { defineCliConfig } from 'sanity/cli';
import tsconfigPaths from 'vite-tsconfig-paths';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '08f751s7';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: { projectId, dataset },
  vite: {
    plugins: [tsconfigPaths()],
  },
  studioHost: 'https://toyota-tests.vercel.app/'
});
