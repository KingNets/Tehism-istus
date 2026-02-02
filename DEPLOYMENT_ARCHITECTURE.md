# Deployment Architecture - Tehismõistus

## 🏗️ Production Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        USERS                             │
│                          ↓                               │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   GITHUB PAGES                           │
│  https://kingnets.github.io/Tehism-istus               │
│                                                          │
│  Frontend:                                              │
│  • HTML/CSS/JS (Static)                                 │
│  • Free hosting                                         │
│  • Auto SSL/HTTPS                                       │
│  • Global CDN                                           │
└─────────────────────────────────────────────────────────┘
                            ↓
                    (API Requests)
                            ↓
┌─────────────────────────────────────────────────────────┐
│                     RENDER.COM                           │
│  https://aitools-backend.onrender.com                   │
│                                                          │
│  Backend (Node.js + Express):                           │
│  • Authentication (JWT)                                 │
│  • Reviews API                                          │
│  • Questions API                                        │
│  • User management                                      │
│  • Email notifications                                  │
│  • Free tier: 512MB RAM                                 │
└─────────────────────────────────────────────────────────┘
                            ↓
                    (Database Queries)
                            ↓
┌─────────────────────────────────────────────────────────┐
│                   MONGODB ATLAS                          │
│  mongodb+srv://cluster0.xxxxx.mongodb.net/aitools       │
│                                                          │
│  Database:                                              │
│  • Users collection                                     │
│  • Reviews collection                                   │
│  • Questions collection                                 │
│  • Notifications collection                             │
│  • Free tier: 512MB storage                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### 1. User Registration
```
User → Frontend → POST /api/auth/register → Backend → MongoDB
                                                    ↓
                                            JWT Token ← 
```

### 2. Add Review
```
User → Frontend → POST /api/reviews → Backend → Verify JWT
                                              ↓
                                        Save to MongoDB
                                              ↓
                                     Email Notification (Gmail SMTP)
```

### 3. View AI Tools
```
User → Frontend → Render HTML
              ↓
          GET /api/reviews/tool/:toolId → Backend → MongoDB
              ↓
          Display reviews + ratings
```

---

## 📦 Deployment Process

### Initial Setup
```bash
1. Setup MongoDB Atlas
   ↓
2. Deploy Backend to Render
   ↓
3. Update Frontend API URLs
   ↓
4. Push to GitHub
   ↓
5. Enable GitHub Pages
```

### Future Updates
```bash
# Frontend changes:
git add .
git commit -m "Update"
git push origin main
→ GitHub Pages auto-deploys (1-2 min)

# Backend changes:
git add backend/
git commit -m "Backend update"
git push origin main
→ Render auto-deploys (2-3 min)
```

---

## 🔐 Environment Variables

### Backend (Render.com)
```
NODE_ENV=production
PORT=5001
MONGODB_URI=mongodb+srv://...
JWT_SECRET=...
JWT_EXPIRE=7d
FRONTEND_URL=https://kingnets.github.io/Tehism-istus
EMAIL_USER=tehismoistus@gmail.com
EMAIL_PASSWORD=...
```

---

## 🌐 URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | https://kingnets.github.io/Tehism-istus | Main website |
| Backend | https://aitools-backend.onrender.com | REST API |
| Admin Panel | https://kingnets.github.io/Tehism-istus/admin.html | Admin dashboard |
| Database | MongoDB Atlas | Data storage |

---

## 💰 Costs (All FREE)

| Service | Free Tier | Limits |
|---------|-----------|--------|
| GitHub Pages | ✅ Yes | 100GB bandwidth/month |
| Render.com | ✅ Yes | 750 hours/month, 512MB RAM |
| MongoDB Atlas | ✅ Yes | 512MB storage, M0 cluster |
| Gmail SMTP | ✅ Yes | 500 emails/day |

**Total Monthly Cost: $0** 🎉

---

## ⚡ Performance

### GitHub Pages
- Global CDN (fast worldwide)
- Automatic HTTPS
- ~100ms load time

### Render.com (Free Tier)
- Auto-sleep after 15 min inactivity
- Cold start: ~30 seconds
- Active: <100ms response time

### MongoDB Atlas
- ~50ms query time
- Auto-scaling
- Daily backups

---

## 🔧 Monitoring

### Backend Health Check
```bash
curl https://aitools-backend.onrender.com/api/health
```

### Database Connection
```bash
# In Render logs, check for:
"MongoDB Connected: cluster0.xxxxx.mongodb.net"
```

### Frontend Status
```bash
curl -I https://kingnets.github.io/Tehism-istus
# Should return: HTTP/2 200
```

---

## 🚨 Common Issues

### CORS Error
**Problem:** Frontend can't access backend API  
**Solution:** Add GitHub Pages origin to backend CORS config

### MongoDB Connection Failed
**Problem:** Backend can't connect to database  
**Solution:** Check IP whitelist (should be 0.0.0.0/0)

### 502 Bad Gateway (Render)
**Problem:** Backend is sleeping (cold start)  
**Solution:** Wait 30 seconds, refresh page

---

## 📈 Scaling (Future)

When you outgrow free tiers:

### Option 1: Paid Plans
- Render Pro: $7/month (no sleep, better performance)
- MongoDB Atlas M10: $10/month (2GB storage)

### Option 2: Alternative Hosting
- Backend: Railway, Fly.io, DigitalOcean
- Database: Self-hosted MongoDB, PostgreSQL

---

## 🔄 CI/CD Pipeline

Current setup (automatic):
```
git push → GitHub → Triggers deployment
               ↓
         GitHub Pages updates (frontend)
               ↓
         Render detects changes (backend)
               ↓
         Auto-redeploy backend
```

---

## 📝 Checklist

- [ ] MongoDB Atlas configured
- [ ] Render backend deployed
- [ ] Environment variables set
- [ ] Frontend API URLs updated
- [ ] GitHub Pages enabled
- [ ] CORS configured
- [ ] Email SMTP configured (optional)
- [ ] Admin account created
- [ ] Site tested live

---

✅ Architecture is production-ready and scalable!
