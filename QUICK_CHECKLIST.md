# 🎯 Quick Customization Checklist

## Before Deployment - Update These Items

### 1️⃣ Profile Photo
- [ ] Save profile photo as `profile.jpg` in `public/` folder
- [ ] Or update image path in `src/components/Hero.jsx` line ~23

### 2️⃣ Hero Section (`src/components/Hero.jsx`)
- [ ] Line 33: Update name "Kumar Rishikesh" if needed
- [ ] Line 36: Update tagline "Full Stack Web Developer"
- [ ] Line 40: Update hero description text
- [ ] Lines 73-94: Update all social media links:
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Twitter URL
  - [ ] Instagram URL

### 3️⃣ About Section (`src/components/About.jsx`)
- [ ] Lines 54-73: Update "About Me" paragraphs with your background
- [ ] Update the 3 highlight boxes (Focus, Performance, Quality)

### 4️⃣ Skills Section (`src/components/Skills.jsx`)
- [ ] Lines 4-12: Update skill categories and technologies
- [ ] Lines 80-87: Update proficiency percentages (0-100)

### 5️⃣ Projects Section (`src/components/Projects.jsx`)
- [ ] Lines 5-30: Update project details:
  - [ ] Project title
  - [ ] Description
  - [ ] Technologies used
  - [ ] Project image URL
  - [ ] Project link/GitHub URL
- [ ] Line 136: Update GitHub link for "Visit My GitHub"

### 6️⃣ Contact Section (`src/components/Contact.jsx`)
- [ ] Lines 77-79: Update contact info:
  - [ ] Email address
  - [ ] Phone number
  - [ ] Location
- [ ] Lines 81-84: Update social media links again

### 7️⃣ Colors (`src/App.css`)
- [ ] Lines 10-11: Update primary and secondary colors if desired:
  ```css
  --primary-color: #6366f1;      /* Change purple to your color */
  --secondary-color: #ec4899;    /* Change pink to your color */
  ```

### 8️⃣ Index HTML (`index.html`)
- [ ] Line ~5: Update title: "Portfolio - Kumar Rishikesh"
- [ ] Line ~7: Update meta description for SEO

---

## 📝 Customization Summary

| Section | File | Line(s) | What to Update |
|---------|------|---------|----------------|
| Profile Photo | public/profile.jpg | N/A | Add JPG file |
| Name | Hero.jsx | 33 | Your name |
| Tagline | Hero.jsx | 36 | Your title |
| About Text | About.jsx | 54-73 | Your biography |
| Skills | Skills.jsx | 4-12 | Your technologies |
| Proficiency | Skills.jsx | 80-87 | Your skill levels |
| Projects | Projects.jsx | 5-30 | Your project details |
| GitHub | Hero.jsx, Projects.jsx | 73, 136 | Your GitHub URL |
| LinkedIn | Hero.jsx, Contact.jsx | 81, 82 | Your LinkedIn URL |
| Twitter | Hero.jsx, Contact.jsx | 85, 83 | Your Twitter URL |
| Instagram | Hero.jsx, Contact.jsx | 89, 84 | Your Instagram URL |
| Email | Contact.jsx | 77 | Your email |
| Phone | Contact.jsx | 78 | Your phone |
| Location | Contact.jsx | 79 | Your location |
| Colors | App.css | 10-11 | Primary/secondary colors |

---

## 🚀 After Customization

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel/Netlify
# See README.md for deployment instructions
```

---

## ⚡ Default Values to Replace

Search and replace these in the appropriate files:

- `Kumar Rishikesh` → Your Name
- `Full Stack Web Developer` → Your Title
- `rishikesh@example.com` → Your Email
- `+91 XXXXX XXXXX` → Your Phone
- `India` → Your Location
- `https://github.com` → Your GitHub
- `https://linkedin.com` → Your LinkedIn
- `https://twitter.com` → Your Twitter
- `https://instagram.com` → Your Instagram
- `#6366f1` → Your Primary Color
- `#ec4899` → Your Secondary Color

---

## 📱 Test Checklist

After customization:
- [ ] Desktop view works
- [ ] Mobile view is responsive
- [ ] Dark mode works (click sun icon)
- [ ] Light mode works (click moon icon)
- [ ] All social links work (click and verify)
- [ ] Contact form shows success message
- [ ] All animations are smooth
- [ ] Images load correctly

---

## 🌐 Deployment Checklist

Before deploying:
- [ ] All customizations complete
- [ ] Links verified and working
- [ ] Profile photo added
- [ ] No console errors (F12 → Console)
- [ ] Mobile view tested
- [ ] Both themes tested

---

**You're all set!** 🎉 Follow this checklist and your portfolio will be complete and ready to impress! 🚀
