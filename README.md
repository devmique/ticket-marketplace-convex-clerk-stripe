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
bash
Copy code
# Clone the repository
git clone https://github.com/sonnysangha/ticket-marketplace-saas-nextjs15-convex-clerk-stripe-connect

# Install dependencies
npm install

# Start the development server
npm run dev

# In a separate terminal, start Convex
npx convex dev
Setting up Clerk
Create a Clerk application Click here.

Configure authentication providers.

Set up redirect URLs.

Add environment variables from Clerk to .env.local.

Setting up Convex
Create a Convex account Click here.

Create a new project.

Install the Convex CLI:

bash
Copy code
npm install convex
Initialize Convex in your project:

bash
Copy code
npx convex init
Copy your deployment URL from the Convex dashboard and add it to .env.local:

env
Copy code
NEXT_PUBLIC_CONVEX_URL=your_deployment_url
Start the Convex development server:

bash
Copy code
npx convex dev
Note: Keep the Convex development server running while working. It will sync your backend functions and database schema automatically.

Setting up Stripe
Create a Stripe account.

Enable Stripe Connect.

Set up webhook endpoints.

Configure payment settings.

Setting up Stripe Webhooks for Local Development
Install the Stripe CLI:
macOS

bash
Copy code
brew install stripe/stripe-cli/stripe
Windows (using scoop)

bash
Copy code
scoop install stripe
Linux

bash
Copy code
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public | gpg --dearmor | sudo tee /usr/share/keyrings/stripe.gpg
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] https://packages.stripe.dev/stripe-cli-debian-local stable main" | sudo tee -a /etc/apt/sources.list.d/stripe.list
sudo apt update
sudo apt install stripe
Login to Stripe CLI:
bash
Copy code
stripe login
Start webhook forwarding:
bash
Copy code
stripe listen --forward-to localhost:3000/api/webhooks/stripe
Copy the webhook signing secret displayed after running the command and add it to .env.local:

env
Copy code
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
Keep the webhook forwarding running while testing payments locally.
Make sure /api/webhooks/stripe is properly configured to handle incoming webhook events.

Setting up UI Components
Install shadcn/ui CLI:

bash
Copy code
npx shadcn-ui@latest init
Install required components:

bash
Copy code
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
Configure toast notifications in your layout:

bash
Copy code
npx shadcn-ui@latest add toaster
