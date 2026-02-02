# Logo Update Instructions

## ✅ Changes Made

The HTML files have been updated to use the new logo images:

### 1. **Favicon (with background)**
- **File needed:** `logo-favicon.png`
- **Location:** Root directory of the project
- **Updated in:** `index.html` (line 37)
- **Usage:** Browser tab icon

### 2. **Logo (transparent, no background)**
- **File needed:** `logo-transparent.png`
- **Location:** Root directory of the project
- **Updated in:** 
  - `index.html` - Header logo (line ~53)
  - `index.html` - Footer logo (line ~2329)
- **Usage:** Main site logo in header and footer

## 📋 Next Steps

You need to save the two logo images to the project directory:

1. **Save the first image (with light background)** as:
   ```
   /Users/stenvalliste/Desktop/Tehismõistus/Variant 1 - Copy copy/logo-favicon.png
   ```

2. **Save the second image (transparent/no background)** as:
   ```
   /Users/stenvalliste/Desktop/Tehismõistus/Variant 1 - Copy copy/logo-transparent.png
   ```

## 📝 What Was Changed

### Before:
```html
<link rel="icon" type="image/png" href="ai-cloud.png" />

<div class="logo-icon">
    <i data-lucide="brain"></i>
</div>
```

### After:
```html
<link rel="icon" type="image/png" href="logo-favicon.png" />

<div class="logo-icon">
    <img src="logo-transparent.png" alt="Tehismõistus" style="width: 48px; height: 48px;">
</div>
```

## ✨ Result

Once you save the logo files:
- ✅ Browser favicon will show your logo with background
- ✅ Header will show your transparent logo (48x48px)
- ✅ Footer will show your transparent logo (48x48px)
- ✅ No more Lucide brain icon

## 🔧 Optional: Adjust Logo Size

If the logos appear too large or small, you can adjust the inline style:
- Change `width: 48px; height: 48px;` to your preferred size
- Or add CSS rules in `styles.css`
