# 🎨 Sophie Ngo's Portfolio Website

A modern, professional portfolio website showcasing technical projects, skills, and professional experience. Built with **HTML5, CSS3, Bootstrap 5, and JavaScript** featuring dynamic image carousels, real project documentation, and comprehensive skill showcases.

![Portfolio Status](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

---

## 🌟 Live Demo

**Portfolio URL:** http://localhost:3000

**Pages:**
- 🏠 **Projects** - Showcase of 5 major technical projects with interactive carousels
- 👤 **Profile** - About me, skills, volunteer work, and professional strengths
- 📄 **CV** - Downloadable resume with PDF preview

---

## ✨ Key Features

### **Interactive Project Showcases**
- ✅ **Image Carousels** - Auto-rotating slideshows for all major projects (15-6 images each)
- ✅ **Project Documentation** - Downloadable PDFs and Jupyter notebooks
- ✅ **Live Links** - GitHub repos and live website links
- ✅ **Detailed Tech Stacks** - Comprehensive technology badges for each project

### **Professional Design**
- ✅ **Laptop Mockups** - Projects displayed in realistic device frames
- ✅ **Smooth Animations** - Page transitions and hover effects
- ✅ **Custom Logos** - Real project branding (FeedbackLense, Lua Vang, HeartCare AI)
- ✅ **Professional Color Palette** - Subtle, corporate-friendly gradients

### **Comprehensive Content**
- ✅ **5 Major Projects** - Full-stack, ML, web development, data engineering, visualization
- ✅ **45+ Tools & Technologies** - Organized into 7 expertise categories
- ✅ **Real Volunteer Photos** - Authentic community engagement images
- ✅ **Actual CV Preview** - Embedded PDF viewer with download

### **Performance & UX**
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Fast Loading** - Optimized images and assets
- ✅ **SEO Optimized** - Semantic HTML and meta tags
- ✅ **Keyboard Navigation** - Press 1, 2, 3 to navigate pages
- ✅ **Scroll to Top** - Floating button for easy navigation

---

## 📊 Featured Projects

### **1. FeedbackLense – Internal Survey System**
- **Type:** Full-Stack Development
- **Tech:** Node.js, Express, MongoDB, Mongoose, JWT, Natural (NLP), Puppeteer, Playwright
- **Features:** 15-image carousel, GitHub link, comprehensive tech stack
- **Impact:** 400+ automated tests, AI sentiment analysis

### **2. Intrusion Detection – Comparative ML Study**
- **Type:** Machine Learning & Cybersecurity
- **Tech:** Python, Scikit-learn, TensorFlow/Keras, Pandas, NumPy, Matplotlib
- **Features:** 6-image carousel, downloadable research report + Jupyter notebook
- **Impact:** 90% accuracy detecting DoS, Probe, R2L, U2R attacks

### **3. Lua Vang – Business Website**
- **Type:** Web Development
- **Tech:** HTML5, CSS3, JavaScript, Bootstrap 5, Node.js, Express
- **Features:** 5-image carousel, live website link, company logo
- **Impact:** Serving 100+ business partners and millions of farmers
- **Live:** https://congtyluavang.com/

### **4. HeartCare AI – Cardiac Arrhythmia Detection**
- **Type:** Data Engineering & Healthcare AI
- **Tech:** Python, Pandas, NumPy, Canva, LaTeX (Overleaf)
- **Features:** Project image, downloadable slide + full report
- **Impact:** 650k+ ECG healthcare records processed

### **5. UNDP Data Visualization**
- **Type:** Data Analytics & Visualization
- **Tech:** Tableau, Power BI
- **Features:** 6-image carousel, downloadable project report
- **Impact:** 100+ countries sustainability insights (GDP, HDI, CO₂)

---

## 📁 Project Structure

```
Portfolio_Website/
├── index.html              # Main portfolio page (single-page application)
├── style.css               # Custom styles and responsive design
├── script.js               # Navigation, interactions, animations
├── server.js               # Node.js Express server
├── package.json            # Dependencies
├── package-lock.json       # Dependency lock file
├── netlify.toml            # Netlify deployment config
├── vercel.json             # Vercel deployment config
├── .gitignore              # Git ignore rules
│
├── images/                 # All project and profile images
│   ├── FL/                 # FeedbackLense project (15 images + logo)
│   ├── ML/                 # Machine Learning project (6 images)
│   ├── LV/                 # Lua Vang website (5 images + logo)
│   ├── DC/                 # HeartCare AI (1 image + logo)
│   ├── DV/                 # Data Visualization (6 images)
│   ├── Volunteer/          # Volunteer experience photos (3 images)
│   └── profile.jpg         # Profile photo
│
├── projects/               # Downloadable project files
│   ├── MLSecurity/         # ML research documents
│   │   ├── 000-document.pdf
│   │   └── 001-code.ipynb
│   ├── Heartbeat/          # Healthcare AI reports
│   │   ├── Final ECG Discovery Project.pdf
│   │   └── Final_ECG_Discovery_Project_Report.pdf
│   ├── Visualization/      # Data viz project
│   │   └── Project.pdf
│   └── CV_Sophie Ngo_IT Student.pdf  # Resume
│
└── html-version/           # Alternative simple version
    ├── index.html
    └── style.css
```

---

## 🚀 Quick Start

### **Option 1: Open Directly in Browser**

Simply open `index.html` in any web browser. No installation required!

---

### **Option 2: Run with Node.js Server (Recommended)**

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Navigate to the project folder:**
   ```bash
   cd Portfolio_Website
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the server:**
   ```bash
   npm start
   # or
   node server.js
   ```

5. **Open your browser:**
   - Go to: `http://localhost:3000`

**Server Features:**
- ✅ Compression enabled
- ✅ Static file caching
- ✅ Security headers
- ✅ SPA routing support

---

## 🌐 Deployment

### **Netlify (Recommended - Already Configured)**

The site includes `netlify.toml` configuration:

```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod
```

Or use the Netlify dashboard:
1. Drag and drop the project folder
2. Site goes live instantly!

---

### **Vercel (Alternative)**

The site includes `vercel.json` configuration:

```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
```

---

### **GitHub Pages**

1. Push code to GitHub
2. Go to **Settings** → **Pages**
3. Select **main branch**
4. Site live at: `https://yourusername.github.io/portfolio`

---

## 🎨 Customization Guide

### **Update Personal Information**

**Contact Links** (Line 629-639):
```html
<a href="https://www.linkedin.com/in/YOUR_USERNAME">LinkedIn</a>
<a href="mailto:your.email@gmail.com">Email</a>
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
```

**Profile Stats** (Line 643-656):
```html
<div class="badge-stat">4 Industry Experiences</div>
<div class="badge-stat">45+ Tools & Technologies</div>
```

---

### **Change Brand Colors**

Edit `style.css` (Line 6-17):

```css
:root {
    --primary-color: #004A9F;      /* Main brand color */
    --primary-hover: #003580;      /* Hover state */
    --primary-light: #66A3FF;      /* Light accent */
}
```

---

### **Add New Project**

Duplicate a project section in `index.html` and update:
- Carousel images or static image
- Project title and description
- Technology badges
- Download links (if applicable)

**Carousel Template:**
```html
<div id="yourProjectCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="images/your-project/image1.jpg" alt="Description">
        </div>
        <!-- Add more carousel-items -->
    </div>
</div>
```

---

## 🛠️ Tech Stack Details

### **Frontend**
- HTML5 (Semantic markup)
- CSS3 (Custom variables, animations, gradients)
- Bootstrap 5.3.2 (Grid system, components, utilities)
- JavaScript ES6 (Navigation, interactions, lazy loading)
- Bootstrap Icons 1.11.2
- Google Fonts (Inter family)

### **Backend (Optional)**
- Node.js + Express.js
- Compression middleware
- Static file serving with caching
- Security headers

### **Tools Used in Portfolio**
- Git/GitHub (Version control)
- VS Code (Development)
- Cursor AI (Code assistance)

---

## 📱 Pages & Sections

### **Projects Page**
- Hero section with tagline
- 5 project showcases with carousels
- Technology badges
- Download links for documentation
- GitHub/website links

### **Profile Page**
- Profile photo and bio
- What I've Built (5 project cards)
- Beyond the Screen (4 volunteer experiences)
- Core Values & Strengths (6 values)
- What I Work With (45+ tools in 7 categories)
- Call-to-action section

### **CV Page**
- Embedded PDF preview
- Direct download button
- Last updated information

---

## ⚡ Performance Optimizations

✅ **Lazy Loading** - Images load on scroll  
✅ **CSS Caching** - Version query strings (`?v=32`)  
✅ **Compression** - Gzip enabled via Express  
✅ **Optimized Images** - Carousel padding reduced for better display  
✅ **Smooth Animations** - CSS transitions with `will-change` hints  

---

## 🔧 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Mobile Safari | iOS 12+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |

---

## 🐛 Known Issues & Solutions

### **Images Not Displaying in Carousel**
- **Solution:** CSS fixed with `position: absolute`, `z-index: 2`, and `display: block !important`
- **Cause:** Bootstrap carousel requires specific display properties

### **Image Content Cut Off**
- **Solution:** Changed `object-fit: cover` to `object-fit: contain` with padding
- **Cause:** Cover mode crops images to fill container

### **Browser Caching Issues**
- **Solution:** Update version number in `index.html` (`style.css?v=XX`)
- **Cause:** Browser caches CSS files

---

## 📝 Content Statistics

- **Total Projects:** 5 major projects
- **Images:** 40+ project screenshots across 5 carousels
- **Downloadable Files:** 6 PDFs + 1 Jupyter notebook
- **Tools & Technologies:** 45+ tools across 7 categories
- **Volunteer Experiences:** 4 documented with real photos
- **Lines of Code:** 1,100+ lines (HTML + CSS + JS)

---

## 🎯 Deployment Checklist

Before deploying, ensure:

- [ ] All images are optimized (< 500KB each)
- [ ] Contact links updated with your information
- [ ] CV PDF is uploaded and accessible
- [ ] Project download links work correctly
- [ ] All external links open in new tabs
- [ ] Test on mobile devices
- [ ] Run lighthouse audit for performance
- [ ] Update meta descriptions for SEO

---

## 🚀 Future Enhancements (Optional)

- [ ] Add dark mode toggle
- [ ] Implement contact form with backend
- [ ] Add blog section
- [ ] Include testimonials/recommendations
- [ ] Add Google Analytics
- [ ] Implement PWA features
- [ ] Add more project case studies

---

## 📞 Contact

- **Email:** sophiengo1811@gmail.com
- **LinkedIn:** [linkedin.com/in/callmesoffie](https://www.linkedin.com/in/callmesoffie/)
- **GitHub:** [github.com/callmesoffie1811](https://github.com/callmesoffie1811)
- **Portfolio:** http://localhost:3000 (development)

---

## 📋 Version History

### **Version 1.0 (October 2025)**
- ✅ Initial portfolio design
- ✅ 5 featured projects
- ✅ Single-page application architecture
- ✅ Bootstrap 5 integration

### **Version 2.0 (Current)**
- ✅ **Added:** Interactive carousels for all projects (40+ images)
- ✅ **Added:** Real project documentation downloads
- ✅ **Added:** Comprehensive tech stack displays (45+ tools)
- ✅ **Added:** Real volunteer experience photos
- ✅ **Added:** Embedded CV preview with download
- ✅ **Fixed:** Image display issues in carousels
- ✅ **Fixed:** Browser caching problems
- ✅ **Enhanced:** Project descriptions with security/impact focus
- ✅ **Updated:** All contact links and professional information

---

## 🙏 Acknowledgments

- **Design Philosophy:** Modern, clean, professional
- **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Fonts:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Framework:** [Bootstrap 5](https://getbootstrap.com/)
- **Hosting:** Netlify / Vercel ready
- **Development:** Built with care and attention to detail

---

## 📄 License

This portfolio is © 2025 Sophie Ngo. All rights reserved.

Feel free to use the code structure as inspiration for your own portfolio, but please don't copy the content, projects, or personal information.

---

## 💡 Technical Notes

### **Carousel Implementation**
All project carousels use Bootstrap 5 carousel component with custom CSS:
- Auto-rotation: 3-second intervals
- Manual controls: Previous/Next arrows
- Responsive: Adapts to all screen sizes
- White background for image clarity

### **CSS Architecture**
- CSS Custom Properties (variables) for theming
- Mobile-first responsive design
- Smooth transitions and animations
- Professional shadow and hover effects

### **JavaScript Features**
- SPA-style navigation without page reloads
- URL hash routing for bookmarkable pages
- Keyboard shortcuts (1, 2, 3)
- Smooth scroll animations
- Intersection Observer for lazy loading

---

**Built with ❤️ by Sophie Ngo**

*Last updated: October 2025*

**Version:** 2.0  
**Status:** Ready for Professional Use  
**Cache Version:** v32
