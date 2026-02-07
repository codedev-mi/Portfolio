# Portfolio Deployment Guide

## Prerequisites
- Node.js installed
- GitHub account
- Git installed

## Setup Instructions

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the site.

3.  **Build for Production**
    ```bash
    npm run build
    ```
    The output will be in the `dist` folder.

## Deployment to Vercel (Recommended)

1.  **Push to GitHub**
    - Initialize git: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a new repo on GitHub and follow instructions to push.

2.  **Deploy on Vercel**
    - Go to [Vercel](https://vercel.com) and sign up/login.
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
    - Framework Preset: **Vite**.
    - Click **Deploy**.

## Deployment to Netlify

1.  **Push to GitHub** (same as above).

2.  **Deploy on Netlify**
    - Go to [Netlify](https://netlify.com).
    - Click **"Add new site"** -> **"Import from existing project"**.
    - Connect GitHub and select your repository.
    - **Build Command:** `npm run build`
    - **Publish Directory:** `dist`
    - Click **Deploy site**.

## Customization

- **Resume:** Place your actual PDF resume in the `public` folder and rename it to `resume.pdf`.
- **Images:** Add project images to `src/assets` or `public` and update the `src` paths in components.
- **Content:** Edit the data arrays in `src/components/*.jsx` to update your information.
