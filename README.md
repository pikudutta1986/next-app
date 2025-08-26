This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Core fetures in this repo:
1. Login / Sign up using firebase authentication using Google / Facebook and store users in Firestore.
2. Product module to store products in mysql db.
3. Remove image background using a AWS Lambda function.
4. Store product images on S3.
5. Inventory (quantity with price) management mysql db.
6. Order management Mongo DB
7. Use payment micro services with Flusk API and stripe.