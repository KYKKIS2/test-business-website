# Test Business Website

A modern, minimal website built for Test Business using Next.js and Tailwind CSS.

## 📋 Project Details

- **Business Name**: Test Business
- **Order ID**: 1fceb455-d0a2-4407-8c8e-f0a282457ca5
- **Client**: Submit Tester
- **Email**: testsub@example.com
- **Delivered**: 2026-02-28

## 🎨 Design Specifications

- **Primary Color**: #3B82F6 (Blue)
- **Design Style**: Modern & Minimal
- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript

## 📑 Website Sections

✅ **Hero Section**
- Headline: "Test Headline"
- Call-to-Action: "Get Started"
- Value proposition text
- Animated gradient background

✅ **Contact Section**
- Functional contact form with validation
- Fields: Name, Email, Message
- Client-side form handling

✅ **Navigation**
- Fixed header with smooth scrolling
- Responsive navigation
- Footer with links

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Build & Deploy

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Deploy on Vercel

This project is ready for deployment on Vercel:

1. Push the code to your Git repository
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings

**🔗 Live Website**: https://ralph-submit-tester-1fceb455.vercel.app

## ✅ Success Criteria

- ✅ All requested sections implemented
- ✅ Color scheme matches specifications (#3B82F6)
- ✅ Content included as provided
- ✅ Mobile responsive design
- ✅ Fast loading (< 3 seconds)
- ✅ SEO optimized with proper meta tags
- ✅ Modern & minimal design
- ✅ Semantic HTML5 elements
- ✅ Smooth animations and transitions
- ✅ Dark mode support
- ✅ Accessibility features (ARIA, keyboard navigation, skip links)
- ✅ Contact form with client-side validation

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16.1.6
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Fonts**: Geist Sans & Geist Mono (optimized with next/font)

## 📄 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Home page with Hero & Contact sections
│   └── globals.css     # Global styles and Tailwind config
├── components/
│   ├── Header.tsx      # Fixed navigation header
│   ├── Footer.tsx      # Footer with links
│   └── forms/
│       └── ContactForm.tsx  # Client-side contact form
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind theme configuration
├── vercel.json        # Vercel deployment config
└── package.json       # Project dependencies
```
