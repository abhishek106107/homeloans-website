# Admin Dashboard Setup Guide

## Overview

The admin dashboard allows you to manage all leads, view statistics, update lead status, and track conversion metrics.

## Admin Access

### Login Credentials
- **URL**: `/admin/login`
- **Email**: Admin user email (created during setup)
- **Password**: Admin user password

### Creating Admin User

1. Use the authentication endpoint to register an admin user:

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "securepassword",
  "company": "Your Company",
  "phone": "9XXXXXXXXXX",
  "role": "admin"
}
```

2. Or create directly in MongoDB:

```javascript
db.users.insertOne({
  name: "Admin User",
  email: "admin@example.com",
  password: "hashed_password", // Use bcrypt to hash
  role: "admin",
  company: "Your Company",
  isActive: true,
  createdAt: new Date()
});
```

## Dashboard Features

### 1. Overview Statistics
- **Total Leads**: All leads in the system
- **New Leads**: Leads with "New" status
- **Contacted**: Leads that have been contacted
- **Qualified**: Leads that meet eligibility criteria
- **Converted**: Leads that have converted to customers
- **Conversion Rate**: Percentage of leads converted

### 2. Location Analytics
- Leads by location (Hyderabad, Sangareddy)
- Quick view of geographic distribution

### 3. Loan Category Breakdown
- Home Loans count
- LAP (Loan Against Property) count
- Mortgage Loans count

### 4. Lead Management

#### View Leads
- Filter leads by status (New, Contacted, Qualified, Rejected, Converted)
- See lead details:
  - Name and contact information
  - Loan type and amount
  - Current status
  - Created date

#### Update Lead Status
- Click the dropdown in the Status Action column
- Select new status (New → Contacted → Qualified → Converted)
- Status updates in real-time

#### Contact Leads
- Click phone number to call directly
- Click email to send email
- Direct links for quick communication

## API Endpoints for Admin

### Authentication
```bash
# Login
POST /api/auth/login
{
  "email": "admin@example.com",
  "password": "password"
}

Response:
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "Admin",
    "role": "admin"
  }
}
```

### Dashboard Stats
```bash
GET /api/admin/leads/stats/overview
Headers:
  Authorization: Bearer {token}
  x-user-role: admin

Response:
{
  "success": true,
  "data": {
    "totalLeads": 100,
    "newLeads": 45,
    "contactedLeads": 30,
    "qualifiedLeads": 20,
    "convertedLeads": 5,
    "conversionRate": "5%",
    "locations": { ... },
    "loanCategories": { ... }
  }
}
```

### Get All Leads
```bash
GET /api/admin/leads?status=New&sortBy=createdAt
Headers:
  Authorization: Bearer {token}
  x-user-role: admin
```

### Get Lead Details
```bash
GET /api/admin/leads/{leadId}
Headers:
  Authorization: Bearer {token}
  x-user-role: admin
```

### Update Lead Status
```bash
PUT /api/admin/leads/{leadId}/status
Headers:
  Authorization: Bearer {token}
  x-user-role: admin

Body:
{
  "status": "Contacted",
  "message": "Called customer"
}
```

### Assign Lead to Agent
```bash
PUT /api/admin/leads/{leadId}/assign
Headers:
  Authorization: Bearer {token}
  x-user-role: admin

Body:
{
  "assignedTo": "agent_user_id"
}
```

### Delete Lead
```bash
DELETE /api/admin/leads/{leadId}
Headers:
  Authorization: Bearer {token}
  x-user-role: admin
```

## Security

### JWT Token
- Tokens are issued on login
- Valid for 7 days (configurable)
- Stored in localStorage
- Included in Authorization header

### Role-Based Access
- Admin role required for dashboard access
- Verified via `x-user-role` header
- Backend validates admin role on each request

### Password Security
- Passwords hashed with bcryptjs
- Minimum 6 characters required
- Never stored in plain text

## Workflow

### Lead Lifecycle

1. **New** - Lead just submitted form
2. **Contacted** - Agent has contacted the lead
3. **Qualified** - Lead meets eligibility criteria
4. **Converted** - Lead became a customer
5. **Rejected** - Lead doesn't meet criteria

### Best Practices

1. **Follow up quickly** - Contact new leads within 24 hours
2. **Track accurately** - Update status as you progress
3. **Regular review** - Check dashboard for metrics
4. **Quality over quantity** - Focus on qualified leads
5. **Monitor conversion** - Track conversion rate trends

## Troubleshooting

### Can't Login
- Verify email and password are correct
- Check if admin user exists in database
- Ensure JWT_SECRET is set in backend

### Dashboard Not Loading
- Check authorization token in localStorage
- Verify backend server is running
- Check CORS configuration
- Check browser console for errors

### Leads Not Showing
- Verify admin has correct role
- Check x-user-role header is sent
- Ensure MongoDB connection is working
- Check lead data exists in database

### Status Update Not Working
- Verify token is still valid
- Check lead ID is correct
- Ensure new status is valid
- Check backend logs for errors

## Support

For issues or questions, check the GitHub repository or contact support.
