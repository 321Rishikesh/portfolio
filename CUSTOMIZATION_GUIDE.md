# 🎯 Portfolio Customization Guide for Kumar Rishikesh

## ✅ What's Already Done

Your animated portfolio is 100% ready with the following features:

### 🎨 Features Included:
- ✨ Smooth animations using Framer Motion
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎭 Beautiful gradient effects
- 🔗 Social media integration (GitHub, LinkedIn, Twitter, Instagram)
- 📧 Contact form with validation
- 🎯 Smooth scroll navigation
- ⚡ Fast loading with Vite

---

## 🚀 Quick Start

### 1. Your Portfolio is Already Running!
The dev server is running at: **http://localhost:5173**

### 2. Add Your Profile Photo
1. Save the profile photo you provided as `profile.jpg` in the `public` folder
2. Or use the `SETUP_PROFILE_IMAGE.md` file for detailed instructions

### 3. Customize with Your Information

---

## 📝 Files to Customize

### 1. **Hero Section** - `src/components/Hero.jsx`

**Update these lines:**

```javascript
// Line ~20: Profile image
<img src="/profile.jpg" alt="Kumar Rishikesh" />

// Lines ~33-34: Your name and tagline
<h1>Hi, I'm <span className="highlight">Kumar Rishikesh</span></h1>
<p className="hero-subtitle">Full Stack Web Developer</p>

// Update social media links:
// Lines ~73-94: GitHub, LinkedIn, Twitter, Instagram
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="https://twitter.com/yourusername"
href="https://instagram.com/yourusername"
```

### 2. **About Section** - `src/components/About.jsx`

**Update the paragraphs (lines ~54-73):** Replace the default text with your own biography and background.

### 3. **Skills Section** - `src/components/Skills.jsx`

**Update skillsData array (lines ~4-12):**
```javascript
const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', ...] // Update your skills
  },
  // Add more categories
];

// Also update proficiency levels (lines ~80-87)
```

### 4. **Projects Section** - `src/components/Projects.jsx`

**Update projectsData array (lines ~5-30):**
```javascript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Your project description',
  technologies: ['React', 'Node.js', ...],
  image: 'image-url-here',
  link: 'project-url-here'
}
```

### 5. **Contact Section** - `src/components/Contact.jsx`

**Update contact information (lines ~77-79):**
```javascript
{ icon: '📧', label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
{ icon: '📱', label: 'Phone', value: '+91 XXXXX XXXXX', link: 'tel:+91...' },
{ icon: '📍', label: 'Location', value: 'Your City, Country', link: '#' }
```

**Update social links (lines ~81-84):**
```javascript
{ icon: '🐙', label: 'GitHub', url: 'https://github.com/yourprofile' },
{ icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
// ... etc
```

---

## 🎨 Customize Colors

Edit `src/App.css` (lines 10-18):

```css
:root {
  --primary-color: #6366f1;      /* Change this to your primary color */
  --secondary-color: #ec4899;    /* Change this to your secondary color */
  --dark-bg: #0f172a;
  --dark-text: #e2e8f0;
  --dark-border: #1e293b;
  --light-bg: #f8fafc;
  --light-text: #1e293b;
  --light-border: #e2e8f0;
}
```

### Popular Color Combinations:
- **Blue & Purple**: `#3b82f6` & `#8b5cf6`
- **Green & Teal**: `#10b981` & `#06b6d4`
- **Orange & Pink**: `#f97316` & `#ec4899`
- **Indigo & Pink**: `#6366f1` & `#ec4899` (Current)

---

## 📞 Update Social Links - Full List

### Find and Replace in These Files:

**src/components/Hero.jsx:**
```
https://github.com          ➜ https://github.com/yourusername
https://linkedin.com        ➜ https://linkedin.com/in/yourprofile
https://twitter.com         ➜ https://twitter.com/yourprofile
https://instagram.com       ➜ https://instagram.com/yourprofile
```

**src/components/Contact.jsx:**
- Same links as above
- Update email: `rishikesh@example.com` ➜ `your@email.com`
- Update phone number
- Update location

---

## 🖼️ Add Project Images

For the projects section, use:
- **Real images:** Upload to a CDN or service like Imgur, Firebase Storage, Cloudinary
- **Placeholder images:** `https://via.placeholder.com/400x250?text=Your+Project+Name`
- **Local images:** Place in `public` folder and reference as `/image.jpg`

---

## 📱 Testing

### Mobile Testing:
1. Open DevTools (F12 or Ctrl+Shift+I)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Test on different screen sizes

### Dark/Light Mode:
- Click the sun/moon icon in the navigation bar

### Animations:
- Scroll through the page to see animations trigger
- Hover over buttons and links

---

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and connect your GitHub repo
4. It auto-deploys! Get a live URL immediately

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Option 3: GitHub Pages
```bash
# Build the project
npm run build

# Deploy the 'dist' folder to GitHub Pages
# Instructions: https://github.com/settings/pages
```

---

## 🔧 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       ← Navbar
│   │   ├── Hero.jsx             ← Hero/intro (UPDATE THIS!)
│   │   ├── About.jsx            ← About section (UPDATE THIS!)
│   │   ├── Skills.jsx           ← Skills (UPDATE THIS!)
│   │   ├── Projects.jsx         ← Projects (UPDATE THIS!)
│   │   ├── Contact.jsx          ← Contact (UPDATE THIS!)
│   │   └── *.css                ← Component styles
│   ├── App.jsx                  ← Main component
│   ├── App.css                  ← Global styles (COLORS HERE!)
│   ├── index.css                ← Base styles
│   └── main.jsx                 ← Entry point
├── public/
│   └── profile.jpg              ← ADD YOUR PHOTO HERE!
├── package.json
├── vite.config.js
└── README.md
```

---

## 💡 Pro Tips

1. **Keep Images Optimized:** Compress images to reduce loading time
2. **Add More Projects:** The projects grid automatically adjusts
3. **Use Real Links:** Test all external links before deploying
4. **Mobile First:** Always check mobile view
5. **SEO:** Update `index.html` meta tags for better SEO

---

## 🐛 Troubleshooting

**Issue: Styles not updating**
- Clear browser cache (Ctrl+F5)
- Restart dev server (Stop and run `npm run dev` again)

**Issue: Image not showing**
- Check file path in component
- Ensure image is in `public` folder
- Verify file name matches exactly

**Issue: Animations not smooth**
- Make sure Framer Motion is installed (`npm list framer-motion`)
- Browser hardware acceleration might be disabled

---

## 🎓 Next Steps

1. ✅ Add your profile photo to `public/profile.jpg`
2. ✅ Update all sections with your information
3. ✅ Test locally with `npm run dev`
4. ✅ Deploy to Vercel/Netlify
5. ✅ Share your portfolio!

---

## 📧 Your Portfolio is Complete!

**Current Status:** 🟢 Ready to Customize & Deploy

**Your Portfolio includes:**
- Full Stack Web Developer focus ✓
- Kumar Rishikesh - Your Name ✓
- Profile Photo - Add to public/profile.jpg
- All Social Links ✓
- Animated Designs ✓

Now customize it with YOUR information and make it shine! 🚀

---

**Built with:** React + Vite + Framer Motion  
**Version:** 1.0.0  
**Created:** February 2024
