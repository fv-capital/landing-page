# FV Capital Landing Page

A modern, professional landing page for FV Capital - a crypto momentum quant trading firm.

## Features

- **Modern Design**: Clean, professional design optimized for financial services
- **Internationalization**: Full support for English and Traditional Chinese (zh-TW)
- **Dark Mode**: Professional dark theme optimized for data visualization
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth Framer Motion animations throughout
- **TypeScript**: Fully typed with TypeScript for better developer experience

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **i18next**: Internationalization framework
- **Radix UI**: Accessible component primitives

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── team/           # Team page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # UI components
│   └── ...
├── lib/               # Utility functions
│   └── i18n/          # i18n configuration
├── locales/           # Translation files
│   ├── en/            # English translations
│   └── zh-TW/         # Traditional Chinese translations
└── public/            # Static assets
```

## Customization

### Colors

The color theme uses a professional slate blue palette optimized for quantitative finance. Colors are defined in `app/globals.css` using OKLCH color space for better perceptual uniformity.

### Content

All content is managed through translation files in `locales/` directory:
- `locales/en/translation.json` - English content
- `locales/zh-TW/translation.json` - Traditional Chinese content

## Building for Production

```bash
npm run build
```

## License

© 2026 FV Capital. All rights reserved.
