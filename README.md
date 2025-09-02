# ✨ Playful & Sleek Website

A modern, responsive website that combines sleek design with playful interactions. Built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Modern Design**: Clean, minimalist layout with gradient accents
- **Responsive**: Works perfectly on all devices
- **Interactive Elements**: 
  - Custom cursor with follower
  - Smooth scrolling navigation
  - Animated counters
  - Floating geometric shapes
  - Particle effects
  - Typing animation
- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Form Validation**: Contact form with real-time validation
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Accessibility**: Keyboard navigation and semantic HTML

## 📁 File Structure

```
Website Files/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #f59e0b;       /* Accent/highlight color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    --bg-primary: #ffffff;         /* Main background */
    --bg-secondary: #f8fafc;       /* Secondary background */
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content
- **Hero Section**: Update the title, subtitle, and call-to-action buttons in `index.html`
- **About Section**: Modify the description and statistics
- **Features**: Add or remove feature cards as needed
- **Contact**: Update contact information and form fields

### Animations
- **Floating Elements**: Adjust timing and positions in `styles.css`
- **Particle Effects**: Modify frequency and appearance in `script.js`
- **Typing Effect**: Change speed and delay in `script.js`

## 🛠️ Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local Development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🎯 Key Features Explained

### Custom Cursor
A dual-cursor system that follows mouse movement with a smooth animation. Automatically disabled on mobile devices.

### Smooth Scrolling
Navigation links smoothly scroll to their target sections with easing animations.

### Animated Counters
Statistics in the About section animate from 0 to their target values when scrolled into view.

### Form Validation
Real-time validation with user-friendly notifications for:
- Required fields
- Email format validation
- Success/error messages

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Modifying Animations
- CSS animations are in `styles.css`
- JavaScript animations are in `script.js`
- Use browser dev tools to experiment with timing

### Performance Optimization
- Images are optimized for web
- CSS uses efficient selectors
- JavaScript uses modern APIs (Intersection Observer, etc.)

## 🎨 Design Principles

- **Sleek**: Clean lines, modern typography, subtle shadows
- **Playful**: Interactive elements, smooth animations, engaging micro-interactions
- **Accessible**: High contrast, keyboard navigation, semantic HTML
- **Responsive**: Mobile-first design, flexible layouts

## 📞 Support

If you need help customizing the website:
1. Check the browser console for any errors
2. Ensure all files are in the same directory
3. Use a local server for development
4. Test on different devices and browsers

## 🚀 Deployment

To deploy your website:
1. Upload all files to your web hosting service
2. Ensure `index.html` is in the root directory
3. Test all functionality after deployment
4. Consider adding analytics and SEO meta tags

---

**Enjoy your new sleek and playful website!** 🎉 