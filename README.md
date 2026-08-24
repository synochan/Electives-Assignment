# Pulse Fitness Coach

**Name:** Christian  
**Section:** 4th Year  
**Date:** August 24, 2026

Pulse is a human-centered fitness dashboard that adjusts a suggested workout to the person using it. It is designed around the idea that consistency comes from listening to your body, not forcing the same plan every day.

## Adaptive Rules

**Rule 1: If the user reports low energy, then recommend a gentle, shorter reset session.**  
This lowers the barrier to starting and helps the user maintain their movement streak without treating a low-energy day as a failure.

**Rule 2: If the user reports high soreness, then shift the recommendation to recovery-focused movement.**  
This protects the user from pushing through pain while still offering a useful next step, which makes the experience feel personal and supportive rather than restrictive.

The app combines the energy check-in with a five-point soreness slider. The recommendation, session length, tag, and coach message update immediately as the user answers. The start button gives clear feedback when the user commits to a plan.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

To verify a production build:

```bash
npm run lint
npm run build
```
