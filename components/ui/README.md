# Campus-Specific Application System

This system allows for campus-specific application forms that pre-populate with campus information and track which campus the application is for.

## How it works

### URL Structure
Applications can be accessed with campus-specific URLs:
- `/application?submission_campus=austin_k8` - Austin campus application
- `/application?submission_campus=brownsville_k8` - Brownsville campus application
- `/application?submission_campus=houston_k8` - Houston campus application
- etc.

### Components

#### CampusApplicationLink
A reusable component for creating campus-specific application links:

```tsx
import { CampusApplicationLink } from "@/components/ui/campus-application-link";

// Basic usage
<CampusApplicationLink campusName="Austin">
  Apply to Austin
</CampusApplicationLink>

// With custom styling
<CampusApplicationLink 
  campusName="Brownsville" 
  variant="primary" 
  size="lg"
  className="custom-class"
>
  Apply Today!
</CampusApplicationLink>

// With specific grade
<CampusApplicationLink campusName="Austin" grade="k5">
  Apply for Kindergarten
</CampusApplicationLink>
```

### Utility Functions

#### getCampusApplicationUrl(campusName, grade?)
Generates a campus-specific application URL:
```tsx
import { getCampusApplicationUrl } from "@/utils/campuses";

const url = getCampusApplicationUrl("Austin", "k8");
// Returns: "/application?submission_campus=austin_k8"
```

#### parseCampusFromUrl(param)
Parses campus information from URL parameter:
```tsx
import { parseCampusFromUrl } from "@/utils/campuses";

const campus = parseCampusFromUrl("austin_k8");
// Returns campus object with name, address, tuition, etc.
```

## Implementation Details

### Application Page Features
- Automatically detects campus from URL parameter
- Pre-populates campus information in the form
- Shows campus-specific details (address, tuition, grades, email)
- Includes hidden campus field in form submission
- Updates page title to include campus name

### Campus Data
Campus information is stored in `content/campuses/index.ts` and includes:
- Campus name
- Status (current/upcoming)
- Address
- Tuition
- Grades served
- Contact email
- Hero image
- Application status

## Usage Examples

### In Campus Pages
Replace generic application buttons with campus-specific ones:

```tsx
// Before
<Button href="/application">Apply Today!</Button>

// After
<CampusApplicationLink campusName="Austin">
  Apply Today!
</CampusApplicationLink>
```

### In Navigation or Other Components
```tsx
// Generate links programmatically
const applicationUrl = getCampusApplicationUrl("Austin");
<Link href={applicationUrl}>Apply to Austin</Link>

// Or use the component
<CampusApplicationLink campusName="Austin" variant="outline">
  Learn More & Apply
</CampusApplicationLink>
```

## Benefits

1. **Better UX**: Users see campus-specific information immediately
2. **Tracking**: Applications are automatically tagged with the correct campus
3. **Consistency**: All campus pages use the same application system
4. **Maintainability**: Centralized campus data and utility functions
5. **SEO**: Campus-specific URLs for better search engine optimization 