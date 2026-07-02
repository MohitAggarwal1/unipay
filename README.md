# 💳 UniPay – Full-Stack Fintech Banking Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-blue)](https://unipay-finance.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Appwrite](https://img.shields.io/badge/Appwrite-Backend-pink)
![Plaid](https://img.shields.io/badge/Plaid-Banking-green)
![Dwolla](https://img.shields.io/badge/Dwolla-Payments-orange)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

 ![UniPay](https://raw.githubusercontent.com/MohitAggarwal1/readme_images/refs/heads/main/unipay/Screenshot%202026-07-02%20150207.png)


🔗 **Live Demo:** https://unipay-finance.vercel.app  
📸 **Instagram:** https://www.instagram.com/mohhitaggarwal  
💼 **LinkedIn:** https://www.linkedin.com/in/mohitaggarwalofficial

---

# 📌 Project Overview

**UniPay** is a modern **full-stack digital banking platform** that allows users to securely connect bank accounts, monitor balances, view transaction history, and transfer funds—all from a unified dashboard.

Built using **Next.js, TypeScript, Appwrite, Plaid, and Dwolla**, UniPay simulates a real-world fintech application by combining secure authentication, banking APIs, payment processing, and responsive UI into one seamless experience.

---

# ✨ Key Features

## 🔐 Secure Authentication

- User registration & login
- Session-based authentication using Appwrite
- Protected routes
- Secure account management

---

## 🏦 Multi-Bank Account Integration

- Connect multiple bank accounts
- Plaid API integration
- View linked financial institutions
- Real-time account synchronization

---

## 💰 Smart Financial Dashboard

- Consolidated account balances
- Financial overview
- Spending insights
- Responsive dashboard layout

---

## 📄 Transaction Management

- Complete transaction history
- Paginated transaction records
- Real-time banking activity
- Easy transaction tracking

---

## 💸 Money Transfers

- Secure transfers between connected accounts
- Dwolla payment integration
- Safe transaction workflow
- Instant balance updates

---

# 🖼️ Application Preview

---

## 🏠 Dashboard

![Dashboard](https://raw.githubusercontent.com/MohitAggarwal1/readme_images/refs/heads/main/unipay/Screenshot%202026-07-02%20150207.png)


Shows:

- Account summary
- Total balance
- Recent transactions
- Linked bank accounts

---

## 🏦 Bank Accounts

![Bank Accounts](https://raw.githubusercontent.com/MohitAggarwal1/readme_images/refs/heads/main/unipay/Screenshot%202026-07-02%20150327.png)


Features:

- Connected institutions
- Individual account balances
- Account information
- Plaid integration

---

## 📄 Transaction History


![Transactions](https://raw.githubusercontent.com/MohitAggarwal1/readme_images/refs/heads/main/unipay/Screenshot%202026-07-02%20150359.png)


Includes:

- Transaction details
- Amount
- Date
- Category
- Pagination

---

## 💸 Transfer Money


![Transfer](https://raw.githubusercontent.com/MohitAggarwal1/readme_images/refs/heads/main/unipay/Screenshot%202026-07-02%20150508.png)


Allows users to:

- Send funds
- Select accounts
- View transfer confirmation
- Secure payment processing

---

# 🛠️ Tech Stack

### Frontend

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**

### Backend & Services

- **Appwrite**
- **Plaid API**
- **Dwolla API**

### Development Tools

- **ESLint**
- **PostCSS**
- **Git**
- **GitHub**
- **Vercel**

---

# 🏗️ System Architecture

```text
                    User
                      │
                      ▼
          Next.js Frontend (React)
                      │
        ┌─────────────┼──────────────┐
        │             │              │
        ▼             ▼              ▼
   Appwrite       Plaid API      Dwolla API
Authentication    Bank Data      Money Transfer
        │             │              │
        └─────────────┴──────────────┘
                      │
                      ▼
              Unified Banking Dashboard
```

---

# 📂 Project Structure

```text
UniPay/
│
├── app/
├── components/
├── constants/
├── lib/
├── public/
├── styles/
├── types/
│
├── .env.local
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
│
└── README.md
```

---

# 🚀 Local Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/MohitAggarwal1/unipay.git
```

---

## 2️⃣ Navigate to Project

```bash
cd unipay
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory and add the required credentials:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=

PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=

DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_ENV=
```

---

## 5️⃣ Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🎯 Core Functionalities

- 🔐 Secure authentication
- 🏦 Multi-bank account aggregation
- 💳 Balance monitoring
- 📄 Transaction history
- 💸 Bank-to-bank transfers
- 📊 Financial dashboard
- 📱 Fully responsive design
- ⚡ Fast server-side rendering with Next.js

---

# 📱 Responsive Design

UniPay is optimized for:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥 Desktop

---

# 💡 What This Project Demonstrates

- Full-stack application architecture
- Authentication & authorization
- Third-party API integration
- Financial technology workflows
- Secure payment processing
- Server-side rendering
- Type-safe development with TypeScript
- Modern React development using App Router
- Scalable project organization

---

# 🚀 Future Enhancements

- 🤖 AI-powered spending insights
- 📊 Budget planner
- 📈 Investment portfolio tracking
- 💳 Credit score monitoring
- 🎯 Financial goals management
- 🚨 Fraud detection alerts
- 🌙 Dark mode
- 📱 Push notifications
- 📥 Export transaction reports

---

# 📚 Learning Outcomes

During the development of UniPay, I gained hands-on experience with:

- Next.js App Router
- Server Actions
- TypeScript best practices
- Appwrite backend services
- Plaid banking APIs
- Dwolla payment APIs
- Secure authentication
- API integration
- Financial application architecture
- Responsive UI development

---

# 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

# 🙌 Acknowledgements

Special thanks to:

- **Appwrite** for backend services
- **Plaid** for banking integration
- **Dwolla** for payment processing
- **Next.js** for the application framework
- Open-source community for valuable learning resources

---

# 👨‍💻 About Me

Hi, I'm **Mohit Aggarwal**, a passionate Full Stack Developer focused on building scalable, secure, and user-friendly web applications.

My interests include:

- Full Stack Development
- Artificial Intelligence
- FinTech Applications
- Backend Engineering
- Cloud Technologies

---

### ⭐ If you found this project helpful, don't forget to give it a star!