# 📈 Zerodha Clone - Stock Trading Platform

A full-stack stock trading application inspired by Zerodha, India's leading discount brokerage platform. This project replicates the core features of a modern trading platform including real-time stock watchlists, portfolio management, and order execution.

## 🌐 Live Demo

- **Frontend**: [Deployed on Vercel](https://your-app.vercel.app) *(Update with your Vercel URL)*
- **Backend**: [Deployed on Render](https://zerodha-clone-gaig.onrender.com)

## ✨ Features

### Landing Pages
- 🏠 **Home Page** - Attractive landing page showcasing platform features
- 📊 **Products** - Overview of trading products and services
- 💰 **Pricing** - Transparent pricing plans and fee structure
- 🆘 **Support** - Customer support and help center
- ℹ️ **About** - Company information and mission

### Trading Dashboard
- 📈 **Live Watchlist** - Real-time stock price monitoring with visual indicators
- 💼 **Portfolio/Holdings** - View and manage your stock holdings
- 🛒 **Buy/Sell Orders** - Execute buy and sell orders with custom quantities
- 📊 **Interactive Charts** - Doughnut charts for portfolio visualization
- 🔔 **Real-time Updates** - Dynamic price updates and percentage changes
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile devices

### User Experience
- 🔐 **User Authentication** - Secure signup and login with JWT tokens
- 🎯 **Intuitive UI** - Clean, professional interface inspired by Zerodha
- ⚡ **Fast Performance** - Optimized for quick load times and smooth interactions
- 📱 **Mobile Responsive** - Fully responsive design for all screen sizes

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive components
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Chart.js & React-Chartjs-2** - Data visualization and charting
- **Material-UI (MUI)** - Modern UI components and icons
- **Bootstrap 5** - Responsive grid system and utilities
- **React Toastify** - Elegant notifications
- **JWT Decode** - Token management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **JWT (JSON Web Tokens)** - Secure authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment
- **Frontend**: Vercel (Serverless deployment)
- **Backend**: Render (Cloud application hosting)
- **Database**: MongoDB Atlas (Cloud database)

## 📁 Project Structure

```
Zerodha-Clone/
├── frontend/                 # React frontend application
│   ├── public/              # Static files
│   ├── src/
│   │   ├── dashboard/       # Trading dashboard components
│   │   │   ├── components/  # Dashboard UI components
│   │   │   └── data/        # Mock data and configurations
│   │   ├── landing_page/    # Landing page components
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── pricing/
│   │   │   ├── support/
│   │   │   └── signup/
│   │   └── index.js         # App entry point
│   └── package.json
│
├── backend/                  # Node.js backend application
│   ├── model/               # Database models (Mongoose schemas)
│   ├── routes/              # API routes
│   ├── index.js             # Server entry point
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/kaimharsh/Zerodha-Clone.git
cd Zerodha-Clone
```

#### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with the following variables:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=5000

npm start
```

The backend server will run on `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The frontend application will run on `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/zerodha
JWT_SECRET=your_secret_key_here
PORT=5000
```

**Frontend**
Update API endpoints in the following files:
- `src/dashboard/components/BuyActionWindow.js`
- `src/dashboard/components/Holdings.js`
- `src/landing_page/signup/Signup.js`

Replace `http://localhost:5000` with your deployed backend URL.

## 📦 Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set **Root Directory** to `frontend`
5. Deploy!

### Backend (Render)
1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your repository
5. Set **Root Directory** to `backend`
6. Add environment variables
7. Deploy!

## 🎯 API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /login` - User login

### Orders
- `POST /newOrder` - Place a new buy/sell order
- `GET /allOrders` - Get all orders for a user

### Holdings
- `POST /newHolding` - Add new stock holding
- `GET /allHoldings` - Get all holdings for a user

### Positions
- `POST /newPosition` - Add new position
- `GET /allPositions` - Get all positions for a user

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes. It is not affiliated with Zerodha or any official trading platform.

## 👤 Author

**Harsh Kaim**
- GitHub: [@kaimharsh](https://github.com/kaimharsh)
- LinkedIn: [Add your LinkedIn profile]

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/) - India's largest stock broker
- UI/UX design patterns from modern trading platforms
- Open source community for amazing tools and libraries

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing-page.png)

### Trading Dashboard
![Dashboard](screenshots/dashboard.png)

### Watchlist
![Watchlist](screenshots/watchlist.png)

*Note: Add screenshots to a `screenshots/` folder in your repository*

## 🔮 Future Enhancements

- [ ] Real-time stock price integration with live APIs
- [ ] Advanced charting with candlestick patterns
- [ ] Order history and transaction logs
- [ ] Profit/Loss calculations and reports
- [ ] Multiple watchlist support
- [ ] Stock search and filtering
- [ ] Dark mode theme
- [ ] Email notifications for orders
- [ ] Two-factor authentication (2FA)
- [ ] Mobile app version (React Native)

## ⚠️ Disclaimer

This is a clone project created for learning and portfolio purposes. It is not intended for actual trading or financial transactions. Always use official and regulated platforms for real stock trading.

---

**Made with ❤️ by Harsh Kaim**

*If you found this project helpful, please give it a ⭐ on GitHub!*

