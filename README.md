
# 🎟️ Tcket - Real-time Event Ticketing Platform

A **modern, real-time event ticketing platform** built with **Next.js 14, Convex, Clerk, and Stripe Connect**.  
Tcket provides a secure, scalable, and smooth ticketing experience for both **event attendees** and **organizers**, with advanced queue management, real-time updates, and seamless payments.  

---

## ✨ Features

### 🎫 For Event Attendees
- Real-time **ticket availability tracking**
- ⚡ **Smart queuing system** with live position updates
- ⏳ **Time-limited ticket offers**
- 📱 Mobile-friendly **digital tickets**
- 🔒 **Secure Stripe payments**
- 📲 Tickets with **QR codes**
- 💸 Automatic **refunds for cancelled events**

### 🎤 For Event Organizers
- 💰 Direct payouts via **Stripe Connect**
- 📊 Real-time **sales monitoring**
- 🎯 Automated **queue management**
- 📈 Built-in **event analytics**
- 🔄 Automatic **ticket recycling**
- 🎟️ **Customizable ticket limits**
- ❌ Event cancellation + bulk refunds

### ⚙️ Technical Features
- 🚀 **Real-time updates** powered by Convex
- 👤 **Authentication** with Clerk
- 💳 Payments via **Stripe Connect**
- 🌐 SSR + CSR with **Next.js 14**
- 🎨 **Tailwind CSS + shadcn/ui** components
- 📱 Fully **responsive design**
- 🛡️ **Rate limiting** for queues & purchases
- 🔒 Fraud detection & prevention
- 🔔 **Toast notifications** (Sonner)
- ✨ **Accessible components** with shadcn/ui

### 🎨 UI/UX Features
- 🎯 Instant feedback with toasts
- 🎭 Animated transitions
- 📱 Responsive across all devices
- 🔄 Smooth loading states
- 💫 Micro-interactions for engagement

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js **18+**
- npm / yarn
- Stripe account
- Clerk account
- Convex account

### ⚙️ Environment Variables
Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
````

### 📦 Installation

```bash
# Clone the repo
git clone https://github.com/devmique/ticket-marketplace-convex-clerk-stripe.git
cd ticket-marketplace-convex-clerk-stripe

# Install dependencies
npm install

# Start development server
npm run dev

# In a separate terminal, start Convex
npx convex dev
```

---

## 🔑 Setup Guides

### 🧑‍💻 Clerk (Authentication)

1. Create a Clerk app → [Clerk Dashboard](https://clerk.com)
2. Configure authentication providers (Google, GitHub, etc.)
3. Add redirect URLs (`http://localhost:3000`)
4. Add keys to `.env.local`

### 🗄️ Convex (Realtime Database & Backend)

1. Create an account → [Convex Dashboard](https://convex.dev)
2. Install CLI:

   ```bash
   npm install convex
   npx convex init
   ```
3. Copy your deployment URL → add to `.env.local`
4. Start dev server:

   ```bash
   npx convex dev
   ```

### 💳 Stripe (Payments)

1. Create a [Stripe account](https://stripe.com)
2. Enable **Stripe Connect**
3. Set up webhook endpoints:

   ```
   /api/webhooks/stripe
   ```
4. Add keys to `.env.local`

#### 🔗 Webhooks (Local Dev)

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe # macOS
scoop install stripe                  # Windows
sudo apt install stripe               # Linux

# Login
stripe login

# Forward events
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the `whsec_XXXXX` secret into `.env.local` as `STRIPE_WEBHOOK_SECRET`.

---

## 🎨 UI Components

We use **shadcn/ui** for consistent design.

```bash
# Initialize
npx shadcn-ui@latest init

# Add components
npx shadcn-ui@latest add toast button card dialog toaster
```

---

## 🏗️ Architecture

### 📂 Database Schema

* **Events**
* **Tickets**
* **Waiting List**
* **Users**

### 🔑 Key Components

* Real-time **queue management**
* Rate limiting & anti-fraud
* Automated **offer expiration**
* Secure payment flows
* User sync across client/server

---

## 📖 Usage

### 🎤 Creating an Event

1. Sign up as organizer
2. Complete Stripe Connect onboarding
3. Create event → set details & ticket quantity
4. Publish

### 🎫 Purchasing Tickets

1. Browse events
2. Join queue for desired event
3. Receive ticket offer
4. Complete payment within time limit
5. Access **digital ticket (QR code)**

---

