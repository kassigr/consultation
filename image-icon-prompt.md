# Prompt for Images and Icons Implementation

## Add to your Gemini CLI request:

**"For the images and icons in this website, please implement the following solutions:**

### 1. USE SVG ICONS DIRECTLY IN THE CODE
Instead of external icon files, create inline SVG icons directly in the HTML. For each icon needed (services, features, social media), write the complete SVG code inline. For example:

```html
<!-- Create actual SVG code like this for each icon -->
<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <!-- Include the full SVG path data -->
</svg>
```

Create custom SVG icons for:
- Stress management icon (brain/meditation symbol)
- Work-life balance icon (scale/balance symbol)  
- Consultation icon (chat/people symbol)
- Workshop icon (group/presentation symbol)
- Check marks for features
- Arrow icons for buttons
- Social media icons (LinkedIn, Twitter, Email)
- Navigation menu hamburger icon

### 2. USE PLACEHOLDER IMAGE SERVICES
For photos and larger images, use placeholder services with proper sizing. Include these exact URLs in the img tags:

```html
<!-- Hero section background -->
<img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop" alt="Peaceful meditation scene">

<!-- About section photo -->
<img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop" alt="Professional consultant">

<!-- Blog post thumbnails -->
<img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=300&h=200&fit=crop" alt="Blog post about stress management">

<!-- Background patterns - use CSS gradients -->
Use CSS gradient backgrounds instead of image files
```

### 3. CREATE CSS-BASED GRAPHICS
For decorative elements and patterns, create them with pure CSS:

```css
/* Create geometric patterns with CSS */
.pattern-background {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
}

/* Create loading spinners with CSS */
.spinner {
  border: 3px solid rgba(74, 144, 226, 0.1);
  border-top-color: #4A90E2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### 4. INCLUDE A COMPREHENSIVE IMAGE GUIDE
Create a file called `image-assets-guide.md` that lists:

```markdown
# Image Assets to Add Later

## Required Images:
1. **Hero Background** (1920x1080)
   - Current placeholder: Unsplash meditation scene
   - Replace with: Professional photo of calm workspace or nature scene
   
2. **Profile Photo** (400x400)  
   - Current placeholder: Generic professional photo
   - Replace with: Your professional headshot

3. **Service Icons** (SVG or 100x100 PNG)
   - Currently using inline SVG
   - Can replace with custom branded icons

## How to Replace Images:
1. Add your images to the `/images/` folder
2. Update the src paths in index.html
3. Optimize images before uploading (use TinyPNG or similar)

## Free Image Resources:
- Unsplash.com - Free stock photos
- Pexels.com - Free stock photos  
- Heroicons.com - Free SVG icons
- Feathericons.com - Free SVG icons
- SVGRepo.com - Free SVG icons and illustrations
```

### 5. IMPLEMENT LAZY LOADING
Add lazy loading for better performance:

```html
<img loading="lazy" src="..." alt="...">
```

### 6. CREATE ICON FONT FALLBACK
Include Font Awesome via CDN as a fallback option:

```html
<!-- Add to head section -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Use in HTML -->
<i class="fas fa-brain"></i>
<i class="fas fa-balance-scale"></i>
<i class="fas fa-comments"></i>
```

### 7. GENERATE A FAVICON
Create a simple SVG favicon directly in the code:

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='50' x='50' text-anchor='middle' font-size='80'>🧘</text></svg>">
```

**IMPORTANT: For each image and icon placement in the HTML, include:**
- Descriptive alt text
- Proper dimensions (width/height attributes)
- Appropriate loading strategy
- Fallback background colors
- Comments indicating what type of image should go there

**Please implement ALL of these solutions in the code, creating a fully functional website that looks complete even without custom images, while making it easy for me to add my own images later.**"

---

## Additional Tips for Using This Prompt:

1. **Be specific about icon styles** - Tell Gemini if you want outlined, filled, or colored icons

2. **Request CSS art** for simple graphics:
   - "Create a CSS-only meditation icon using border-radius and gradients"
   - "Make a breathing animation with pure CSS"

3. **Use emojis as temporary icons**:
   - 🧘 for meditation
   - ⚖️ for balance
   - 💼 for work
   - 🎯 for goals
   - ✨ for features

4. **Ask for base64 encoding** for critical small images:
   - "Create a simple logo using SVG and embed it as base64 in the CSS"

5. **Request placeholder content**:
   - "Generate realistic testimonial avatars using CSS and initials"
   - "Create profile pictures using CSS gradients and text"