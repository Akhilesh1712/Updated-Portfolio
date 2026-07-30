# Akhilesh Kumar — AI & Software Engineer

A cinematic, responsive engineering portfolio focused on production AI, agentic systems, backend development, GIS, and award-winning product work.

The experience combines editorial typography, interactive project case studies, a real-time WebGL neural field, smooth motion, and a structured record of professional achievements.

## Highlights

- Interactive AI-focused hero and neural-field experience
- Professional profile with an original cinematic portrait
- Expandable work history and Amantya recognition certificates
- Four custom-built project case studies:
  - AI Genie
  - Crypto Night
  - Vision S Software
  - Twetterix
- Ranked hackathon and award journey with original event media
- Fully responsive desktop, tablet, and mobile layouts
- Accessible navigation, keyboard states, reduced-motion support, and semantic content
- Working contact form with validation, spam protection, delivery feedback, and direct-email fallback
- Dynamic Open Graph image, sitemap, robots metadata, and structured person data

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, custom responsive CSS |
| Motion | GSAP, Motion, Lenis, SplitType |
| 3D | React Three Fiber, Three.js, Drei |
| Forms | React Hook Form, Zod |
| State | Zustand |
| UI | Base UI, Lucide React |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

Create a local environment file:

```bash
copy .env.example .env.local
```

On macOS or Linux:

```bash
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical URL used for metadata, `robots.txt`, and `sitemap.xml`.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run check` | Run lint, type-check, and the production build |

## Project Structure

```text
app/                 Next.js routes, metadata, and global styles
components/          Shared UI, motion, WebGL, and project visuals
lib/                 Portfolio content and site configuration
public/              Profile, certificate, and achievement media
sections/            Page sections such as About, Projects, and Contact
store/               Lightweight global UI state
```

Most portfolio content—including profile details, experience, projects, links, skills, and achievements—is maintained in:

```text
lib/portfolio-data.ts
```

## Contact Form

The contact form sends enquiries to `akhileshkr17122002@gmail.com` through FormSubmit and uses the visitor’s email as the reply address.

FormSubmit requires a one-time inbox confirmation for a new destination address. Submit the form once after deployment, open the activation email sent to the portfolio owner, and confirm it before accepting public enquiries.

## Deployment

The app can be deployed to any platform that supports Next.js.

Before deploying:

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS URL.
2. Run `npm run build`.
3. Submit the live contact form once and complete the FormSubmit email activation.

## Author

**Akhilesh Kumar**

- [GitHub](https://github.com/Akhilesh1712)
- [LinkedIn](https://www.linkedin.com/in/akhilesh-kumar-7a6857248/)
- [LeetCode](https://leetcode.com/u/akhileshkr17122002/)
- [Résumé](https://drive.google.com/file/d/1UFtTeYujAxLqCEIunk7p6u5iBBBixXZ8/view?usp=drivesdk)

## License

The source code and personal media in this repository are © Akhilesh Kumar. All rights reserved unless a separate license is added.
