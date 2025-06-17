# News Article Template Instructions

## AI Instructions for News Article Creation

1. Structure:
   - Always use the exact same JSON structure as the template
   - Maintain all fields, even if some are optional
   - Keep the content wrapped in a div with space-y-[var(--space-md)] class

2. Content Formatting:
   - Use heading-style-h4 class for all h2 headings
   - Wrap all content in a div with space-y-[var(--space-md)] class
   - Use proper HTML tags: <p> for paragraphs, <ul> and <li> for lists
   - Maintain consistent spacing between sections

3. Required Fields:
   - id: unique identifier, lowercase with hyphens
   - type: always "news"
   - title: clear, newsworthy title
   - date: format as "Month DDth, YYYY"
   - authorName: full name
   - authorRole: current role/title
   - authorBio: 2-3 sentences
   - summary: 1-2 sentence summary
   - image: path to webp image
   - content: HTML content with proper classes
   - slug: URL-friendly version of title

4. News-Specific Guidelines:
   - Lead with the most important information
   - Use the inverted pyramid structure
   - Include relevant quotes when available
   - Focus on facts and verifiable information
   - Keep content timely and relevant
   - Use clear, journalistic language

5. Content Structure:
   - Opening: Hook and key information
   - Body: Supporting details and context
   - Impact: How it affects the community
   - Future: Next steps or implications
   - Use lists for key points or highlights

6. Image Guidelines:
   - Store in /assets/news-images/
   - Use descriptive filenames
   - Optimize for web
   - Ensure images are relevant to the story

7. SEO Considerations:
   - Use descriptive, newsworthy titles
   - Include relevant keywords naturally
   - Write clear meta descriptions
   - Use proper heading hierarchy
   - Include location and date information

8. Accessibility:
   - Use semantic HTML
   - Include alt text for images
   - Maintain proper heading structure
   - Ensure good color contrast
   - Make content easily scannable

9. Style Consistency:
   - Use heading-style-h4 for all headings
   - Maintain consistent spacing
   - Follow the established content structure
   - Use global style variables
   - Keep a professional, journalistic tone 

   ## IMPORTANT: File Location
- All news articles post JSON files **must** be saved in the `/content/news` directory.
- Do NOT save news articles posts in `/app`, `/app/news`, or any other directory.
- Only the `/content/news` directory is used for loading and displaying news articles on the site. 