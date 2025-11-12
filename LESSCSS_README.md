# LessCSS Setup for HRIS Project (CDN Version)

This project now uses LessCSS via CDN for custom styling. LessCSS is processed directly in the browser, eliminating the need for local compilation.

## Files

- `css/custom.less` - The LessCSS source file with variables and mixins
- `index.html` - Updated to include LessCSS CDN and link to `.less` file
- `LESSCSS_README.md` - This documentation file

## Features Added

### Multiple Color Themes
- **Default (Blue)**: Professional blue theme (#3c8dbc)
- **Green Theme**: Nature-inspired green (#00a65a)
- **Purple Theme**: Creative purple (#605ca8)
- **Red Theme**: Bold red (#dd4b39)
- **Dark Theme**: Modern dark mode (#2c3e50)
- **Light Theme**: Clean light theme (#95a5a6)

### Variables (Per Theme)
- `@primary-color`: Main theme color
- `@secondary-color`: Secondary/accent color
- `@success-color`, `@warning-color`, `@info-color`, `@danger-color`: Status colors
- `@text-color`, `@bg-color`: Text and background colors
- `@border-radius`: Consistent border radius (3px)
- And more...

### Mixins
- `.border-radius(@radius)`: Apply border radius
- `.box-shadow(@shadow)`: Apply box shadow
- `.transition()`: Apply CSS transitions
- `.animation()`: Apply CSS animations

### Nested Selectors
Used for complex selectors like tooltips and scrollbars.

### Theme Classes (Manual Application)
- **Available Themes**: 6 predefined color schemes
- **Manual Application**: Add theme class to `<body>` element
- **Example**: `<body class="theme-green">` for green theme

## How It Works

1. **CDN Library**: LessCSS is loaded from `https://cdn.jsdelivr.net/npm/less@4.1.3/dist/less.min.js`
2. **Configuration**: LessCSS is configured for development with proper path handling
3. **Browser Processing**: The `.less` file is processed client-side automatically
4. **No Compilation Needed**: Changes are reflected immediately on page refresh



## Configuration Details

The LessCSS configuration in `index.html` includes:
- **Development Mode**: For live editing and debugging
- **Relative URLs**: Proper path handling for imports
- **Root Path**: Set to `css/` for correct asset loading
- **Async Loading**: Disabled for proper stylesheet loading order

## How to Use

1. **Edit the Less file**:
   - Modify `css/custom.less`
   - Use variables, mixins, and nested selectors

2. **Refresh the page**:
   - Changes are processed automatically in the browser
   - No compilation step required!

## Benefits

- **No Setup Required**: Works immediately with CDN
- **Live Editing**: See changes instantly on refresh
- **Maintainable**: Variables make color changes easy
- **Reusable**: Mixins reduce code duplication
- **Organized**: Nested selectors improve readability

## Example Usage

```less
// Using variables
.btn-primary {
    background-color: @primary-color;
    border-color: @secondary-color;

    &:hover {
        background-color: darken(@primary-color, 10%);
    }
}

// Using mixins
.my-element {
    .border-radius(5px);
    .transition(all, 0.3s, ease);
}
```

## Performance Note

Browser-based LessCSS processing is perfect for development. For production, consider pre-compiling to CSS to improve load times.
