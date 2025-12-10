\<!-- prettier-ignore -->
<div align="center">

# 🌌 Futuristic AI Engineer Portfolio

**A next-gen portfolio built for the future of AI.**  
⚡ Powered by **React · Vite · TypeScript · TailwindCSS** • 🚀 Deployed on **GitHub Pages**

</div>

---

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Bundler-Vite-purple?style=flat-square&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Styling-Tailwind-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-000000?style=flat-square&logo=github" alt="GitHub Pages" />
</p>

---

## 🔥 Overview

A clean, responsive, futuristic portfolio designed to showcase:

- ⚙️ AI engineering projects  
- 🤖 Machine learning experiments  
- 🧠 Intelligent UI animations  
- 🛠️ Full-stack skills & deployments

Built with performance, elegance and modularity in mind.

---

## ⚡ Features

- Vite-powered superfast dev & builds  
- TailwindCSS responsive design  
- Modular React + TypeScript components  
- Dark & Light mode ready  
- Mobile-first experience  
- Easy GitHub Pages deployment

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | UI + type safety |
| Vite | Fast bundler & dev server |
| TailwindCSS | Utility styling |
| GitHub Pages | Hosting |
| ESLint + Prettier | Code quality |

---

## 📁 Project Structure

portfolio/
├─ src/
│ ├─ components/
│ ├─ assets/
│ ├─ App.tsx
│ └─ main.tsx
├─ public/
├─ docs/ # GitHub Pages build (deployed)
├─ dist/ # build output (local)
├─ package.json
├─ vite.config.ts
└─ README.md


---

## ⚙️ Installation & Setup

### 1) Clone
```bash
1) git clone https://github.com/incogx/portfolio.git
cd portfolio
2) Install
npm install

3) Run dev server
npm run dev


Open: http://localhost:5173

🔨 Production Build
npm run build


Generates the dist/ folder.

🌐 Deploy to GitHub Pages (simple /docs method)

Ensure Vite is configured with the correct base in vite.config.ts:

// vite.config.ts
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});


Steps:

npm run build
rm -rf docs/
mkdir docs
cp -r dist/* docs/

git add docs
git commit -m "Deploy portfolio to docs"
git push origin main


Then on GitHub → Settings → Pages set:

Branch: main

Folder: /docs

Your live site: https://incogx.github.io/portfolio/

📸 Screenshots

Add screenshots to /screenshots and reference them here:

![Preview](./screenshots/preview.png)

🧠 Future Enhancements (ideas)

3D animations (Three.js)

AI Chatbot integration

Blog / Case studies pages

Automatic GitHub Actions deploy to gh-pages

👨‍💻 Author

Abdul Kaif — AI Engineer & Full Stack Developer
GitHub: https://github.com/incogx

⭐ If you found this helpful