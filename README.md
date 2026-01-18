# 🍋 Mango Da Learning Node

A personal Node.js learning project where I experiment, practice, and understand backend concepts step by step.

This repository documents **what I built, what I learned, and why** — mainly for future reference and growth.

---

## 📌 Purpose of This Project

- Learn **Node.js** fundamentals
- Understand **Express.js** routing
- Practice structuring backend applications
- Build confidence with **Git & GitHub workflow**
- Prepare for full-stack development

---

## 🛠 Tech Stack Used

- **Node.js**
- **Express.js**
- **JavaScript**
- **NPM**
- **Git & GitHub**

---

## 📂 Project Structure
```txt
Mango_Da_Learning_Node/
│
├── server.js               # Server entry point
├── app.js                  # Express app configuration
│
├── routes/
│   ├── index.routes.js     # Base routes
│   ├── student.routes.js   # Student-related routes
│   ├── professor.routes.js # Professor-related routes
│   └── principle.routes.js # Principal-related routes
│
├── package.json            # Project metadata & scripts
├── package-lock.json
├── .gitignore              # Ignored files (node_modules, env)
├── LICENSE
└── README.md
```
---

## ▶️ How to Run This Project Locally

1️⃣ Install dependencies
```txt
npm install
```
2️⃣ Run in development mode
```txt
npm run dev
```
3️⃣ Server Output
- 🚀 Server is running on port 80

Port may change later using environment variables.

---

## 🔧 NPM Scripts Used
```txt
"scripts": {
  "start": "node server.js",
  "dev": "nodemon src/index.js"
}
```
---

## 🧪 Git Workflow Used in This Project

```txt
git init
```
```txt
git add .
```
```txt
git commit -m "Initial Node.js setup"
```
```txt
git remote add origin <repo-url>
```
```txt
git branch -M main
```
```txt
git pull origin main --allow-unrelated-histories
```
```txt
git push -u origin main
```

## Daily workflow:

```txt
git add .
```
```txt
git commit -m "What I changed"
```
```txt
git push
```
