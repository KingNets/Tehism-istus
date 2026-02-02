# Live Deployment Guide - Tehismõistus

## 📋 Ülevaade
See juhend aitab sul panna frontend'i ja backend'i live.

**Frontend:** GitHub Pages (tasuta)  
**Backend:** Render.com (tasuta)  
**Andmebaas:** MongoDB Atlas (tasuta)

---

## 🚀 Samm 1: MongoDB Atlas Seadistamine

### 1.1 Loo MongoDB Atlas konto
1. Mine: https://www.mongodb.com/cloud/atlas/register
2. Registreeri tasuta kontoga
3. Loo uus cluster (vali FREE tier - M0)

### 1.2 Seadista andmebaas
1. **Database Access** → Lisa uus user:
   - Username: `aitools_user`
   - Password: Genereeri tugev parool (salvesta!)
   - Database User Privileges: `Read and write to any database`

2. **Network Access** → Lisa IP:
   - Kliki "Add IP Address"
   - Vali "Allow Access from Anywhere" (0.0.0.0/0)
   - Lisa

3. **Database** → Connect:
   - Kliki "Connect"
   - Vali "Connect your application"
   - Kopeeri connection string:
   ```
   mongodb+srv://aitools_user:<password>@cluster0.xxxxx.mongodb.net/aitools?retryWrites=true&w=majority
   ```
   - Asenda `<password>` oma parooliga

---

## 🖥️ Samm 2: Backend Deployment (Render.com)

### 2.1 Valmista backend ette
Backend on juba valmis, kuid peame tegema paar muudatust.

### 2.2 Loo Render.com konto
1. Mine: https://render.com/
2. Registreeri GitHub kontoga
3. Autentimine

### 2.3 Deploy backend Render'isse

**OLULINE:** Enne Render'i deployment'i peame looma eraldi Git repo backend'i jaoks või kasutama olemasolevat.

Kaks võimalust:

#### Võimalus A: Kasuta olemasolevat Tehism-istus repo
1. Push'i kogu projekt GitHub'i (frontend + backend koos)
2. Render saab lugeda ainult `/backend` kausta

#### Võimalus B: Eraldi backend repo (soovitatav)
1. Loo uus Git repo ainult backend'ile
2. Liiguta `/backend` kaust eraldi repo'sse

**Jätkame Võimalus A-ga (lihtsam):**

1. **Render Dashboard'is:**
   - Kliki "New +" → "Web Service"
   - Ühenda GitHub repo: `Tehism-istus`
   - Seadistused:
     - **Name:** `aitools-backend`
     - **Region:** Frankfurt (EU lähim)
     - **Branch:** `main`
     - **Root Directory:** `backend`
     - **Runtime:** Node
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Plan:** Free

2. **Environment Variables (lisame järgmised):**
   ```
   NODE_ENV=production
   PORT=5001
   MONGODB_URI=mongodb+srv://aitools_user:SINU_PAROOL@cluster0.xxxxx.mongodb.net/aitools
   JWT_SECRET=GENEREERI_TUGEV_64_TÄHEMÄRKI_SECRET
   JWT_EXPIRE=7d
   FRONTEND_URL=https://kingnets.github.io/Tehism-istus
   EMAIL_USER=tehismoistus@gmail.com
   EMAIL_PASSWORD=SINU_GMAIL_APP_PASSWORD
   ```

   **Kuidas genereerida JWT_SECRET:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

3. **Kliki "Create Web Service"**
   - Render hakkab deployment'i tegema
   - Oodake ~5 minutit
   - Backend URL: `https://aitools-backend.onrender.com`

---

## 🌐 Samm 3: Frontend Deployment (GitHub Pages)

### 3.1 Uuenda API URL'id frontend'is

Peame muutma kõik `localhost:5001` viited production URL'ile.

**Failid, mida muuta:**
- `api.js`
- `community.js`
- `bug-report.js`
- `feedback.js`
- `notifications.js`
- `recommend.js`

**Näide (api.js):**
```javascript
// Vana:
const API_BASE_URL = 'http://localhost:5001/api';

// Uus:
const API_BASE_URL = 'https://aitools-backend.onrender.com/api';
```

### 3.2 Push'i GitHub'i
```bash
cd "/Users/stenvalliste/Desktop/Tehismõistus/Variant 1 - Copy copy"

# Kontrolli Git status
git status

# Lisa kõik muudatused
git add .

# Commit
git commit -m "Deploy: Update API URLs for production"

# Push main branch'i
git push origin main
```

### 3.3 Aktiveeri GitHub Pages
1. Mine GitHub repo: https://github.com/KingNets/Tehism-istus
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main` / `/(root)` 
5. Salvesta

**GitHub Pages URL:**
```
https://kingnets.github.io/Tehism-istus
```

---

## 🔧 Samm 4: Backend CORS Seadistamine

Peame lubama GitHub Pages origin'il teha API päringuid.

**Backend fail: `src/server.js`**

Leia CORS config ja lisa GitHub Pages URL:

```javascript
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:5500',
    'https://kingnets.github.io'  // Lisa see rida
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

Push muudatus:
```bash
cd backend
git add src/server.js
git commit -m "Add GitHub Pages origin to CORS"
git push origin main
```

Render auto-deploy'b uuesti.

---

## ✅ Samm 5: Testimine

### 5.1 Testi backend'i
```bash
curl https://aitools-backend.onrender.com/api/health
```

Peaks tagastama:
```json
{"status":"OK","timestamp":"..."}
```

### 5.2 Testi frontend'i
1. Mine: https://kingnets.github.io/Tehism-istus
2. Kontrolli:
   - AI tööriistade laadimine
   - Registreerimine/login
   - Arvustuste ja küsimuste lisamine
   - Admin dashboard

---

## 🔐 Samm 6: Email SMTP (Gmail)

Kui soovid, et email teavitused töötaksid:

1. **Google konto:**
   - Mine: https://myaccount.google.com/security
   - Aktiveeri 2FA (2-step verification)
   - Mine "App passwords"
   - Genereeri uus app password "Nodemailer" jaoks
   - Kopeeri 16-kohaline kood

2. **Render Environment Variables:**
   - Lisa: `EMAIL_USER=tehismoistus@gmail.com`
   - Lisa: `EMAIL_PASSWORD=xxxx xxxx xxxx xxxx` (app password)

---

## 📊 Monitooring

### Render Dashboard
- Logid: https://dashboard.render.com/
- Resource kasutus (tasuta tier: 512MB RAM, 0.1 CPU)
- Auto-sleep pärast 15 min inactivity (tasuta tier)

### MongoDB Atlas
- Database size
- Connection count
- Queries per second

---

## 🚨 Troubleshooting

### Backend ei tööta
1. Kontrolli Render logs
2. Kontrolli environment variables
3. Kontrolli MongoDB connection string

### Frontend ei laadi andmeid
1. Kontrolli browser console errors
2. Kontrolli CORS settings
3. Kontrolli API URL'id

### CORS error
```
Access to XMLHttpRequest at '...' from origin '...' has been blocked by CORS policy
```
→ Lisa origin backend CORS config'isse

---

## 💰 Kulud

**Kõik TASUTA:**
- ✅ GitHub Pages: Tasuta
- ✅ Render Free Tier: 750h/kuus (piisav)
- ✅ MongoDB Atlas M0: 512MB tasuta
- ✅ Gmail SMTP: Tasuta

**Piirangud:**
- Render: 15 min inactivity → sleep (ärkab esimese päringu peale ~30 sek)
- MongoDB: 512MB storage
- GitHub Pages: 100GB bandwidth/kuu

---

## 📝 Järgmised Sammud

1. Custom domain (optional):
   - Osta domeen (nt. tehismoistus.ee)
   - Seadista DNS GitHub Pages'ile
   - Lisa CNAME file

2. SSL/HTTPS:
   - GitHub Pages: automaatne
   - Render: automaatne

3. Performance:
   - Enable caching
   - Minimize CSS/JS
   - Optimize images

---

Kas oled valmis alustama? Milline samm vajab abi?
