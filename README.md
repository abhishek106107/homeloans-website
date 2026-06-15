# HomeLoan Seekers Website

A lead generation platform for home loan seekers in Hyderabad and Sangareddy.

## Project Overview

This website helps potential homebuyers find and compare home loan options, calculate EMI, and connect with lenders in Hyderabad and Sangareddy regions.

## Features

- 🏠 Professional homepage
- 📋 Lead capture form
- 💰 Loan calculator (EMI)
- 🔍 Lender directory
- 📱 Mobile responsive design
- 💾 Lead storage system
- 📧 Email notifications

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
homeloans-website/
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
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
```

## API Endpoints

### POST /api/leads
Submit a new lead
- Request: `{ name, phone, email, loanAmount, propertyLocation, loanType }`
- Response: `{ success: boolean, message: string, leadId: string }`

### GET /api/leads
Get all leads (admin)

## How to Contribute

1. Clone the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT License - feel free to use this project for your business

## Support

For issues and support, please open an issue on GitHub.

---

**Target Markets**: Hyderabad & Sangareddy
**Current Version**: 1.0.0
