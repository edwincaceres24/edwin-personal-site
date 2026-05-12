# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export to /out (required before deploy)
npm run lint     # ESLint
```

## Architecture

Single-page portfolio site for Edwin Caceres. Built with Next.js 16 (App Router) + Tailwind CSS v4, configured for **static export** (`output: 'export'` in `next.config.ts`) targeting GitHub Pages. Build output goes to `/out`.

**Key constraint:** Static export disables Server Actions, cookies, headers, rewrites, and the default Image Optimization loader. `next/image` uses `unoptimized: true`.

### Component structure

All UI lives in `app/components/`. The page is a single scroll with anchor-linked sections:

- `ThemeProvider` — client component managing dark/light toggle via `localStorage` + `document.documentElement.classList`. Provides `useTheme()` context.
- `Navbar` — fixed header with smooth-scroll nav links and theme toggle button.
- `Hero` → `Services` → `Projects` → `Companies` → `Contact` — one section per component, composed in `app/page.tsx`.
- `Footer` — social/email links.

### Dark mode

Tailwind v4 class-based dark mode is configured in `globals.css` via `@custom-variant dark (&:where(.dark, .dark *))`. The `dark` class is toggled on `<html>` by `ThemeProvider`. `<html>` uses `suppressHydrationWarning` to avoid mismatch on initial render.

### Contact form

Uses `mailto:` — clicking Submit opens the user's email client pre-filled. No backend required. To switch to a real form backend (e.g. Formspree), replace the `handleSubmit` in `app/components/Contact.tsx`.

## Deployment

GitHub Pages serves the `/out` folder. A typical GitHub Actions workflow:

```yaml
- run: npm ci && npm run build
- uses: actions/upload-pages-artifact@v3
  with:
    path: out
```

If the site is served from a subdirectory (e.g. `username.github.io/edwebsite`), set `basePath: '/edwebsite'` in `next.config.ts`.
