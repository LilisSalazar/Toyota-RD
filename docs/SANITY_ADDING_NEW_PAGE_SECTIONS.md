# Adding New Page Sections

This guide details the process for creating and integrating new Page Sections within the Sanity CMS and the frontend.

## Step 1: Defining the Schema in Sanity

### Create a new entry in the schema folder

- Open or create a file (e.g.: `sections.ts`).

### Define the Schema Structure

In `sections.ts`, define the schema:

```typescript
import { SchemaTypeDefinition } from 'sanity';

. . .

export const newSection: SchemaTypeDefinition = {
  name: 'newSection',
  title: 'New Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    // Add other necessary fields
  ],
};
```

### Update the Main Schema File

In `schemas/index.ts`:

```typescript
import { newSection } from '.@/schema/sections';

// ... other imports

export const schemaTypes = [
  // ... other schemas,
  newSection,
];
```

### Update the Page Schema

In `schemas/page.ts`:

```typescript
import { newSection } from '@/sanity/sections';

// ... other imports

export const page: SchemaTypeDefinition = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    // ... other fields
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        // ... other section types
        { type: 'newSection' }, // Add the new section type
      ],
    },
  ],
};
```

## Step 2: Implementing the Section in React

### Create a New React Component

- In the React project, create `NewSection.js` or `NewSection.tsx` in `components`.

### Write the Component Code

Example React component:

```jsx
const NewSection = ({ title, description }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Render other fields */}
    </section>
  );
};

export default NewSection;
```

### Update the sanity queries

- Update the queries in `@/sanity/lib/queries.ts` to include the new section.
  - Update any `groq` queries in the file mentioned above to include the new section.
  - Update TypeScript types in the same file to include the new section.

### Integrate the Component in the Page

Add your new section to the page content map in `@/components/pageContentMap.ts`:

```javascript
import {
  //... other sections
  NewSection,
} from '@/components';

type pageContentMapType = {
  [key: string]: React.ComponentType<any>;
};

export const pageContentMap: pageContentMapType = {
  //... other sections
  newSection: NewSection,
};

```

The component at `@/components/PageContent.tsx` will include the new section if it is present in the page content map.

## Step 3: Testing

### Test the Schema in Sanity

- Ensure the new section can be created and saved in Sanity Studio.

### Test the Component in React

- Use hot-reloading to preview the new section.
- Check for correct rendering and responsiveness.

### Write Tests (Optional)

- Write unit and integration tests for the new component.

### Deploy the Changes

- Deploy your React application after thorough testing.

### Content Creation

- Content creators should add and arrange the new section on pages as needed.

## For usage of Sanity Queries

some recomendations:

- There is a dropdown to select the perspective (raw, draft, published). So you are going to have diferent values depending on the perspective.
- You can check more information about GROQ here [groq language](https://www.sanity.io/docs/groq).
- Here is an example of GROQ query to get the content of a page:

```javascript
*[_type == "page" && slug.current == $slug][0] {
_id,
  title,
  description,
  "slug": slug.current,
  content[]{
    ...
  }
}
```

- You can get URL images by using this notation:

```javascript
_type == 'newType' => {
     image{
       ...,
       asset->{
         ...
       }
     }
   }
```

If this is not specified, the image value will be an object.

- Documents are returned by default in ascending order by `_id`, which may not be what you're after. If you're querying for a subset of your documents, it's usually a good idea to specify an order.

```javascript
*[_type == "page"] | order(_updatedAt desc) {
  ...
}`;
```
