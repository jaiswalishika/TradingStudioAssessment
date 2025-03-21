# Trading Studio App

## 🚀 Overview
Trading Studio is a trading strategy and portfolio management platform built using React, Redux, and TailwindCSS.

### 🔹 Features
- 📊 Strategy Builder – Create and save trading strategies
- 💼 Portfolio Management – Manage and configure portfolios
- 🖥️ Trading Simulator – Simulate strategies
- 💰 Pricing Page – View pricing plans
- 🔔 Alert Subscription
- 🔑 Login/Logout System using Redux

---

Assumptions
1) By clicking login button to access dashboard features like Strategy, Portfolio, Simulator, and Screener.
2) Authentication is handled locally using Redux (no backend integration).
3) Strategies and configurations are stored in Redux, not in a database.
4) Pricing and feature data are hardcoded inside a local data folder.
5) UI is built with TailwindCSS, and is fully responsive for desktop and mobile.

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Git

### Installation
```bash
git clone https://github.com/Sarath0506/trading-studio.git
cd trading-studio
npm install
npm run dev

