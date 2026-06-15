# Loan Seekers Website

A professional lead generation platform for **Home Loans, LAP (Loan Against Property), and Mortgage Loans** seekers in Hyderabad and Sangareddy.

## Project Overview

This website helps potential borrowers find and compare various loan products, understand eligibility requirements, and connect with qualified lenders in Hyderabad and Sangareddy regions.

## Features

- 🏠 Professional homepage with loan product information
- 📋 Advanced lead capture form with multiple loan types
- 💰 Loan calculator (EMI, eligibility checker)
- 📚 Educational content about home loans, LAP, and mortgage loans
- 🔍 Lender directory
- 📱 Mobile responsive design
- 💾 Lead storage system
- 📊 Admin dashboard
- 📧 Email notifications

## Loan Products Covered

### 1. **Home Loans**
- Purchase of residential property
- Construction of new home
- Home improvement/renovation
- Balance transfer of existing loan

### 2. **LAP (Loan Against Property)**
- Loans against residential property
- Loans against commercial property
- Used for any purpose (business, education, medical, etc.)

### 3. **Mortgage Loans**
- Property mortgage for business needs
- Refinancing options
- Flexible repayment terms

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios (API calls)
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Nodemailer (Email notifications)
- Dotenv (Environment variables)

### Deployment
- Frontend: Vercel
- Backend: Railway/Heroku
- Database: MongoDB Atlas

## Project Structure

```
loan-seekers-website/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── backend/                 # Node.js Express server
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── controllers/         # Request handlers
│   ├── config/              # Configuration files
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your configuration
npm start
```

Backend runs on: `http://localhost:5000`

## Environment Variables

### Backend (.env)

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@loanseekers.com
```

## API Endpoints

### POST /api/leads
Submit a new lead
- Request: `{ firstName, lastName, phone, email, loanType, loanAmount, propertyLocation, annualIncome, employmentType, creditScore, message }`
- Response: `{ success: boolean, message: string, leadId: string }`

### GET /api/leads
Get all leads (admin)

### GET /api/leads/:id
Get specific lead details

### PUT /api/leads/:id
Update lead status

## Supported Loan Types

1. **Home Purchase** - New property purchase
2. **Home Construction** - Property construction
3. **Home Improvement** - Renovation/upgrades
4. **Balance Transfer** - Refinancing existing loans
5. **LAP - Residential** - Loan against residential property
6. **LAP - Commercial** - Loan against commercial property
7. **LAP - Any Purpose** - Loan for any requirement
8. **Mortgage Refinance** - Refinancing options

## How to Contribute

1. Clone the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT License

## Support

For issues and support, please open an issue on GitHub.

---

**Target Markets**: Hyderabad & Sangareddy
**Current Version**: 1.0.0
**Loan Products**: Home Loans, LAP (Loan Against Property), Mortgage Loans
