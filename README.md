NovaDraft — AI-Powered Writing & Image Suite

Author: Maaz Ansari
Email: maazansari25667@gmail.com

GitHub: https://github.com/AnsariTech-25667

NovaDraft is a full-stack AI productivity platform engineered to supercharge content creation and media workflows. It unifies AI-powered writing, image generation, background/object removal, resume intelligence, and publishing workflows into one cohesive SaaS-ready platform.

Architected with scalability, modularity, and modern SaaS principles, NovaDraft demonstrates how to integrate LLMs, serverless databases, secure authentication, and cloud media pipelines into a production-grade AI application.

🚀 Product Overview

NovaDraft empowers:

✍️ Content creators

📈 Marketing teams

💼 Job seekers

🚀 Startups & founders

To generate professional-grade text and visuals without switching tools.

🖥 UI Showcase
🔹 Writing Workspace

A clean, distraction-free AI writing environment with contextual generation tools and structured formatting.

🔹 Editor Interface

Precision editing layer with structured formatting controls and optimized document rendering.

🔹 Command Palette

Keyboard-first navigation system for instant AI commands and rapid workspace control.

🔹 Workspace Settings

Granular control over environment preferences, usage limits, and account configurations.

🔹 Setup Flow

Guided onboarding experience for secure AI workspace configuration.

🔹 Activity Dashboard

Centralized activity monitoring for document history and AI interaction tracking.

🔹 Export & Publish

Flexible export options with multi-format publishing capabilities.

🔹 Export & Publish (Detailed View)

Advanced publishing configurations with access controls and distribution settings.

🏗 System Architecture

NovaDraft follows a modular SaaS architecture:

Client (React + Vite)
        ↓
API Layer (Express 5)
        ↓
Neon (PostgreSQL)
        ↓
LLM Services (Text + Image)
        ↓
Cloudinary Media Pipeline

📊 Architecture Diagram

Architecture Principles

Stateless APIs

Serverless database scaling

CDN-accelerated media delivery

Plan-aware AI usage enforcement

Modular service separation

Scalable. Secure. SaaS-production ready.

⚡ Performance & Scaling

NovaDraft is engineered for cost-efficient scalability:

Serverless Neon DB → Handles high concurrency

Stateless Express APIs → Horizontal scaling ready

Cloudinary CDN → Global media optimization

Plan-based rate limits → AI cost control

Optimized frontend bundles → Vite + Tailwind minimal payload

Token-efficient prompts → Predictable AI billing

The architecture is Stripe-compatible and billing-ready.

🛠 Tech Stack
Frontend

React

Vite

TailwindCSS

Backend

Node.js (>=18)

Express 5

Database

Neon (Serverless PostgreSQL)

AI Models

gemini-2.0-flash (text generation)

gpt-image-1 (image generation & editing)

Cloud Infrastructure

Cloudinary (media storage + transformation CDN)

Authentication

Clerk (secure sessions + subscription enforcement)

🧪 Local Setup
Prerequisites

Node.js >= 18

Neon DATABASE_URL

Clerk API keys

Cloudinary credentials

LLM API key

Clone Repository
git clone https://github.com/AnsariTech-25667/NovaDraft.git

Backend Setup
cd NovaDraft/server
npm install
npm run dev

Frontend Setup
cd ../client
npm install
npm run dev


Frontend runs on:

http://localhost:5173
