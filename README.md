# 🚀 Zerodha Clone — Full Stack Stock Trading Platform

A comprehensive, full-stack trading dashboard inspired by Zerodha. This project focuses on modern web architecture, secure authentication, and cloud-based deployment.

---

## 🌐 Live Demo
Experience the platform live: [Zerodha Clone Demo](https://zerodha-clone-frontend-beta.vercel.app/)

## 💻 Repository
Source code: [GitHub Repo](https://github.com/Adarsh-kumar-lal/zerodha-clone.git)

---

## 📌 Project Overview
This project is a functional clone of the Zerodha trading platform, designed to simulate real-world financial software architecture. It features a robust backend for user management and a dynamic frontend for data visualization.

### Key Highlights:
- **End-to-End Communication:** Seamless integration between React frontend and Node.js/Express backend.
- **Secure Authentication:** Implementation of JWT-based login and signup flows.
- **Cloud Infrastructure:** Fully deployed environment using Vercel, Render, and MongoDB Atlas.

---

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | React.js, Bootstrap, Axios, React Router, React Toastify |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (NoSQL) |
| **Auth** | JSON Web Tokens (JWT) & Bcrypt.js |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## ✨ Features
- [x] **User Signup & Login:** Secure account creation and credential validation.
- [x] **JWT Authentication:** Token-based session management.
- [x] **Protected Routes:** Dashboard access restricted to authorized users.
- [x] **RESTful API:** Clean API design for holdings, positions, and user data.
- [x] **Real-time Notifications:** Feedback via React Toastify for successful/failed actions.

---

## 🔐 Authentication Flow


1. **User Signup/Login:** User submits credentials via the React form.
2. **Backend Validation:** Node.js server validates data and checks MongoDB.
3. **JWT Generation:** Server signs a unique token using a secret key.
4. **Storage:** The token is sent to the client and stored in `localStorage`.
5. **Authorization:** The token is included in headers for all protected API requests.

---

## 📚 Key Learnings
- [x] Architectural design of Full Stack applications.
- [x] Managing environment variables across different deployment environments.
- [x] Implementing secure password hashing using Bcrypt.js.
- [x] Handling Cross-Origin Resource Sharing (CORS) between frontend and backend.

---

## ⭐ Future Improvements
- [ ] **HTTP-Only Cookies**: Enhancing security for token storage.
- [ ] **Refresh Tokens**: Implementing longer sessions without compromising security.
- [ ] **Market Data**: Integration with live stock market APIs (e.g., Alpha Vantage).
- [ ] **Dockerization**: Containerizing the app for easier deployment.

---

## 👨‍💻 Author
### **Adarsh Kumar Lal**

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Adarsh-kumar-lal)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adarsh-kumar-lal/)

*Feel free to connect with me!*
