# 🎌 AniHub

> A Netflix-inspired anime streaming platform built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📖 About

**AniHub** is a front-end streaming platform concept inspired by Netflix, redesigned with an anime identity. Rather than cloning the original experience 1:1, this project gives it a unique personality — its own branding, color scheme, and feel — as if it were a real standalone service dedicated to anime and related content.

The project was built as a portfolio piece to demonstrate skills in semantic HTML, modular JavaScript (ES Modules), CSS architecture, and user experience design.

---

## ✨ Features

- 🎭 **Profile Selection** — Multi-profile support with active profile stored via `localStorage`
- 🎞️ **Animated Carousels** — Netflix-style horizontal sliders with hover-expand card animations
- ▶️ **YouTube Trailer Autoplay** — Cards auto-play muted trailers on hover using embedded YouTube iframes
- 🌙 **Dark / Light Theme** — Full theme toggle with system preference detection and persistence via `localStorage`
- 🏅 **Card Metadata** — Match scores, age ratings, and progress bars
- 📱 **Responsive Design** — Adapted layout for mobile and tablet screens

---

## 🗂️ Project Structure

```
AniHub/
├── 📂 assets/               
├── 📂 catalogo/            
│   ├── 📂 js/
│   │   ├── 📂 components/
│   │   │   ├── Card.js      
│   │   │   └── Carousel.js 
│   │   ├── data.js          
│   │   ├── main.js         
│   │   └── utils.js        
│   ├── catalogo.css         
│   └── catalogo.html        
├── 📂 js/
│   └── index.js             
├── index.html               
├── style.css
└── theme.js                 
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Custom properties, animations, responsive grid |
| **JavaScript (ES Modules)** | Component logic, DOM manipulation, localStorage |
| **YouTube Embed API** | Autoplay trailer previews on card hover |
| **Font Awesome 6** | Icons throughout the UI |
| **Google Fonts (Roboto)** | Typography |
| **Gemini** | AI-generated assets and images |
| **GitHub Copilot** | Development assistance |

---

## 🚀 Getting Started

Since this is a pure front-end project with no build step required, getting it running locally is straightforward.

**1. Clone the repository**
```bash
git clone https://github.com/RicardoLF1914/anihub.git
cd anihub
```

**2. Serve the project**

Because the project uses ES Modules (`type="module"`), it must be served over HTTP — simply opening `index.html` directly in a browser won't work.

You can use any local server. For example, with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension, right-click `index.html` and select **"Open with Live Server"**.

Or via the terminal with Python:
```bash
# Python 3
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

---

## 🎨 Design Decisions

- **Color Palette** — `#00B84D` (AniHub Green) replaces the classic Netflix red, giving the platform its own identity while keeping the familiar dark background (`#141414`).
- **Component Architecture** — JavaScript is split into small, single-responsibility modules (`Card.js`, `Carousel.js`, `utils.js`) to keep the codebase maintainable and scalable without a framework.
- **Theme System** — The `ThemeManager` class listens for both manual toggles and OS-level `prefers-color-scheme` changes, ensuring a consistent experience.

---

## 👨‍💻 Author

**Ricardo Linhares**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ricardo-linhares-0a914a287/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RicardoLF1914)

---

<p align="center">Made by Ricardo Linhares</p>
