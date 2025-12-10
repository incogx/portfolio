🚀 Futuristic AI Engineer Portfolio

A modern, high-performance personal portfolio built with React + Vite + TypeScript + TailwindCSS, designed to showcase AI engineering projects, research, and professional achievements.
Deployed on GitHub Pages with blazing-fast performance and modular architecture.

🔥 Features

⚡ Superfast Vite Build

🎨 Fully Responsive UI (TailwindCSS)

🤖 AI-themed animations & futuristic design

🧩 Modular components

🌙 Dark/Light mode ready

🚀 Instant GitHub Pages deployment

🛠️ TypeScript strict mode enabled

🛠️ Tech Stack
Technology	Purpose
React + TS	Component UI Framework
Vite	Ultra fast bundler
TailwindCSS	Styling
GitHub Pages	Deployment
ESLint + Prettier	Clean code formatting
📁 Project Structure
portfolio/
 ├── src/
 │   ├── components/
 │   ├── assets/
 │   ├── App.tsx
 │   └── main.tsx
 ├── public/
 ├── docs/                 # Deployed GitHub Pages build
 ├── package.json
 ├── vite.config.ts
 └── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/incogx/portfolio.git
cd portfolio

2️⃣ Install dependencies
npm install

3️⃣ Run in development mode
npm run dev


Now your site is live at → http://localhost:5173

🔨 Production Build

To generate the optimized production build:

npm run build


This creates a dist/ folder.

🌐 Deploy to GitHub Pages

Vite requires a base path for GitHub Pages:

Your vite.config.ts:

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});

Deployment Steps
npm run build

# delete old docs/remove any corrupted deploy files
rm -rf docs/

# create fresh docs folder
mkdir docs

# copy dist output
cp -r dist/* docs/

# commit and push
git add docs
git commit -m "Deploy portfolio"
git push origin main


GitHub Pages Settings:

Branch: main

Folder: /docs

👉 Your live site:
https://incogx.github.io/portfolio/

📸 Screenshots (Add Later)

You can drag images here once you have final UI.

![Preview](./screenshots/preview.png)

🧠 Future Enhancements

Add 3D animations using Three.js

Add AI Chatbot section

Add Blog for research write-ups

Add Project case studies with animations

Add API for dynamic portfolio content

💙 Author

Abdul Kaif
AI Engineer | Full Stack Developer
GitHub: https://github.com/incogx

⭐ Support

If you like this project, please give the repo a ⭐ star — it motivates me to build more!