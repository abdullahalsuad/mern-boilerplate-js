# Frontend

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-11.6.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React Query](https://img.shields.io/badge/React_Query-5.81.5-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

A modern, production-ready React boilerplate with Firebase integration, built for rapid development and scalability. This template provides a solid foundation for building web applications with the latest React ecosystem tools and best practices.

## 📋 Tech Stack

| Category          | Technology          | Description                                                                                     |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------------- |
| **Framework**     | **React 19**        | The foundation for building the user interface.                                                 |
| **Bundler**       | **Vite 6.3**        | Provides a lightning-fast development environment and build process.                            |
| **Styling**       | **Tailwind CSS 4**  | A utility-first CSS framework for efficient and maintainable styling.                           |
| **Auth**          | **Firebase**        | A platform for authentication                                                                   |
| **Routing**       | **React Router 7**  | Manages client-side routing for multi-page applications.                                        |
| **Data Fetching** | **React Query**     | Handles server state, caching, and background synchronization.                                  |
| **UI Icons**      | **Lucide React**    | A library of beautiful and customizable icons.                                                  |
| **HTTP Client**   | **Axios**           | A promise-based HTTP client for making API requests.                                            |
| **Forms**         | **React Hook Form** | A flexible and performant library for managing forms.                                           |
| **Alerts**        | **SweetAlert2**     | A beautiful, responsive, customizable, and accessible replacement for JavaScript's popup boxes. |
| **Notifications** | **React Toastify**  | Adds a customizable notification system to the application.                                     |

## 📁 Project Structure

```
frontend-boilerplate/
├── src/
│   ├── components/        # Reusable UI components
│   ├── context/          # React context providers
│   ├── firebase/         # Firebase configuration and utilities
│   │   └── firebase.js   # Firebase initialization
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   │   └── shared/      # Shared page components
│   │   |   ├── Footer.jsx
│   │   |   ├── Navbar.jsx
│   │   ├── About.jsx
│   │   └── Home.jsx
│   ├── routes/          # Routing configuration
│   │   └── router.jsx
│   └── utils/           # Utility functions
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── eslint.config.js     # ESLint configuration
├── index.html          # Entry HTML file
└── README.md           # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Environment Setup

⚠️ **Important**: This project requires environment variables to function properly. Without proper configuration, you may encounter errors.

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env  # If .env.example exists
# OR create manually
touch .env
```

2. Add your Firebase configuration and other environment variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Other environment variables
VITE_NODE_ENV=development
```

**Note**: The current environment is set up with dummy values. You'll need to replace these with your actual Firebase project credentials and API endpoints to avoid runtime errors.

### Step 3: Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Add a web app to your Firebase project
4. Copy the configuration values to your `.env` file
5. Enable the required Firebase services (Authentication, Firestore, etc.)

### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🚨 Common Issues & Troubleshooting

### Environment Variables Not Loaded

If you see errors related to undefined environment variables:

1. Ensure your `.env` file exists in the root directory
2. Check that all variables start with `VITE_`
3. Restart the development server after adding new variables

### Firebase Configuration Errors

If Firebase throws configuration errors:

1. Verify all Firebase environment variables are set correctly
2. Ensure your Firebase project has the required services enabled
3. Check that your domain is authorized in Firebase Console

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS team for the utility-first CSS framework
- Firebase team for the backend-as-a-service platform
- All the open-source contributors who made this possible

---

**Happy Coding! 🚀**
