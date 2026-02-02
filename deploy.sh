#!/bin/bash

# Quick Deploy Script for Tehismõistus
# This script helps you deploy to GitHub Pages

echo "🚀 Tehismõistus Deployment Script"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Are you in the project root?"
    exit 1
fi

# Check Git status
echo "📊 Checking Git status..."
git status

echo ""
echo "📝 Current changes:"
git diff --stat

echo ""
read -p "Do you want to commit and push these changes? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    read -p "Enter commit message: " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Update: $(date '+%Y-%m-%d %H:%M')"
    fi
    
    echo ""
    echo "📦 Adding files..."
    git add .
    
    echo "💾 Committing..."
    git commit -m "$commit_msg"
    
    echo "⬆️  Pushing to GitHub..."
    git push origin main
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "🌐 Your site will be live at:"
    echo "   https://kingnets.github.io/Tehism-istus"
    echo ""
    echo "⏱️  GitHub Pages may take 1-2 minutes to update."
else
    echo "❌ Deployment cancelled."
fi
