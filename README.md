# Lumedia Technologies website

The Lumedia Technologies website is a responsive single-page application built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Main routes

- `/` — Home
- `/services` — Service overview
- `/about` — About Lumedia
- `/training` — Creator School
- `/contact` — Project inquiry

The contact form opens a prefilled email draft addressed to `info@lumediatechnologies.com`. The visitor must send the message from their email app. No server-side form delivery, CRM, newsletter signup, or payment workflow is configured in this project.

## Deployment

Deploy the generated `dist/` directory to a static hosting provider configured to serve `index.html` for application routes. Connect the `lumediatechnologies.com` domain through the chosen hosting provider and verify DNS and HTTPS there.

## Before launch

- Confirm the public business email and all contact details.
- Supply approved project samples, case studies, and any authorized testimonials or client marks.
- Confirm business claims and service availability.
- Configure and test server-side inquiry delivery if inquiries should reach a CRM or inbox without using the visitor's email app.
- Replace the Open Graph preview image with an approved share image when available.
