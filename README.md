# 🚀 MERN Boilerplate JS

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[![npm version](https://img.shields.io/npm/v/mern-boilerplate-js.svg?style=flat-square)](https://www.npmjs.com/package/mern-boilerplate-js)
[![npm downloads](https://img.shields.io/npm/dm/mern-boilerplate-js.svg?style=flat-square)](https://www.npmjs.com/package/mern-boilerplate-js)
[![GitHub stars](https://img.shields.io/github/stars/abdullahalsuad/mern-boilerplate-js.svg?style=flat-square)](https://github.com/abdullahalsuad/mern-boilerplate-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/abdullahalsuad/mern-boilerplate-js.svg?style=flat-square)](https://github.com/abdullahalsuad/mern-boilerplate-js/issues)
[![GitHub forks](https://img.shields.io/github/forks/abdullahalsuad/mern-boilerplate-js.svg?style=flat-square)](https://github.com/abdullahalsuad/mern-boilerplate-js/network)

> 🎯 **Stop wasting time on project setup!** Generate a production-ready MERN stack application with industry-standard folder structure in seconds.

A powerful CLI tool that generates a complete MERN (MongoDB, Express, React, Node.js) boilerplate with modern tools, best practices, and zero configuration needed. Perfect for developers who want to skip the tedious setup and jump straight into building amazing applications.

## ✨ Why Choose MERN Boilerplate JS?

- 🏗️ **Industry-Standard Architecture**: Pre-configured folder structure following best practices
- ⚡ **Zero Config**: Works out of the box - no time wasted on setup
- 🔧 **Modern Tools**: Latest versions with optimized configurations
- 🎨 **Beautiful UI**: Tailwind CSS 4 with responsive design
- 🔐 **Auth Ready**: Firebase authentication pre-integrated
- 📱 **Mobile First**: Responsive design patterns included
- 🚀 **Deploy Ready**: Configured for popular hosting platforms

## 🚀 Quick Start

> 💡 **Pro Tip**: Use `npx` for the latest version without global installation!

### One Command Setup

```bash
# 🎯 Recommended: Using npx (always latest version)
npx mern-boilerplate-js my-awesome-app
cd my-awesome-app

# 🔧 Set up environment variables FIRST
# Frontend
cd frontend
cp .env.example .env  # Configure your Firebase and API settings

# Backend
cd ../backend
cp .env.example .env  # Configure MongoDB, Firebase Admin, and secrets

# 📂 Install dependencies for both frontend and backend
cd ..
npm install  # Install root dependencies if any
cd frontend && npm install
cd ../backend && npm install

# 🔥 Start development servers
# Terminal 1: Start backend
cd backend && npm run dev

# Terminal 2: Start frontend
cd frontend && npm run dev
```

### Alternative Installation Methods

```bash
# Global installation
npm install -g mern-boilerplate-js
create-mern-app my-awesome-app
```

### Alternative Package Managers

```bash
# Using Yarn
yarn global add mern-boilerplate-js
create-mern-app my-awesome-app

# Using pnpm
pnpm add -g mern-boilerplate-js
create-mern-app my-awesome-app
```

## 📦 What You Get

### 🎯 Frontend (React + Vite)

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── firebase/       # Firebase client configuration
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components with routing
│   │   └── shared/     # Shared layout components
│   ├── routes/         # React Router configuration
│   └── utils/          # Helper utilities
├── public/             # Static assets
├── index.html          # Entry HTML
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

### 🔧 Backend (Node.js + Express)

```
backend/
├── src/
│   ├── config/         # Database & Firebase config
│   ├── controllers/    # Business logic handlers
│   ├── middleware/     # Authentication & validation
│   ├── models/         # Mongoose data models
│   ├── routes/         # API endpoint definitions
│   └── server.js       # Express server entry point
├── package.json        # Backend dependencies
└── vercel.json         # Deployment configuration
```

## 🛠️ Tech Stack Overview

| Category      | Frontend                                  | Backend              | Database & Auth             |
| ------------- | ----------------------------------------- | -------------------- | --------------------------- |
| **Core**      | React 19, Vite 6.3                        | Node.js, Express 5.1 | MongoDB 6.16, Mongoose 8.15 |
| **Styling**   | Tailwind CSS 4.1                          | -                    | -                           |
| **State**     | React Query, Context                      | -                    | -                           |
| **Auth**      | Firebase SDK                              | Firebase Admin SDK   | Firebase Auth               |
| **HTTP**      | Axios                                     | CORS, Dotenv         | -                           |
| **Forms**     | React Hook Form                           | -                    | -                           |
| **UI/UX**     | Lucide Icons, React Toastify, SweetAlert2 | -                    | -                           |
| **Dev Tools** | ESLint, React DevTools                    | Nodemon              | -                           |

## 💻 Development Commands

### Frontend Commands

```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Commands

```bash
cd backend
npm run dev      # Start with Nodemon
npm start        # Start production server
```

## ⚙️ Environment Configuration

### Frontend (.env)

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_BASE_URL=http://localhost:5000
```

### Backend (.env)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your_db
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## 🔥 Key Benefits

### 🏗️ **Industry-Standard Structure**

- Follows React and Node.js best practices
- Organized component hierarchy
- Separation of concerns architecture
- Scalable folder organization

### ⚡ **Zero Time Waste**

- No need to configure Webpack, Babel, or build tools
- Pre-configured ESLint and Prettier
- Ready-to-use development environment
- Optimized build configurations

### 🎨 **Modern Development Experience**

- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript support ready
- Developer tools pre-configured

## 🚨 Common Issues & Solutions

### 🔧 **Installation Issues**

**Problem**: `npm install -g` permission errors

```bash
# Solution: Use npx instead (recommended)
npx mern-boilerplate-js my-app

# Or fix npm permissions
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

**Problem**: `create-mern-app` command not found

```bash
# Solution: Ensure global bin is in PATH
npm list -g --depth=0
# Or reinstall globally
npm uninstall -g mern-boilerplate-js
npm install -g mern-boilerplate-js
```

### 🔧 **Package Manager Issues**

**Problem**: Different package managers causing conflicts

```bash
# Solution: Stick to one package manager per project
# Delete lock files if switching
rm package-lock.json yarn.lock pnpm-lock.yaml
npm install  # or yarn install / pnpm install
```

**Problem**: `npx` command hangs or fails

```bash
# Solution: Clear npx cache and retry
npx clear-npx-cache
npx mern-boilerplate-js@latest my-app
```

### 🌍 **Network & Connectivity Issues**

**Problem**: Slow installation due to network

```bash
# Solution: Use a different registry
npm install --registry https://registry.npmmirror.com
# Or use yarn/pnpm which are often faster
yarn global add mern-boilerplate-js
```

**Problem**: Corporate firewall blocking installation

```bash
# Solution: Configure npm to use corporate proxy
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

**Problem**: Frontend can't connect to backend

```bash
# Check VITE_API_BASE_URL in frontend/.env
VITE_API_BASE_URL=http://localhost:5000

# Ensure backend is running on correct port
cd backend && npm run dev
```

**Problem**: MongoDB connection failed

```bash
# For local MongoDB
brew services start mongodb/brew/mongodb-community

# For MongoDB Atlas - check connection string format
mongodb+srv://username:password@cluster.mongodb.net/database
```

**Problem**: Firebase authentication errors

```bash
# Verify Firebase config in both frontend and backend .env files
# Ensure service account has proper permissions
# Check private key formatting (escape newlines)
```

### 🔄 **Development Issues**

**Problem**: CORS errors between frontend and backend

```bash
# Backend automatically configures CORS for localhost:5173
# If using different port, update CORS settings in server.js
```

**Problem**: Hot reload not working

```bash
# Frontend: Vite should auto-reload (check port 5173)
# Backend: Nodemon should restart server (check terminal logs)
```

## 🎯 Perfect For

- 👨‍💻 **Developers** who want to focus on features, not boilerplate setup
- 🏢 **Teams** starting new projects with proven architecture
- 🎓 **Students** learning full-stack development with real-world structure
- 🚀 **Startups** needing rapid MVP development and iteration
- 💼 **Agencies** building client projects with consistent quality
- 🔥 **Hackathons** where every minute counts
- 📚 **Tutorials** teaching modern MERN stack development

## 🌟 What Makes It Special

### 🎨 **Frontend Excellence**

- **React 19** with latest features and hooks
- **Vite 6.3** for lightning-fast development
- **Tailwind CSS 4** with modern utility classes
- **React Query** for smart data fetching
- **React Router 7** for seamless navigation
- **Firebase Auth** integration ready

### ⚙️ **Backend Power**

- **Express 5** with modern middleware
- **Mongoose** for elegant MongoDB modeling
- **Firebase Admin** for server-side operations
- **JWT middleware** for secure authentication
- **CORS** pre-configured for development
- **Modular architecture** for easy scaling
- **MongoDB Atlas** Pre-configured connection strings
- Environment variables ready

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌟 Create a feature branch
3. 💻 Make your changes
4. ✅ Test thoroughly
5. 📤 Submit a pull request

## 💬 Community & Support

- 🐛 [Report Issues](https://github.com/abdullahalsuad/mern-boilerplate-js/issues)
- 💡 [Feature Requests](https://github.com/abdullahalsuad/mern-boilerplate-js/discussions)
- ⭐ [Star on GitHub](https://github.com/abdullahalsuad/mern-boilerplate-js)
- 🐦 [Follow on Twitter](https://twitter.com/abdullahalsuad)

## 📄 License

MIT © [Abdullah Al Suad](https://github.com/abdullahalsuad)

---

<div align="center">

**Made with ❤️ by [Abdullah Al Suad](https://github.com/abdullahalsuad), for developers**

[🌟 Star on GitHub](https://github.com/abdullahalsuad/mern-boilerplate-js) • [📦 NPM Package](https://www.npmjs.com/package/mern-boilerplate-js) • [🐛 Report Bug](https://github.com/abdullahalsuad/mern-boilerplate-js/issues)

</div>
