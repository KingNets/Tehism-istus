# Admin Account Information

## Backend Admin (MongoDB)

**Email:** admin@ai-tools.ee  
**Password:** Admin123!  
**Role:** admin

This account is stored in MongoDB and can be used when `USE_LOCAL_AUTH = false` in auth.js.

---

## Local Admin (for testing without backend)

If you want to test the admin functionality without the backend running:

1. Open your website in a browser
2. Open the browser console (F12 or Cmd+Option+I)
3. Paste and run this code:

```javascript
(function() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const adminEmail = 'admin@ai-tools.ee';
    
    users[adminEmail] = {
        username: 'admin',
        email: adminEmail,
        password: 'admin123',
        role: 'admin',
        createdAt: new Date().toISOString()
    };
    
    localStorage.setItem('users', JSON.stringify(users));
    console.log('✅ Local admin created! Email: admin@ai-tools.ee | Password: admin123');
})();
```

Then set `USE_LOCAL_AUTH = true` in auth.js and login with:
- **Email:** admin@ai-tools.ee
- **Password:** admin123

---

## Admin Features

When logged in as admin, you can:

1. ✅ **Delete any review/comment** - A trash icon appears next to each review
2. ✅ **See all reviews** - Same as regular users
3. ✅ **Add reviews** - Same as regular users

---

## How to Use

1. **Start the backend server:**
   ```bash
   cd backend
   node src/server.js
   ```

2. **Login with admin credentials:**
   - Email: admin@ai-tools.ee
   - Password: Admin123! (for backend) or admin123 (for local)

3. **Delete reviews:**
   - Open any tool card
   - Scroll to the reviews section
   - Click the trash icon next to any review
   - Confirm deletion

---

## Security Notes

⚠️ **IMPORTANT:** 
- Change the admin password after first login in production!
- The JWT_SECRET in .env should be changed to a secure random string
- Local authentication stores passwords in plain text - only use for development

---

## Troubleshooting

**If "failed to fetch" error appears:**
1. Make sure MongoDB is running: `pgrep -f mongod`
2. Make sure backend server is running: `lsof -i :5001`
3. Restart backend: `cd backend && node src/server.js`

**If delete button doesn't appear:**
1. Make sure you're logged in as admin
2. Refresh the page (Cmd+Shift+R)
3. Check browser console for errors
4. Verify `currentUser.role === 'admin'` in console
