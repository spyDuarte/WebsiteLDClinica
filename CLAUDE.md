# CLAUDE.md - AI Assistant Guide

This document provides essential context for AI assistants working with the Dr. Lucas Duarte medical portfolio website.

## Project Overview

A professional static website for Dr. Lucas Duarte, a physician operating in Santa Catarina (SC) and Rio de Janeiro (RJ), Brazil. The site showcases medical services, clinic locations, patient testimonials, and provides a contact form.

**Live URL:** https://spyduarte.github.io/WebsiteLDClinica/

## Technology Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic structure) |
| Styling | CSS3 (Flexbox, Grid, CSS Variables) |
| Scripts | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts - Poppins (300, 400, 600, 700) |
| Hosting | GitHub Pages (static) |
| CI/CD | GitHub Actions |

**No build process required** - This is a pure static site with no dependencies to install.

## Project Structure

```
WebsiteLDClinica/
├── index.html          # Main HTML page (all content)
├── styles.css          # All styling (1,183 lines)
├── script.js           # All interactivity (287 lines)
├── .nojekyll           # Disables Jekyll processing
├── README.md           # User-facing documentation (Portuguese)
├── COMO-ATIVAR.md      # GitHub Pages activation guide (Portuguese)
├── CLAUDE.md           # This file (AI assistant guide)
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Actions deployment workflow
```

## Key Files

### index.html
- **Lines 1-60:** Head, navigation, header
- **Lines 61-120:** Hero section with CTA buttons
- **Lines 121-180:** About section with feature highlights
- **Lines 181-240:** Specialties section (4 service cards)
- **Lines 241-300:** Location section (SC and RJ clinics)
- **Lines 301-360:** Testimonials section (3 reviews)
- **Lines 361-420:** Contact section (form + info)
- **Lines 421-464:** Footer

### styles.css
CSS is organized in logical sections:
- **Lines 1-46:** CSS Variables and reset
- **Lines 48-152:** Header/navigation
- **Lines 153-279:** Hero and buttons
- **Lines 281-530:** Content sections (About, Specialties)
- **Lines 531-735:** Location and Testimonials
- **Lines 736-959:** Contact and Footer
- **Lines 960-1183:** Animations and responsive breakpoints

### script.js
JavaScript functionality:
- Mobile menu toggle
- Smooth scrolling navigation
- Header scroll effects
- Active navigation link detection
- Form validation (email, phone)
- Brazilian phone formatting: (XX) XXXXX-XXXX
- Toast notification system
- Intersection Observer for animations
- Parallax effect on hero section

## Design System

### Color Palette (CSS Variables)
```css
--primary: #0ea5e9        /* Sky blue */
--primary-dark: #0284c7   /* Darker blue */
--secondary: #06b6d4      /* Cyan */
--accent: #0369a1         /* Deep blue */
--text-dark: #1e293b      /* Dark slate */
--text-medium: #475569    /* Medium slate */
--text-light: #94a3b8     /* Light slate */
--bg-light: #f8fafc       /* Very light gray */
```

### Responsive Breakpoints
- **1400px:** Large desktop
- **1024px:** Desktop/tablet transition
- **968px:** Mobile menu activation
- **640px:** Small tablet
- **480px:** Mobile phones

### Typography
- Font: Poppins
- Weights: 300 (light), 400 (regular), 600 (semi-bold), 700 (bold)
- Size scale: 0.75rem to 3.5rem

## Common Tasks

### Updating Contact Information
Edit `index.html` for:
- **CRM numbers:** Search for "CRM-SC" and "CRM-RJ"
- **Addresses:** Look in the locations section
- **Phones:** Search for "tel:" links
- **Email:** Search for "mailto:"
- **Social links:** Search for social platform names

### Modifying Styles
1. Check if a CSS variable already exists for the property
2. Prefer using existing variables: `var(--primary)`, `var(--shadow-md)`
3. Add new styles following the existing section organization
4. Test at all breakpoints (968px, 640px, 480px minimum)

### Adding New Sections
1. Follow existing HTML structure: `<section class="section-name" id="anchor">`
2. Add corresponding CSS in `styles.css` following section organization
3. Update navigation in header if needed
4. Add responsive styles at each breakpoint

### Updating Testimonials
Each testimonial card structure:
```html
<div class="testimonial-card">
  <div class="testimonial-header">
    <div class="testimonial-avatar">INITIALS</div>
    <div class="testimonial-info">
      <h4>Name</h4>
      <span>Location</span>
    </div>
  </div>
  <div class="testimonial-rating"><!-- 5 star SVGs --></div>
  <p class="testimonial-text">"Review text"</p>
</div>
```

## Development Workflow

### Making Changes
```bash
# Edit files directly - no build step needed
# Test locally by opening index.html in browser

# Commit and deploy
git add .
git commit -m "Description of changes"
git push
```

### Deployment
- **Automatic:** Push to `main` triggers GitHub Actions
- **Manual:** Go to Actions tab → "Run workflow"
- **Time to deploy:** ~2 minutes

### Testing Locally
Open `index.html` directly in a browser. All features work locally except:
- Form submission (logs to console only - no backend)

## Code Conventions

### HTML
- Use semantic elements (`<section>`, `<nav>`, `<header>`, etc.)
- All icons are inline SVGs (no external icon dependencies)
- Links to external sites use `target="_blank" rel="noopener noreferrer"`
- Form inputs have associated labels

### CSS
- Use CSS variables for colors and shadows
- Mobile-first responsive design
- Transitions use `cubic-bezier` easing for smooth animations
- Hover effects include both visual change and box-shadow

### JavaScript
- Vanilla JS only - no frameworks
- Event listeners use modern syntax
- Form validation includes regex patterns
- Notifications are created dynamically

## Language

All user-facing content is in **Brazilian Portuguese (pt-BR)**. Documentation files (README.md, COMO-ATIVAR.md) are also in Portuguese. When making content changes, maintain Portuguese language consistency.

## Important Notes

1. **No backend:** Form submissions log to console only. Integrate with a form service (Formspree, Netlify Forms, etc.) for actual email delivery.

2. **Placeholder data:** CRM numbers show "00000" and need real values.

3. **GitHub Pages:** Deployed via GitHub Actions, not branch deployment. Source must be set to "GitHub Actions" in repository settings.

4. **No dependencies:** No npm, no package.json, no node_modules. Just static files.

5. **SVG icons:** All icons are inline SVGs styled with CSS. To change icon colors, modify CSS `stroke` property.

## Quick Reference

| Task | Location |
|------|----------|
| Change site colors | `styles.css` lines 1-46 (CSS variables) |
| Update navigation | `index.html` lines 14-35 |
| Edit hero text | `index.html` lines 61-90 |
| Modify services | `index.html` lines 181-240 |
| Update locations | `index.html` lines 241-300 |
| Change testimonials | `index.html` lines 301-360 |
| Edit contact info | `index.html` lines 361-420 |
| Adjust breakpoints | `styles.css` lines 972-1172 |
| Modify animations | `styles.css` lines 960-970 |
