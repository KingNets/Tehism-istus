# 🆓 TASUTA Gmail Email Seadistamine

## ✅ Miks Gmail?

- ✅ **100% TASUTA** - Ei vaja krediitkaardi
- ✅ **Lihtne seadistada** - 5 minutit
- ✅ **500 emaili päevas** - Piisav väikesele saidile
- ✅ **Usaldusväärnepärit** - Google'i infrastruktuur

## 📝 Sammud (5 minutit):

### 1. Loo Gmail konto (kui sul pole)

Mine: https://accounts.google.com/signup
- Vali username: `tehismoistus@gmail.com` või muu
- Loo parool

### 2. Luba 2-Factor Authentication (2FA)

**NB!** See on KOHUSTUSLIK App Password loomiseks!

1. Mine: https://myaccount.google.com/security
2. Leia "2-Step Verification"
3. Vajuta "Get Started"
4. Järgi juhiseid (tavaliselt vajab telefoni numbrit)

### 3. Loo App Password

1. Mine: https://myaccount.google.com/apppasswords
   - Või: Google Account → Security → App Passwords
   
2. Vali:
   - **App:** Mail
   - **Device:** Other (Custom name) → Sisesta: "Tehismõistus Website"
   
3. Vajuta "Generate"

4. **Kopeeri 16-tähelise parooli** (näiteks: `abcd efgh ijkl mnop`)
   - **NB!** Eemalda tühikud: `abcdefghijklmnop`

### 4. Sisesta parool .env faili

Muuda `/backend/.env` faili:

```env
EMAIL_USER=tehismoistus@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

⚠️ **OLULINE:** Eemalda kõik tühikud paroolist!

### 5. Restart server

```bash
cd backend
npm run dev
```

## ✅ Testimine

Pärast serveri restarti peaks nägema:

```
✅ Email server is ready to send messages
```

Kui näed seda, töötab! 🎉

## 🎯 Kui näed viga:

### Viga: "Invalid login"

**Lahendus:**
1. Kontrolli, et 2FA on lubatud
2. Loo App Password uuesti
3. Eemalda KÕIK tühikud paroolist
4. Veendu, et EMAIL_USER on õige

### Viga: "Authentication failed"

**Lahendus:**
1. Gmail'is luba "Less secure app access" (kui vanema konto)
2. Mine: https://myaccount.google.com/lesssecureapps
3. Lülita sisse

### Viga: "Daily sending quota exceeded"

**Lahendus:**
- Gmail lubab 500 emaili päevas
- Uute kontode puhul algab 100st
- Oota 24h ja proovi uuesti

## 📧 Alternative: Ethereal Email (TEST)

Kui ei taha Gmail'i kasutada, võid testida Ethereal'iga:

**Muuda email.js:**
```javascript
// Create test account
const account = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: account.user,
        pass: account.pass
    }
});
```

**NB!** Ethereal on ainult testimiseks - emailid ei lähe päriselt välja!

## 🚀 Muud TASUTA alternatiivid:

### 1. **SendGrid** (100 emaili/päev TASUTA)
- Mine: https://signup.sendgrid.com
- Kinnitatud domeeni vajab

### 2. **Mailgun** (5000 emaili/3 kuud TASUTA)
- Mine: https://signup.mailgun.com
- Vajab krediitkaardi (aga ei võta raha)

### 3. **Brevo (Sendinblue)** (300 emaili/päev TASUTA)
- Mine: https://www.brevo.com/products/transactional-email/
- Lihtne seadistada

## 💡 Soovitus:

**Alusta Gmail'iga!**
- Kõige lihtsam
- 100% tasuta
- Töötab kohe
- 500 emaili päevas piisab

Kui sul on > 500 emaili päevas, siis mine üle SendGrid või Brevo'le.

## 📊 Võrdlus:

| Teenus | Tasuta limiit | Seadistamine | Soovitus |
|--------|--------------|-------------|----------|
| **Gmail** | 500/päev | ⭐⭐⭐⭐⭐ Lihtne | ✅ BEST |
| SendGrid | 100/päev | ⭐⭐⭐ Keskmine | Hea alternatiiv |
| Mailgun | 5000/3 kuud | ⭐⭐ Raske | Kui vajad rohkem |
| Brevo | 300/päev | ⭐⭐⭐⭐ Lihtne | Hea alternatiiv |
| Proton | ❌ Tasuline | - | Ei soovita |

## ✅ Kokkuvõte:

1. Loo Gmail konto
2. Luba 2FA
3. Loo App Password
4. Kopeeri .env faili
5. Restart server
6. ✅ VALMIS!

Küsimused? Vaata: `/backend/EMAIL_SETUP.md`
