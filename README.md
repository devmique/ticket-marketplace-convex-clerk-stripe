Got it — you want a **README.md** that follows the exact style and section breakdown you posted.
Here’s the cleaned-up, ready-to-use version:

````markdown
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
````

---

## Installation

```bash
# Clone the repository
git clone https://github.com/sonnysangha/ticket-marketplace-saas-nextjs15-convex-clerk-stripe-connect

# Install dependencies
npm install

# Start the development server
npm run dev

# In a separate terminal, start Convex
npx convex dev
```

---

## Setting up Clerk

1. Create a Clerk application **[Click here](https://clerk.com/)**.
2. Configure authentication providers.
3. Set up redirect URLs.
4. Add environment variables from Clerk to `.env.local`.

---

## Setting up Convex

1. Create a Convex account **[Click here](https://convex.dev/)**.
2. Create a new project.
3. Install the Convex CLI:

   ```bash
   npm install convex
   ```
4. Initialize Convex in your project:

   ```bash
   npx convex init
   ```
5. Copy your deployment URL from the Convex dashboard and add it to `.env.local`:

   ```env
   NEXT_PUBLIC_CONVEX_URL=your_deployment_url
   ```
6. Start the Convex development server:

   ```bash
   npx convex dev
   ```

> **Note:** Keep the Convex development server running while working. It will sync your backend functions and database schema automatically.

---

## Setting up Stripe

1. Create a **[Stripe account](https://stripe.com/)**.
2. Enable **Stripe Connect**.
3. Set up webhook endpoints.
4. Configure payment settings.

---

## Setting up Stripe Webhooks for Local Development

### Install the Stripe CLI:

**macOS**

```bash
brew install stripe/stripe-cli/stripe
```

**Windows (using scoop)**

```bash
scoop install stripe
```

**Linux**

```bash
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
sudo apt update
sudo apt install stripe
```

### Login to Stripe CLI:

```bash
stripe login
```

### Start webhook forwarding:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the webhook signing secret displayed after running the command and add it to `.env.local`:

```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

> Keep the webhook forwarding running while testing payments locally.
> Make sure `/api/webhooks/stripe` is properly configured to handle incoming webhook events.

---

## Setting up UI Components

1. Install **shadcn/ui** CLI:

   ```bash
   npx shadcn-ui@latest init
   ```
2. Install required components:

   ```bash
   npx shadcn-ui@latest add toast
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   npx shadcn-ui@latest add dialog
   ```
3. Configure toast notifications in your layout:

   ```bash
   npx shadcn-ui@latest add toaster
   ```

```

If you want, I can also make a **more polished GitHub-ready README** with badges, screenshots, and a project description so it looks professional. That would make it stand out a lot more.
```

