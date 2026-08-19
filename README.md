# Graham Press — Vercel-ready website

This is the complete production codebase for the Graham Press website concept.
It uses Next.js and is ready to deploy through GitHub and Vercel.

## Deploy through GitHub

1. Create a new empty GitHub repository.
2. Upload everything inside this folder to the repository.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected **Next.js** settings and select **Deploy**.

No environment variables or database are required.

## Add your domain

After deployment, open the project in Vercel and select:

**Settings → Domains → Add**

Enter the domain you own and follow the DNS instructions Vercel supplies.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Important before using it as the live business website

- Replace all concept/example prices with figures confirmed by Graham Press.
- Confirm the telephone number, email address and opening hours.
- Remove the “Website concept” notice when Graham Press approves the final site.
