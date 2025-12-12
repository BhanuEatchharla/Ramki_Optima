# OPTIMA (Next.js 15 + TypeScript + TailwindCSS)

This is a migration of your Vite React app to Next.js App Router.

## Quickstart
```bash
pnpm i   # or npm i / bun i / yarn
pnpm dev # http://localhost:3000
```

## What's included
- Next.js 15 (App Router)
- TypeScript strict
- TailwindCSS 3.4 (same design tokens, animations)
- shadcn/ui components (copied)
- React Query provider
- ThemeProvider + tooltips + toasters in `app/providers.tsx`
- Metadata moved to `app/layout.tsx`

## Project layout
- `app/` – routes, `page.tsx`, `layout.tsx`, `not-found.tsx`, global CSS
- `src/components/` – your components (unchanged)
- `src/lib/` – utilities and ThemeProvider
- `src/hooks/` – hooks
- `public/` – assets
```