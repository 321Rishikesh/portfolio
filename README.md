# Kumar Rishikesh - Animated Portfolio Website

A modern, animated portfolio website built with React, Vite, and Framer Motion. Showcasing full-stack web development skills with smooth animations, dark/light mode toggle, and social media integration.

## 🎨 Features

- **Smooth Animations** - Beautiful animations powered by Framer Motion
- **Dark/Light Mode** - Toggle between dark and light themes
- **Responsive Design** - Fully responsive on all devices
- **Modern UI** - Clean, professional design with gradient effects
- **Social Media Integration** - Links to GitHub, LinkedIn, Twitter, and Instagram
- **Contact Form** - Get in touch section with form validation
- **Performance Optimized** - Built with Vite for fast development and production builds

## 📋 Sections

1. **Navigation** - Sticky navigation bar with mobile hamburger menu
2. **Hero Section** - Introduction with animated profile image and call-to-action buttons
3. **About Me** - Personal introduction and highlights
4. **Skills & Technologies** - Frontend, Backend, and Tools with proficiency bars
5. **Featured Projects** - Showcase of portfolio projects
6. **Contact** - Contact information and contact form

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. **Important**: Add your profile photo
   - Save your profile photo as `profile.jpg` in the `public` folder
   - Or update the image path in `src/components/Hero.jsx` (line with `/profile.jpg`)

4. Update social media links
   - Edit `src/components/Hero.jsx` and `src/components/Contact.jsx`
   - Replace the placeholder URLs with your actual social media links

5. Customize contact information
   - Edit `src/components/Contact.jsx` to update email, phone, and location

## 💻 Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## 🔨 Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Customization Guide

### Update Profile Information
Edit the following files to personalize your portfolio:

**Hero Section** - `src/components/Hero.jsx`
- Update profile image path
- Change name and tagline
- Update social media links

**Social Links** - `src/components/Hero.jsx` and `src/components/Contact.jsx`
- GitHub: `https://github.com/yourprofile`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Twitter: `https://twitter.com/yourprofile`
- Instagram: `https://instagram.com/yourprofile`

**Skills** - `src/components/Skills.jsx`
- Update skill categories and technologies
- Adjust proficiency percentages

**Projects** - `src/components/Projects.jsx`
- Replace project data with your actual projects
- Update descriptions and technologies used

**Contact Info** - `src/components/Contact.jsx`
- Update email address
- Update phone number
- Update location
- Add your own contact handling logic

### Color Scheme
Modify the color variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;      /* Primary purple */
  --secondary-color: #ec4899;    /* Secondary pink */
}
```

## 🎯 Key Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **CSS3** - Styling with animations
- **React Hooks** - State management

## 📦 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx          # Navigation bar
│   ├── Hero.jsx                # Hero/intro section
│   ├── About.jsx               # About me section
│   ├── Skills.jsx              # Skills and technologies
│   ├── Projects.jsx            # Project showcase
│   └── Contact.jsx             # Contact section
├── App.jsx                     # Main app component
├── App.css                     # Global styles
├── index.css                   # Base styles
└── main.jsx                    # Entry point
public/
└── profile.jpg                 # Your profile picture
```

## 🌟 Features Breakdown

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Smooth transitions and transforms

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Optimized layouts for all screen sizes
- Touch-friendly buttons and links

### Dark/Light Mode
- Toggle button in navigation
- Smooth transitions between themes
- Persistent theme preference

### Contact Form
- Form validation
- Success message feedback
- Responsive layout

## 🚀 Deployment

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push
3. Enjoy automatic HTTPS and CDN

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Upload the 'dist' folder contents to GitHub Pages
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 💡 Tips

- Run `npm run lint` to check code quality
- Use the placeholder images from `https://via.placeholder.com` in projects
- Customize the 404 error page if deploying to a static host
- Consider adding a loading animation for better UX

## 📄 License

This project is open source and free to use for personal portfolios.

## 🤝 Contributing

Feel free to customize this portfolio for your needs. It's designed to be easily modifiable!

## ⚡ Performance Notes

- Uses Vite for fast HMR (Hot Module Replacement)
- Optimized bundle size (~200KB gzipped)
- Lazy loading for images in projects
- CSS animations use GPU acceleration

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

**Happy coding!** 🚀 Customize this portfolio and make it your own!
