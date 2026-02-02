# AI Tools Backend API

Backend API for the AI Tools website with user authentication and account management system.

## Features

- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ Secure password hashing with bcrypt
- ✅ User profile management
- ✅ Password change functionality
- ✅ Account deletion
- ✅ Role-based access control (user/admin)
- ✅ Input validation
- ✅ Rate limiting
- ✅ Security headers with Helmet
- ✅ CORS support

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **express-validator** - Input validation

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running locally, or a MongoDB Atlas account
- npm or yarn package manager

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ai-tools-db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```

## Running the Server

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in `.env`)

## API Endpoints

### Authentication Routes

#### Register a new user
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "Password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123"
}
```

Response includes a JWT token:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Get current user
```
GET /api/auth/me
Authorization: Bearer <token>
```

#### Logout
```
POST /api/auth/logout
Authorization: Bearer <token>
```

### User Routes

#### Get user profile
```
GET /api/users/:id
```

#### Update user profile
```
PUT /api/users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "avatar": "https://example.com/avatar.jpg"
}
```

#### Change password
```
PUT /api/users/:id/password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "Password123",
  "newPassword": "NewPassword456"
}
```

#### Delete account
```
DELETE /api/users/:id
Authorization: Bearer <token>
```

### Health Check
```
GET /api/health
```

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. After logging in or registering, include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Validation Rules

### Registration
- Username: 3-30 characters, alphanumeric with underscores and hyphens
- Email: Valid email format
- Password: Minimum 6 characters, must contain uppercase, lowercase, and number

### Login
- Email: Valid email format
- Password: Required

## Error Handling

The API returns standardized error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // validation errors if applicable
}
```

## Security Features

- **Helmet**: Sets various HTTP headers for security
- **Rate Limiting**: Limits requests to prevent abuse (100 requests per 15 minutes)
- **CORS**: Configurable cross-origin resource sharing
- **Password Hashing**: Bcrypt with salt rounds
- **JWT Expiration**: Tokens expire after 7 days (configurable)
- **Input Validation**: Comprehensive validation on all inputs

## Database Schema

### User Model
```javascript
{
  username: String (unique, 3-30 chars),
  email: String (unique, valid email),
  password: String (hashed, min 6 chars),
  firstName: String,
  lastName: String,
  avatar: String (URL),
  role: String (enum: ['user', 'admin']),
  isVerified: Boolean,
  createdAt: Date,
  lastLogin: Date
}
```

## Development

To add new features:

1. Create models in `src/models/`
2. Create controllers in `src/controllers/`
3. Create routes in `src/routes/`
4. Add middleware in `src/middleware/` if needed
5. Register routes in `src/server.js`

## MongoDB Setup

### Local MongoDB:
1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use `MONGODB_URI=mongodb://localhost:27017/ai-tools-db`

### MongoDB Atlas (Cloud):
1. Create account at mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## Future Enhancements

The following features are planned:
- Comment system for AI tools
- Rating system
- Email verification
- Password reset functionality
- OAuth social login (Google, Facebook)
- Admin dashboard
- User favorites/bookmarks

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check service status
- Verify connection string in `.env`
- Check firewall settings

### JWT Token Issues
- Ensure `JWT_SECRET` is set in `.env`
- Check token expiration settings
- Verify token is being sent in Authorization header

### Port Already in Use
- Change `PORT` in `.env` file
- Kill process using the port: `npx kill-port 5000`

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
