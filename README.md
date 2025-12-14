# 🌐 KachaBazer - A Local Live Market Tracker

A modern web application that allows buyers and sellers to view **daily live local market prices** in one place. The platform helps users compare prices across markets and make smarter buying and selling decisions.

Built using the **MERN Stack**, with **Next.js + TypeScript** on the frontend for performance, scalability, and maintainability.

---

## 🚀 Features

### 🔹 Live Market Price Updates

* Daily updated prices for all listed products
* Market-wise price tracking

### 🔹 Buyer & Seller Access

* Buyers can compare prices across different markets
* Sellers can add and update product prices

### 🔹 Search & Category Filters

* Search products by name
* Categories include:

  * Vegetables
  * Fish
  * Meat
  * Fruits
  * Grains
  * Others

### 🔹 Price Comparison

* Compare prices from multiple markets
* Visual comparison using charts/graphs

### 🔹 Responsive UI

* Fully responsive design
* Optimized for mobile, tablet, and desktop devices

---

## 🧰 Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Axios / Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Other Tools

* JWT Authentication
* Bcrypt (Password Hashing)

---

## 📁 Folder Structure (Example)

```bash
/client   # Next.js (TypeScript) Frontend
  ├── app
  ├── components
  ├── services
  └── types

/server   # Node.js + Express Backend
  ├── routes
  ├── controllers
  ├── models
  └── config
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/local-market-tracker.git
```

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## ▶️ Running the Project

### Start Backend Server

```bash
cd server
npm start
```

### Start Frontend Server

```bash
cd client
npm run dev
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000](http://localhost:5000)

---

## 🔐 Environment Variables

### Frontend (.env)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🛠 Example API Endpoints

### Prices

* Get all prices

  ```http
  GET /api/prices
  ```
* Add price (Seller only)

  ```http
  POST /api/prices/add
  ```

### Authentication

* Register user

  ```http
  POST /api/auth/register
  ```
* Login user

  ```http
  POST /api/auth/login
  ```

---

## 📊 Future Improvements

* Real-time price updates using WebSockets
* Location-based market price suggestions
* Push notifications for price changes
* Seller verification system

---

## 👨‍💻 Author

Developed using **MERN Stack + Next.js + TypeScript**.

Customize this section with your name and GitHub profile link.

---

⭐ If you like this project, consider giving it a star on GitHub!



<!-- git fetch upstream
git merge upstream/main -->
