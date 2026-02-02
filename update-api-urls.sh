#!/bin/bash

# Script to update API URLs from localhost to production
# Usage: ./update-api-urls.sh <production-backend-url>

if [ -z "$1" ]; then
    echo "❌ Error: Backend URL is required"
    echo "Usage: ./update-api-urls.sh https://your-backend.onrender.com"
    exit 1
fi

BACKEND_URL="$1"
echo "🔄 Updating API URLs to: $BACKEND_URL"

# Remove trailing slash if present
BACKEND_URL="${BACKEND_URL%/}"

# Files to update
FILES=(
    "api.js"
    "community.js"
    "bug-report.js"
    "feedback.js"
    "notifications.js"
    "recommend.js"
)

# Backup directory
BACKUP_DIR="api-backups-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Creating backups in $BACKUP_DIR/"

# Update each file
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ➜ Backing up $file..."
        cp "$file" "$BACKUP_DIR/"
        
        echo "  ➜ Updating $file..."
        # Replace localhost URLs with production URL
        sed -i '' "s|http://localhost:5001|${BACKEND_URL}|g" "$file"
        sed -i '' "s|http://127.0.0.1:5001|${BACKEND_URL}|g" "$file"
        
        echo "  ✅ Updated $file"
    else
        echo "  ⚠️  File not found: $file"
    fi
done

echo ""
echo "✅ All API URLs updated successfully!"
echo "📦 Backups saved to: $BACKUP_DIR/"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Test locally if needed"
echo "3. Commit: git add . && git commit -m 'Update API URLs for production'"
echo "4. Push: git push origin main"
