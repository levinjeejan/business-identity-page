# 🚀 GitHub Setup Guide

Complete step-by-step guide to host your Business Identity Page on GitHub Pages.

## 📋 Prerequisites

- GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer ([Download here](https://git-scm.com/downloads))
- Text editor (VS Code, Sublime Text, etc.)

## 🎯 Step-by-Step Setup

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `business-identity-page` (or any name you prefer)
   - **Description**: "My professional business identity page"
   - **Public** (select this to use GitHub Pages)
   - ✅ Check "Add a README file" (optional, we'll replace it)
5. Click **"Create repository"**

### Step 2: Clone the Repository to Your Computer

Open your terminal/command prompt and run:

```bash
# Navigate to where you want to store the project
cd ~/Documents  # or any folder you prefer

# Clone your repository
git clone https://github.com/YOUR-USERNAME/business-identity-page.git

# Navigate into the folder
cd business-identity-page
```

### Step 3: Add Your Files

Copy all project files into the repository folder:

```
business-identity-page/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Step 4: Commit and Push to GitHub

```bash
# Add all files
git add .

# Commit with a message
git commit -m "Initial commit - Business Identity Page"

# Push to GitHub
git push origin main
```

If you get an error about `main` vs `master`, try:
```bash
git push origin master
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (in left sidebar)
4. Under "Source":
   - Select branch: **main** (or master)
   - Select folder: **/ (root)**
5. Click **"Save"**
6. Wait 2-3 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/business-identity-page/`

## 🎨 Customization After Setup

### Update Your Information

1. Edit `index.html` locally
2. Change name, description, and social links
3. Save the file
4. Push changes:

```bash
git add index.html
git commit -m "Update personal information"
git push origin main
```

Your changes will be live in 1-2 minutes!

### Change Colors

1. Edit `style.css`
2. Modify CSS variables in `:root` section
3. Push changes:

```bash
git add style.css
git commit -m "Update color scheme"
git push origin main
```

## 🔧 Advanced Setup (Optional)

### Using a Custom Domain

1. Buy a domain (GoDaddy, Namecheap, etc.)
2. In your repository:
   - Create a file named `CNAME`
   - Add your domain: `yourdomain.com`
3. In your domain provider:
   - Add DNS records:
     ```
     Type: A
     Host: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     
     Type: CNAME
     Host: www
     Value: YOUR-USERNAME.github.io
     ```
4. Wait 24-48 hours for DNS propagation

### Local Development Server

For live reload during development:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (install first: npm install -g http-server)
http-server

# Using VS Code
# Install "Live Server" extension and click "Go Live"
```

Then visit: `http://localhost:8000`

## 📝 Git Commands Cheat Sheet

```bash
# Check status
git status

# See changes
git diff

# Add specific file
git add index.html

# Add all files
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View commit history
git log --oneline
```

## 🌍 Project Structure on GitHub

```
YOUR-USERNAME/business-identity-page/
│
├── .git/                    # Git folder (hidden)
├── index.html              # Your main file
├── style.css               # Your styles
├── script.js               # Your JavaScript
├── README.md              # Documentation
└── CNAME                  # (Optional) Custom domain
```

## 🚨 Troubleshooting

### Page not loading?

1. Check GitHub Pages settings are enabled
2. Wait 2-3 minutes after pushing
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors (F12)

### Changes not showing?

```bash
# Make sure you pushed changes
git status  # Should show "nothing to commit"

# If files are modified
git add .
git commit -m "Update"
git push origin main
```

### Permission denied?

Set up SSH keys:
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: Settings → SSH Keys → New SSH Key
```

### Wrong branch name?

```bash
# If you have 'master' but GitHub shows 'main'
git branch -m master main
git push -u origin main
```

## 📱 Testing on Different Devices

### Test Responsive Design

1. **Browser DevTools**:
   - Chrome: F12 → Toggle device toolbar
   - Test iPhone, iPad, Android sizes

2. **Real Devices**:
   - Share URL: `https://YOUR-USERNAME.github.io/business-identity-page/`
   - Test on actual phones/tablets

3. **Online Tools**:
   - [Responsive Design Checker](https://responsivedesignchecker.com/)
   - [BrowserStack](https://www.browserstack.com/)

## 🎯 Next Steps

1. ✅ Customize your information
2. ✅ Update colors to match your brand
3. ✅ Test on different devices
4. ✅ Share your URL on social media
5. ✅ Add Google Analytics (optional)
6. ✅ Set up custom domain (optional)

## 📊 Adding Analytics (Optional)

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔐 Security Best Practices

1. Don't commit sensitive data
2. Use environment variables for API keys
3. Keep dependencies updated
4. Review code before committing

## 💡 Tips for Success

1. **Regular Updates**: Keep your content fresh
2. **Performance**: Optimize images and code
3. **SEO**: Add meta tags and descriptions
4. **Accessibility**: Test with screen readers
5. **Analytics**: Monitor your visitors

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [HTML MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🆘 Need Help?

- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/)
- Create an issue in your repository

## ✅ Checklist

Before launching:

- [ ] Updated personal information
- [ ] Tested all links
- [ ] Checked on mobile devices
- [ ] Verified all animations work
- [ ] Updated README with your info
- [ ] Tested accessibility features
- [ ] Optimized for performance
- [ ] Set up analytics (optional)
- [ ] Added custom domain (optional)

---

🎉 **Congratulations!** Your business identity page is now live on GitHub Pages!

Share it: `https://YOUR-USERNAME.github.io/business-identity-page/`
