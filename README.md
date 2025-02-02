# Modern Shopping Landing Page Template

A clean, modern, and responsive landing page template for e-commerce websites. Built with pure HTML, CSS, and JavaScript.

## Features

- 🌓 Dark/Light mode support
- 📱 Fully responsive design
- ⚡ Fast loading and performance optimized
- 🎨 Easy to customize
- 💻 Cross-browser compatible
- 🔍 SEO friendly
- 🖼️ Flexible image system (automatically adjusts to any image size)

## Image System

The template includes a flexible image system that:
- Automatically adjusts images to fit their containers
- Maintains aspect ratio
- Supports any image size
- Uses object-fit: cover to ensure clean presentation

Example image sizes:
- Hero section: Best with 1920x1080px (but works with any size)
- Category cards: Recommended 400x500px (adjusts automatically)
- Product images: Recommended 300x400px (adjusts automatically)

To use your own images:
1. Simply replace the placeholder src with your image path
2. The CSS will automatically handle the sizing and fitting
3. Images will maintain their aspect ratio while filling their containers

```html
<!-- Example -->
<img src="your-image-path.jpg" alt="Your Description">
```

## Getting Started

1. Clone or download the template
2. Replace placeholder images with your own images
3. Modify the content in `index.html`
4. Customize colors and styles in `assets/css/styles.css`
5. Adjust functionality in `assets/js/main.js` if needed

## File Structure

```
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
```

## Customization

### Colors
You can easily customize the colors by modifying the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #ffffff;
    --accent-color: #4a90e2;
    --text-color: #333333;
    --background-color: #ffffff;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Google Material Icons - [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

## Developer

Developed by Lee-kun myung
