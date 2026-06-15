# Deployment Guide

## Frontend Deployment (Vercel)

### Steps:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Set environment variables:
   - `REACT_APP_API_URL=https://your-backend.com/api`
5. Click "Deploy"

### Environment Variables
```
REACT_APP_API_URL=https://your-backend-domain/api
```

## Backend Deployment (Railway/Heroku)

### Using Railway:
1. Go to [Railway](https://railway.app)
2. Create new project
3. Connect your GitHub repository
4. Set environment variables in Railway dashboard
5. Deploy

### Environment Variables for Backend:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
NODE_ENV=production
JWT_SECRET=your_secure_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=https://your-frontend-domain.com
ADMIN_EMAIL=admin@yourcompany.com
```

## Database Setup (MongoDB Atlas)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get connection string
5. Update `MONGODB_URI` in backend environment variables

## Email Configuration

1. Enable "Less secure app access" in Gmail (or use App Password)
2. Update `EMAIL_USER` and `EMAIL_PASS` in backend environment
3. Test by submitting a lead form

## Custom Domain Setup

### Frontend (Vercel):
1. Go to Project Settings
2. Domains
3. Add your custom domain
4. Update DNS records

### Backend:
1. Add custom domain in Railway/Heroku settings
2. Update frontend `REACT_APP_API_URL` to use custom domain

## Monitoring & Logs

- **Vercel**: Check deployment logs in Vercel dashboard
- **Railway**: Monitor in Railway dashboard
- **MongoDB**: Check Atlas dashboard for connection issues

## SSL/HTTPS

Both Vercel and Railway provide free SSL certificates by default.

## Backup Strategy

- Set up MongoDB Atlas automatic backups
- Export lead data regularly
- Keep git repository updated
