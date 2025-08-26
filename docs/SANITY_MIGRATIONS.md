# Sanity Migrations

Sanity provides a way to migrate your content using migrations. Here's an example of how to run a migration:

## Example code

```javascript
import { defineMigration, set } from 'sanity/migrate';

export default defineMigration({
  title: 'feature-item-content',
  documentTypes: ['page'], // filter documents to migrate
  migrate: {
    node(node, path, context) {
      if (node?._type === 'featureSection') {
        // 'set' will overwrite the node with the new value
        return set({
          ...node,
          features: node.features?.map((feature) => {
            return {
              ...feature,
              // we're changing the type of the feature.description field from a string to a block.
              description: [
                {
                  _type: 'block',
                  style: 'normal',
                  // we will keep the previous 'text' value
                  children: [{ _type: 'span', text: feature.description ?? '', marks: [] }],
                  markDefs: [],
                },
              ],
            };
          }),
        });
      }
    },
  },
});
```

## Migration instructions

- Make sure you have the Sanity CLI installed: `pnpm install -g @sanity/cli`
- Run `sanity login` to authenticate with the Sanity API. Sanity will use the sanity.cli.ts configuration to determine the project ID and dataset name. If you need to switch between projects, you can edit the values in the .env file.
- Check your datasets by running `sanity dataset list`.
- If you want to create a backup of your current dataset, run `sanity dataset export "DATABASE_NAME" "example_name.tar.gz"`.
- If you want to restore a backup, run `sanity dataset import "example_name.tar.gz" --replace` (this command will ask you to select the dataset you want to restore or if you want to create a new one).
- Create a folder in the root of your project and name it 'migrations'.
- Then create a file in this folder with a name that you can use as an ID, for example: migration-content.js or .ts
  You can also create a folder called migration-content and a file within it called index.js or .ts.
- Run `sanity migration list` to see a list of all migrations that have been run.
- Once you have created your migration file, you can check a preview by running `sanity migration run migration-content`.
- Make sure your migration is working as expected by making changes to your dataset and running `sanity migration run migration-content --concurrency 1 --no-dry-run`.
