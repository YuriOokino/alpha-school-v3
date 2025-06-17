# Blog Post Template Instructions

## AI Instructions for Blog Post Creation

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
   - type: always "blog"
   - title: clear, engaging title
   - date: format as "Month DDth, YYYY"
   - authorName: full name
   - authorRole: current role/title
   - authorBio: 2-3 sentences
   - summary: 1-2 sentence summary
   - image: path to webp image
   - content: HTML content with proper classes
   - slug: URL-friendly version of title

4. Content Guidelines:
   - Start with an engaging introduction
   - Use clear section headings
   - Include relevant lists for key points
   - End with a strong conclusion
   - Keep paragraphs concise and readable
   - Use proper HTML structure and classes

5. Image Guidelines:
   - Store in /assets/blog-images/
   - Use descriptive filenames
   - Optimize for web

6. SEO Considerations:
   - Use descriptive titles
   - Include relevant keywords naturally
   - Write clear meta descriptions
   - Use proper heading hierarchy

7. Accessibility:
   - Use semantic HTML
   - Include alt text for images
   - Maintain proper heading structure
   - Ensure good color contrast

8. Style Consistency:
   - Use heading-style-h4 for all headings
   - Maintain consistent spacing
   - Follow the established content structure
   - Use global style variables 

## IMPORTANT: File Location
- All blog post JSON files **must** be saved in the `/content/blog` directory.
- Do NOT save blog posts in `/app`, `/app/blog`, or any other directory.
- Only the `/content/blog` directory is used for loading and displaying blog posts on the site. 