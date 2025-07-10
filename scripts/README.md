# Scripts

This folder contains utility scripts for the Alpha School website.

## Campus Page Generator

### `generate-campus-pages.ts`

Automatically generates campus pages for all locations defined in `content/campuses/index.ts`.

#### Usage

```bash
# Run the script using npm
npm run generate-campuses

# Or run directly with tsx
npx tsx scripts/generate-campus-pages.ts
```

#### What it does

1. **Reads campus data** from `content/campuses/index.ts`
2. **Generates pages** for each campus in the `app/[city-name]/page.tsx` format
3. **Uses the template structure** with all the latest components
4. **Skips existing pages** to avoid overwriting custom content
5. **Creates directories** as needed

#### Generated pages include

- ✅ MediaHeading with campus data
- ✅ WelcomeSection with customizable content
- ✅ Campus info section with resources
- ✅ Events carousel with location filtering
- ✅ Gallery and Starseeds sections (conditionally rendered)
- ✅ Proper imports and TypeScript types
- ✅ Campus data integration from index file

#### Customization needed after generation

1. **Welcome section content** - Update the `welcomeLeftColumn` and `welcomeRightColumn` constants
2. **Campus-specific data** - Verify/update campus info in `content/campuses/index.ts`
3. **Gallery images** - Add actual campus photos to the assets folder
4. **Video content** - Uncomment and add campus-specific videos
5. **Configuration flags** - Set `hasGallery` and `hasStarseeds` appropriately

#### Example generated structure

```
app/
├── austin/
│   └── page.tsx
├── houston/
│   └── page.tsx
├── miami/
│   └── page.tsx
└── [other-cities]/
    └── page.tsx
```

#### Safety features

- ✅ Won't overwrite existing pages
- ✅ Creates directories automatically
- ✅ Provides clear console output
- ✅ Error handling for missing data 