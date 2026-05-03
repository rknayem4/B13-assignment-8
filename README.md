# 🏢 RK Ceramics Ltd. – Tiles Showcase Web App

## 📌 Project Overview

**RK Ceramics Ltd.** is a modern web application built with **Next.js** that showcases a collection of ceramic tiles. The platform allows users to explore tile products, while ensuring that detailed information is accessible only to authenticated users.

This project demonstrates secure routing, authentication, and user profile management in a clean and responsive UI.

---

## 🌐 Live Website

🔗 https://b13-assignment-8.vercel.app/

---

## 🎯 Purpose

The goal of this project is to:

* Present ceramic tile products in an organized and visually appealing way
* Implement secure authentication and protected routes
* Provide a personalized user experience with profile management
* Practice full-stack integration using modern technologies

---

## ✨ Key Features

### 🔐 Authentication System

* User Registration & Login functionality
* Secure authentication using **Better Auth**
* Protected routes for authenticated users only

### 🔒 Private Routes

* Tile **details page is restricted** to logged-in users
* Unauthorized users cannot access sensitive data

### 👤 User Profile

* Dedicated **My Profile** page
* Displays user information
* Users can **edit and update** their profile

### 🧱 Tiles Showcase

* Display multiple ceramic tile items
* Clean and responsive UI for browsing

### ⚡ Performance & UX

* Built with **Next.js App Router**
* Fast loading and smooth navigation
* Toast notifications for user feedback

---

## 🛠️ Technologies Used

### 📦 Dependencies

* `next` – React framework for production
* `react` & `react-dom` – Core UI library
* `mongodb` – Database
* `better-auth` – Authentication system
* `@better-auth/mongo-adapter` – MongoDB adapter for auth
* `react-hook-form` – Form handling
* `react-toastify` – Notifications
* `react-icons` – Icon library
* `react-fast-marquee` – Scrolling UI effect
* `animate.css` – Animations

### 🧪 Dev Dependencies

* `tailwindcss` – Utility-first CSS framework
* `daisyui` – UI components for Tailwind
* `eslint` – Code linting
* `eslint-config-next` – Next.js ESLint config
* `@tailwindcss/postcss` – Tailwind PostCSS support

---

## 📁 Project Structure (Simplified)

```
/app
  /login
  /register
  /profile
  /tiles
  /tiles/[id] (protected)
  
/lib
  auth-client.js
  
/public
  data.json
```

---

## 🔐 Security Implementation

* Middleware / proxy-based protection
* Private routes only accessible after login
* Sensitive data hidden from unauthenticated users

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rknayem4/B13-assignment-8.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 📌 Future Improvements

* Add product filtering & search
* Implement admin dashboard
* Add cart / order system
* Improve UI animations & accessibility

---

## 👨‍💻 Author

**Robiul Khan Nayem**

---

## 📜 License

This project is created for learning and demonstration purposes.

---

⭐ If you like this project, feel free to give it a star on GitHub!
