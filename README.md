# ScienceFair Period Calculator

An Ionic 3 (Angular 5) app built for a science fair project to provide a clean, mobile-style period calculator experience in the browser.

## What it does
- Presents an iOS-inspired layout with a slide-out menu and a focused home screen.
- Shows project info and imagery tailored for the science fair presentation.
- Runs in the browser via Ionic Lab for quick device-style previews.

## Tech stack
- Ionic 3.9 (ionic-angular) with Angular 5
- ionic-app-scripts (patched to use dart-sass)
- Sass styles (dart-sass), TypeScript

## Getting started
Prereqs: Node 18+, npm. The dependencies are older, so use legacy peer handling.

```bash
npm install --legacy-peer-deps
npm start -- --lab   # Lab view (device frames). Use `npm start` for the default view.
```
- Lab opens at http://localhost:8200 (and http://localhost:8101 for the app view).
- If you re-install dependencies, ensure `sass` is present; the build is configured to prefer dart-sass instead of node-sass.

## 2026 update
- This project won the schoolwide science fair and advanced to regionals in 2019. We got sent to Passadena, was my first time there!

## Release tagging
- Current tag: v0.1.0 (first snapshot after the Sass migration and UI polish).
