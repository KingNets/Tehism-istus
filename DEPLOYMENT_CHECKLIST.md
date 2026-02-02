# 🚀 Deployment Checklist - Tehismõistus

Kasuta seda checklist'i, et panna projekt live.

---

## ☑️ Eeltööd (10 min)

### 1. MongoDB Atlas
- [ ] Loo MongoDB Atlas konto: https://www.mongodb.com/cloud/atlas/register
- [ ] Loo FREE cluster (M0)
- [ ] Loo database user (salvesta username + password!)
- [ ] Lisa IP whitelist: 0.0.0.0/0 (Allow from anywhere)
- [ ] Kopeeri connection string
- [ ] Asenda `<password>` oma parooliga connection string'is

**Connection string näidis:**
```
mongodb+srv://aitools_user:SINU_PAROOL@cluster0.xxxxx.mongodb.net/aitools
```

---

## ☑️ Backend Deploy (15 min)

### 2. Render.com Setup
- [ ] Loo Render konto: https://render.com/ (kasuta GitHub'i)
- [ ] Kliki "New +" → "Web Service"
- [ ] Ühenda GitHub repo: `Tehism-istus`
- [ ] Seadista:
  - Name: `aitools-backend`
  - Region: `Frankfurt` (EU)
  - Branch: `main`
  - Root Directory: `backend`
  - Runtime: `Node`
  - Build Command: `npm install`
  - Start Command: `npm start`
  - Plan: `Free`

### 3. Environment Variables
Render Dashboard → Environment → Add Environment Variables:

```bash
# Kopeeri need Render'i (üks korraga):
NODE_ENV=production
PORT=5001
MONGODB_URI=mongodb+srv://aitools_user:SINU_PAROOL@cluster0.xxxxx.mongodb.net/aitools
JWT_SECRET=GENEREERI_SEE_ALLPOOL
JWT_EXPIRE=7d
FRONTEND_URL=https://kingnets.github.io/Tehism-istus
```

**Genereeri JWT_SECRET:**
Käivita terminal'is:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Kopeeri output ja asenda `JWT_SECRET` väärtus.

- [ ] Kõik environment variables lisatud
- [ ] Kliki "Create Web Service"
- [ ] Oota ~5 min kuni deploy valmis
- [ ] Backend URL: `https://aitools-backend.onrender.com`

### 4. Testi Backend'i
- [ ] Mine: https://aitools-backend.onrender.com/api/health
- [ ] Peaks nägema: `{"status":"OK",...}`

---

## ☑️ Frontend Deploy (10 min)

### 5. Uuenda API URL'id
Käivita projekt root'is:
```bash
cd "/Users/stenvalliste/Desktop/Tehismõistus/Variant 1 - Copy copy"
./update-api-urls.sh https://aitools-backend.onrender.com
```

- [ ] Skript käivitatud
- [ ] Kontrolli muudatusi: `git diff`

### 6. Backend CORS
Muuda `backend/src/server.js` - lisa GitHub Pages origin:

```javascript
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:5500',
    'https://kingnets.github.io'  // ← Lisa see rida
  ],
  credentials: true
};
```

- [ ] CORS origin lisatud
- [ ] Salvesta fail

### 7. Commit & Push
```bash
git add .
git commit -m "Deploy: Production ready with Render backend"
git push origin main
```

- [ ] Muudatused push'itud
- [ ] Render auto-deploy'b backend'i uuesti (~2 min)

### 8. GitHub Pages Aktiveerimine
- [ ] Mine: https://github.com/KingNets/Tehism-istus/settings/pages
- [ ] **Source:** `Deploy from a branch`
- [ ] **Branch:** `main` / `/(root)`
- [ ] **Save**
- [ ] Oota 1-2 minutit

---

## ☑️ Testimine (5 min)

### 9. Live Site Test
- [ ] Mine: https://kingnets.github.io/Tehism-istus
- [ ] Kontrolli AI tööriistade laadimist
- [ ] Testi registreerimist
- [ ] Testi sisselogimist
- [ ] Lisa arvustus
- [ ] Lisa küsimus
- [ ] Vaata Browser Console (F12) - pole errors'eid

### 10. Admin Test
- [ ] Mine: https://kingnets.github.io/Tehism-istus/admin.html
- [ ] Logi sisse admin kontoga
- [ ] Kontrolli dashboard'i

---

## ☑️ Email Setup (Valikuline, 5 min)

### 11. Gmail SMTP
Kui soovid email teavitusi:

- [ ] Google konto: aktiveeri 2FA
- [ ] Mine: https://myaccount.google.com/apppasswords
- [ ] Genereeri app password "Nodemailer" jaoks
- [ ] Kopeeri 16-kohaline kood
- [ ] Render → Environment → Lisa:
  ```
  EMAIL_USER=tehismoistus@gmail.com
  EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
  ```
- [ ] Salvesta ja Render deploy'b uuesti

---

## ✅ Valmis!

Sinu site on nüüd live:
- **Frontend:** https://kingnets.github.io/Tehism-istus
- **Backend:** https://aitools-backend.onrender.com
- **Database:** MongoDB Atlas

---

## 🔧 Troubleshooting

### Backend ei käivitu
1. Kontrolli Render logs: Dashboard → Logs
2. Kontrolli environment variables
3. Kontrolli MongoDB connection string

### Frontend ei laadi andmeid
1. Ava Browser Console (F12)
2. Vaata errors
3. Kontrolli Network tab - kas API calls lähevad õigele URL'ile
4. Kontrolli CORS settings backend'is

### API CORS error
```
Access-Control-Allow-Origin error
```
→ Lisa `https://kingnets.github.io` backend CORS config'isse

### MongoDB connection error
```
MongooseError: connect ECONNREFUSED
```
→ Kontrolli:
- MONGODB_URI environment variable
- IP whitelist (peaks olema 0.0.0.0/0)
- Database user credentials

---

## 📞 Support

Kui vajad abi:
1. Kontrolli Render logs
2. Kontrolli MongoDB Atlas logs
3. Vaata browser console errors
4. Kontrolli DEPLOYMENT_GUIDE.md

---

Edu! 🎉
