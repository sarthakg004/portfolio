# Saarthak Gupta - Portfolio

A modern, interactive, and minimalist portfolio website built with React (Vite), Tailwind CSS, and Framer Motion. Designed for GitHub Pages deployment.

## ✨ Features

- **Dark/Light Theme** - Toggle with localStorage persistence
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Mobile-first approach
- **Interactive Components** - Animated cards with 3D tilt effect
- **Scroll Progress** - Visual scroll indicator
- **Cursor Glow Effect** - Desktop-only subtle cursor glow
- **Optimized Performance** - Lazy loading images
- **Accessible** - Keyboard navigation & screen reader friendly
- **No Backend** - Fully static, GitHub Pages compatible

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router (HashRouter)** - Routing (GitHub Pages compatible)

## 📁 Project Structure

```
portfolio/
├── frontend/                 # Main application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   ├── CursorGlow.jsx
│   │   │   ├── SectionWrapper.jsx
│   │   │   └── AnimatedCard.jsx
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Blogs.jsx
│   │   │   └── Contact.jsx
│   │   ├── data/             # Content data
│   │   │   ├── personal.js
│   │   │   ├── education.js
│   │   │   ├── experience.js
│   │   │   ├── projects.js
│   │   │   ├── blogs.js
│   │   │   └── contact.js
│   │   ├── assets/           # Images
│   │   │   ├── profile.jpg
│   │   │   ├── projects/
│   │   │   └── blogs/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sarthak004/portfolio.git
cd portfolio

# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## 🎨 Customization

### Personal Information

Edit the data files in `frontend/src/data/`:

| File | Content |
|------|---------|
| `personal.js` | Name, bio, social links, stats |
| `education.js` | Academic background |
| `experience.js` | Work experience |
| `projects.js` | Portfolio projects |
| `blogs.js` | Blog posts |
| `contact.js` | Contact information |

### Images

Place your images in `frontend/src/assets/`:

| Image | Path | Recommended Size |
|-------|------|-----------------|
| Profile | `profile.jpg` | 400x400px |
| Projects | `projects/*.jpg` | 800x500px |
| Blogs | `blogs/*.jpg` | 800x450px |

### Theme Colors

Customize colors in `frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        500: '#3b82f6', // Your accent color
      },
    },
  },
}
```

## 📦 Deployment (GitHub Pages)

1. **Update repository name in vite.config.js**
   ```javascript
   base: '/your-repo-name/',
   ```

2. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The site will be available at: `https://username.github.io/your-repo-name/`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## 📱 Sections

1. **Hero** - Animated intro with typewriter effect
2. **Education** - Academic background cards
3. **Experience** - Timeline-based work history
4. **Projects** - Filterable project grid with images
5. **Blogs** - Blog post cards linking to Medium
6. **Contact** - Email with copy-to-clipboard, social links

## 🌗 Theme Toggle

The theme toggle:
- Persists in localStorage
- Applies immediately on page load
- Smooth transition animations
- Uses Tailwind's `class` strategy

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Saarthak Gupta**
- GitHub: [@Sarthak004](https://github.com/Sarthak004)
- LinkedIn: [saarthakgupta](https://linkedin.com/in/saarthakgupta)
- Medium: [@_Sarthak004](https://medium.com/@_Sarthak004)

---

⭐ Star this repo if you find it helpful!
