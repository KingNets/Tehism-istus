# 🚀 Quick Start - Deploy to Production

## Fastest Way to Go Live (20 minutes)

### Step 1: MongoDB Atlas (5 min)
```bash
# 1. Create account: https://www.mongodb.com/cloud/atlas/register
# 2. Create FREE cluster
# 3. Create database user & save password
# 4. Whitelist IP: 0.0.0.0/0
# 5. Copy connection string
```

### Step 2: Render.com Backend (10 min)
```bash
# 1. Create account: https://render.com (use GitHub)
# 2. New Web Service → Connect "Tehism-istus" repo
# 3. Settings:
#    - Root Directory: backend
#    - Build: npm install
#    - Start: npm start
# 4. Add Environment Variables (see DEPLOYMENT_CHECKLIST.md)
# 5. Deploy (wait 5 min)
```

### Step 3: Update Frontend URLs (2 min)
```bash
cd "/Users/stenvalliste/Desktop/Tehismõistus/Variant 1 - Copy copy"

# Run auto-update script:
./update-api-urls.sh https://YOUR-BACKEND.onrender.com

# Commit changes:
git add .
git commit -m "Production deploy"
git push origin main
```

### Step 4: GitHub Pages (3 min)
```bash
# 1. Go to: https://github.com/KingNets/Tehism-istus/settings/pages
# 2. Source: "Deploy from branch"
# 3. Branch: main / (root)
# 4. Save
# 5. Wait 2 minutes
```

### Done! 🎉
Your site is live at: **https://kingnets.github.io/Tehism-istus**

---

## Detailed Instructions

See full step-by-step guide:
- **📋 DEPLOYMENT_CHECKLIST.md** - Checkbox list
- **📖 DEPLOYMENT_GUIDE.md** - Complete guide

---

## Cost: **$0** (All Free!)
- ✅ GitHub Pages (100GB/month)
- ✅ Render Free Tier (750 hours/month)
- ✅ MongoDB Atlas M0 (512MB)

---

## Support

Issues? Check:
1. Browser Console (F12)
2. Render Logs (Dashboard)
3. MongoDB Atlas (Metrics)
