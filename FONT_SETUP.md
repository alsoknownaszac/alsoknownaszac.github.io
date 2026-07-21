# Font Setup - Zybo & Pink Clouds

## Font Configuration

### Zybo Font (Hero Sections)
**Usage**: Hero sections, main titles, and display headings
**License**: Check license for commercial use
**Files**: 
- `public/fonts/ZyboPopDecoDeco-zrlX3.ttf` (Primary)
- `public/fonts/ZyboPopDecoDeco-G3BlG.otf` (Alternative)
- `public/fonts/ZyboPopOutlineOutline-5y9a8.ttf` (Outline variant)
- `public/fonts/ZyboPopOutlineOutline-j9YrG.otf` (Outline variant OTF)

### Pink Clouds Font (Body Text)
**Usage**: All body text, paragraphs, descriptions, and general content
**File**: 
- `public/fonts/Pinkclouds-4dzW.ttf`

## Current Implementation

### Font Hierarchy
- **Hero Titles**: Zybo (`font-zybo`)
- **Section Headers**: Zybo (`font-zybo`) 
- **Body Text**: Pink Clouds (`font-pinkclouds` or default `font-sans`)
- **Descriptions**: Pink Clouds (`font-pinkclouds`)
- **UI Text**: Pink Clouds (default)

### CSS Configuration
Both fonts are configured in `app/globals.css` with proper fallbacks:
- Zybo → Arial Black → Helvetica Neue → Arial
- Pink Clouds → Comic Sans MS → Trebuchet MS → Arial

### Tailwind Configuration
- `font-zybo`: For hero sections and display text
- `font-pinkclouds`: For body text (also set as default `font-sans`)

## Usage Examples

### Hero Text (Zybo)
```jsx
<h1 className="font-zybo text-6xl font-bold">
  Hero Title
</h1>
```

### Body Text (Pink Clouds - Default)
```jsx
<p className="text-lg text-muted-foreground">
  This will use Pink Clouds automatically
</p>

// Or explicitly
<p className="font-pinkclouds text-lg">
  Explicit Pink Clouds usage
</p>
```

## Font Loading
Both fonts are preloaded in the HTML head for optimal performance.

## License Notes
- **Zybo**: Check license for commercial projects
- **Pink Clouds**: Check license for commercial projects