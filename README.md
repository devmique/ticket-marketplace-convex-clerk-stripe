# Getting Started

## Prerequisites
- **Node.js** 18+
- **npm** or **yarn**
- **Stripe Account**
- **Clerk Account**
- **Convex Account**

---

## Environment Variables
Create a `.env.local` file with:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

Installation

# Install dependencies
npm install

# Start the development server
npm run dev

# In a separate terminal, start Convex
npx convex dev

