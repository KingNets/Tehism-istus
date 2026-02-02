# MongoDB & Backend Setup - COMPLETE ✅

## Setup Summary (January 22, 2026)

### ✅ Installed Software
- **Node.js**: v25.4.0
- **npm**: 11.7.0
- **MongoDB Community**: 7.0.29
- **Homebrew**: Installed and configured

### ✅ Running Services
- **Backend Server**: Running on `http://localhost:5001`
- **MongoDB**: Running on `mongodb://localhost:27017`
- **Database**: `ai-tools-db` (active)

### 📝 Configuration Changes
- Backend port changed from **5000** to **5001** (due to macOS ControlCenter conflict)
- Frontend updated to connect to port **5001**

## MongoDB Compass Connection

### Connection String:
```
mongodb://localhost:27017
```

### Steps to Connect:
1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Open MongoDB Compass
3. Paste the connection string: `mongodb://localhost:27017`
4. Click **Connect**
5. Navigate to database: `ai-tools-db`

### Current Database Structure:
- **Database Name**: `ai-tools-db`
- **Collections**: 
  - `users` (0 documents)

## Testing the Connection

### Test Backend API:
```bash
curl http://localhost:5001/api/health
```
Expected response:
```json
{"status":"OK","message":"Server is running"}
```

### Test MongoDB:
```bash
mongosh --eval "db.adminCommand('ping')"
```
Expected response:
```json
{ ok: 1 }
```

## Starting the Backend Server

### Start Server:
```bash
cd "/Users/stenvalliste/Desktop/Variant 1 - Copy/backend"
npm start
```

### Start in Development Mode (auto-reload):
```bash
cd "/Users/stenvalliste/Desktop/Variant 1 - Copy/backend"
npm run dev
```

### Stop Server:
```bash
pkill -f "node.*server.js"
```

## MongoDB Commands

### Start MongoDB:
```bash
brew services start mongodb/brew/mongodb-community@7.0
```

### Stop MongoDB:
```bash
brew services stop mongodb/brew/mongodb-community@7.0
```

### Check MongoDB Status:
```bash
brew services list | grep mongodb
```

## API Endpoints

- **Health Check**: `GET http://localhost:5001/api/health`
- **Register User**: `POST http://localhost:5001/api/auth/register`
- **Login**: `POST http://localhost:5001/api/auth/login`
- **Get Current User**: `GET http://localhost:5001/api/auth/me`
- **Update Password**: `PUT http://localhost:5001/api/users/:id/password`

## Environment Variables

Located at: `/Users/stenvalliste/Desktop/Variant 1 - Copy/backend/.env`

```env
PORT=5001
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ai-tools-db
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
CLIENT_URL=*
```

⚠️ **Security Note**: Change `JWT_SECRET` before deploying to production!

## Troubleshooting

### If backend won't start:
```bash
# Check if port is in use
lsof -i :5001

# Kill any process using the port
lsof -ti:5001 | xargs kill -9
```

### If MongoDB won't connect:
```bash
# Check MongoDB service
brew services list | grep mongodb

# Restart MongoDB
brew services restart mongodb/brew/mongodb-community@7.0
```

### Check logs:
```bash
# MongoDB logs
tail -f /opt/homebrew/var/log/mongodb/mongo.log

# Backend logs
# (view in terminal where server is running)
```

## Next Steps

1. ✅ Backend is connected to MongoDB
2. ✅ Frontend is configured to use the backend
3. 📱 Open MongoDB Compass and connect
4. 🧪 Test registration/login on your website
5. 👀 View user data in MongoDB Compass

---

**All systems operational! 🚀**
