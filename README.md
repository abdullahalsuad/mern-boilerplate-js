# 🚀 Jhinku React Boilerplate

A modern and fast React 19 boilerplate using Vite, Tailwind CSS 4, React Router 7, Firebase, and ESLint. This setup is perfect for starting scalable web applications with clean code architecture and a great developer experience.

## 📦 Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Firebase
- React Router 7
- React Toastify
- SweetAlert2
- ESLint (React hooks + refresh plugins)

---

## 🧰 Installation & Setup

```bash
git clone https://github.com/your-username/jhinku-react.git
cd jhinku-react
npm install
npm run dev
```

Runs app at `http://localhost:5173`

---

## 🔥 Firebase Setup

Follow these steps to integrate Firebase:

1. Go to https://console.firebase.google.com/
2. Create a project
3. Add a Web App and get your Firebase config
4. Create a `.env` file in your project root with the following:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Create `src/firebase-setup.js` with this content:

```js
/**
 * 🔧 Firebase Setup Instructions (Vite + React)
 *
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project.
 * 3. Add a Web app and copy the config.
 * 4. Create a `.env` file in your project root and add:
 *
 * VITE_FIREBASE_API_KEY=your_api_key
 * VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
 * VITE_FIREBASE_PROJECT_ID=your_project_id
 * VITE_FIREBASE_STORAGE_BUCKET=your_bucket
 * VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
 * VITE_FIREBASE_APP_ID=your_app_id
 *
 * 5. Add this file (firebase-setup.js) to your `src` folder.
 * 6. Import `app` where needed:
 *    import app from './firebase-setup';
 */

// src/firebase.js
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);

```
---

## 📦 Dependencies

react, react-dom, vite, tailwindcss, firebase, react-router, react-toastify, sweetalert2

## 👤 Author

Made with ❤️ by <a href="https://github.com/abdullahalsuad" target="_blank">Jhinku Suad</a>
