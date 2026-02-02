# Emaili seadistamine

## ✅ Mida on tehtud:

1. **Nodemailer paigaldatud** - Emailide saatmiseks
2. **Email konfiguratsioon loodud** - `/backend/src/config/email.js`
3. **3 emaili tüüpi:**
   - 🔔 Kontakti vorm
   - 💬 Tagasiside vorm
   - 🐛 Vearaport

4. **Backend uuendatud:**
   - `/backend/src/controllers/feedback.controller.js` - saadab nüüd emaili
   - `/backend/src/controllers/contact.controller.js` - UUS kontroller
   - `/backend/src/routes/contact.routes.js` - UUS route
   - `/backend/src/server.js` - lisatud kontakti route

## 📝 Järgmised sammud:

### 1. Seadista Proton Mail parool

Pead muutma `/backend/.env` faili:

```env
EMAIL_USER=tehismoistus@proton.me
EMAIL_PASSWORD=sinu_protonmail_parool_siia
```

**NB!** Proton Mail vajab tavaliselt **App Password** (mitte tavalist parooli):
1. Logi sisse Proton Mail'i
2. Mine Settings → Security
3. Loo "App Password" või "Bridge Password"
4. Kopeeri see parool .env faili

### 2. Restart server

```bash
cd backend
npm run dev
```

### 3. Kui kasutad 2FA (Two-Factor Auth):

Pead kasutama **Bridge** või **App Password**:
- Proton Mail Settings → Security → App passwords
- Loo uus App Password: "Tehismõistus Website"
- Kasuta seda parooli .env failis

## 🎯 Kuidas töötab:

### Kontakti vorm (contact.html):
```
Kasutaja täidab vormi → POST /api/contact → Email saadetakse → tehismoistus@proton.me
```

### Tagasiside vorm:
```
Kasutaja esitab tagasisidet → POST /api/feedback → Email saadetakse → tehismoistus@proton.me
```

## 📧 Emaili näidised:

### Kontakti email:
- **Subject:** "🔔 Uus kontakti sõnum: [Nimi]"
- **Sisu:** Nimi, Email, Sõnum, Kuupäev

### Tagasiside email:
- **Subject:** "💡 Uus tagasiside: [Tüüp]"
- **Sisu:** Tüüp, Hinnang, Email, Sõnum, Kuupäev

### Vearaport email:
- **Subject:** "🐛 Uus vearaport: [Pealkiri]"
- **Sisu:** Kategooria, Tõsidus, Kirjeldus, Sammud, Tehniline info, Kuupäev

## 🔧 Testimine:

Pärast serveri restarti ja parooli seadistamist:

1. **Testi kontakti vormi:**
   - Mine contact.html
   - Täida vorm
   - Vajuta "Saada"
   - Kontrolli tehismoistus@proton.me postkasti

2. **Testi tagasiside vormi:**
   - Kliki tagasiside nupule
   - Esita tagasisidet
   - Kontrolli emaili

## ⚠️ Troubleshooting:

Kui email ei tööta:
1. Kontrolli .env faili parooli
2. Vaata serveri console'i logisid:
   - `✅ Email server is ready` - Töötab!
   - `❌ Email server connection error` - Kontrolli parooli

3. Proton Mail võib blokeerida:
   - Kasuta App Password, mitte tavalist parooli
   - Luba SMTP juurdepääs seadetes

## 🌐 SMTP Info:

Kui Proton Mail ei tööta, võid kasutada ka:
- **Gmail:** smtp.gmail.com:587 (vajab App Password)
- **Mailgun:** SMTP teenus (tasuta 5000 emaili/kuu)
- **SendGrid:** SMTP teenus (tasuta 100 emaili/päev)

Muuda `/backend/src/config/email.js`:
```javascript
host: 'smtp.gmail.com', // või muu SMTP
port: 587,
auth: {
    user: 'sinu.email@gmail.com',
    pass: 'app_password_here'
}
```
