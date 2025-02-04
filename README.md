# Imagify - AI Image Generator SaaS

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://imagify-frontend-jti6.onrender.com/)

**Imagify** is a full-stack **AI-powered image generator SaaS application** built with **MongoDB, Express, React, and Node.js (MERN stack)**. This app allows users to generate images using text prompts, manage credits, and purchase additional credits for generating more images.

## 🚀 Features
- **AI-Powered Image Generation** using text prompts
- **User Authentication** with signup & login functionality
- **Credit System** (Users get free credits and can purchase more)
- **Payment Gateway Integration** for buying credits
- **Fully Responsive Design** using Tailwind CSS
- **Frontend built with Vite and React**
- **Backend powered by Express.js and MongoDB**

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** React Context API
- **Routing:** React Router
- **Authentication:** JWT & Firebase
- **Payments:** Razorpay API
- **Deployment:** Vercel & Render

## 📂 Project Structure
```
imagify
├── client (Frontend - React)
│   ├── src
│   │   ├── components (UI components)
│   │   ├── pages (Homepage, Login, Pricing, etc.)
│   │   ├── context (Global state management)
│   │   ├── assets (Icons, Images)
│   │   ├── App.jsx (Main App Component)
│   │   ├── index.js (Entry Point)
│   ├── public (Static Files)
│   ├── package.json
│   ├── vite.config.js
│
├── server (Backend - Node.js, Express, MongoDB)
│   ├── models (Database Models)
│   ├── routes (API Routes)
│   ├── controllers (Business Logic)
│   ├── config (Database & Auth Config)
│   ├── server.js (Main Server File)
│   ├── package.json
│
├── README.md
├── LICENSE
```

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/jijojacob988/imagify.git
cd imagify
```
### 2️⃣ Install Dependencies
For **Frontend:**
```sh
cd client
npm install
```
For **Backend:**
```sh
cd server
npm install
```
### 3️⃣ Configure Environment Variables
- Create a `.env` file inside the `server` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY=your_razorpay_api_key
```

### 4️⃣ Run the Application
To start the **frontend**:
```sh
cd client
npm run dev
```
To start the **backend**:
```sh
cd server
npm start
```
Now open **http://localhost:5173** to use the app.

## 🌐 Deployment
The project can be deployed using **Vercel (Frontend)** and **Render (Backend)**.

1. Push your project to GitHub.
2. Deploy the **frontend** using [Vercel](https://vercel.com/).
3. Deploy the **backend** using [Render](https://render.com/).

🔗 **[Live Demo](https://imagify-frontend-jti6.onrender.com/)**

## 🤝 Contributing
Pull requests are welcome! Feel free to open issues for improvements or bug fixes.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Jijo Jacob**
