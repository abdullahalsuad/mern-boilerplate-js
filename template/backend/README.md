# Backend

![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.16.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8.15.1-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Admin-13.4.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

A robust Node.js backend API built with Express.js, MongoDB, and Firebase Admin SDK. This server provides authentication, database operations, and RESTful API endpoints for modern web applications.

## 📋 Tech Stack

| Category           | Technology         | Description                                                                   |
| ------------------ | ------------------ | ----------------------------------------------------------------------------- |
| **Runtime**        | **Node.js**        | JavaScript runtime for server-side development.                               |
| **Framework**      | **Express.js 5.1** | Fast, unopinionated, minimalist web framework for Node.js.                    |
| **Database**       | **MongoDB 6.16**   | NoSQL document database for flexible data storage.                            |
| **ODM**            | **Mongoose 8.15**  | MongoDB object modeling tool designed to work in an asynchronous environment. |
| **Authentication** | **Firebase Admin** | Server-side Firebase SDK for user authentication and admin operations.        |
| **CORS**           | **CORS 2.8**       | Cross-Origin Resource Sharing middleware for Express.                         |
| **Environment**    | **Dotenv**         | Loads environment variables from .env file.                                   |
| **Development**    | **Nodemon**        | Automatically restarts the server during development.                         |

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── db.js              # Database connection configuration
│   │   └── firebase.js        # Firebase Admin SDK configuration
│   ├── controllers/
│   │   └── testController.js  # API endpoint controllers
│   ├── middleware/
│   │   └── verifyToken.js     # Authentication middleware
│   ├── models/
│   │   └── testModel.js       # Mongoose data models
│   ├── routes/
│   │   └── testRoutes.js      # API route definitions
│   └── server.js              # Main server entry point
├── node_modules/              # Installed dependencies
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Dependency lock file
├── .gitignore                 # Git ignore rules
├── README.md                  # Project documentation
└── vercel.json                # Vercel deployment configuration
```

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Firebase Project** with Admin SDK

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Environment Setup

⚠️ **Important**: This project requires environment variables to function properly. Without proper configuration, you will encounter connection and authentication errors.

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env  # If .env.example exists
# OR create manually
touch .env
```

2. Add your environment variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/your_database_name
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"

# API Configuration
API_BASE_URL=http://localhost:5000
FRONTEND_URL=http://localhost:5173

# JWT Secret (if using custom JWT)
JWT_SECRET=your_super_secure_jwt_secret_key
```

**Note**: The current environment is set up with dummy values. You'll need to replace these with your actual MongoDB connection string, Firebase credentials, and other configuration values to avoid runtime errors.

### Step 3: MongoDB Setup

#### Option 1: Local MongoDB

```bash
# Install MongoDB locally
# macOS (using Homebrew)
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb/brew/mongodb-community
```

#### Option 2: MongoDB Atlas (Recommended)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free cluster
3. Get your connection string
4. Add it to your `.env` file

### Step 4: Firebase Admin Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings → Service Accounts
4. Click "Generate new private key"
5. Download the JSON file and extract the required values for your `.env`

### Step 5: Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The server will be available at `http://localhost:5000`

## 📜 Available Scripts

```bash
# Start the server in production mode
npm start

# Start the server in development mode with auto-restart
npm run dev

# Run tests (placeholder)
npm test
```

## 🛡️ API Endpoints

### Base URL

```
http://localhost:5000
```

## 🚨 Common Issues & Troubleshooting

### MongoDB Connection Issues

If you see MongoDB connection errors:

1. Ensure MongoDB is running locally or your Atlas connection string is correct
2. Check that your IP is whitelisted in MongoDB Atlas
3. Verify the database name in your connection string

### Firebase Authentication Errors

If Firebase Admin throws authentication errors:

1. Verify all Firebase environment variables are set correctly
2. Ensure your service account has the required permissions
3. Check that the private key is properly formatted with escaped newlines

### CORS Issues

If you encounter CORS errors:

1. Verify your frontend URL is correctly set in the CORS configuration
2. Check that the frontend is running on the expected port
3. Ensure credentials are properly configured if needed

### Environment Variables Not Loading

If environment variables are undefined:

1. Ensure your `.env` file exists in the root directory
2. Check that variable names don't have typos
3. Restart the server after adding new variables

## 🔄 Development Workflow

1. **Start the development server**: `npm run dev`
2. **Make changes**: The server will automatically restart on file changes
3. **Test endpoints**: Use tools like Postman or Thunder Client
4. **Check logs**: Monitor the console for errors and requests

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the powerful database
- Firebase team for the authentication platform
- Mongoose team for the elegant ODM
- All the open-source contributors who made this possible

---

**Happy Coding! 🚀**
