NovaDraft — AI-Powered Writing & Image Suite

Author: Maaz Ansari — maazansari25667@gmail.com

GitHub: https://github.com/AnsariTech-25667

NovaDraft is a full-stack AI productivity platform designed to supercharge content creation and media workflows. It unifies AI text generation, image creation, background/object removal, resume reviews, and export workflows into one cohesive suite.

Architected with scalability and modern SaaS best practices, NovaDraft demonstrates how to integrate LLMs, serverless databases, cloud media pipelines, and authentication layers into a production-ready AI platform.

🚀 Product Overview

NovaDraft empowers:

Content creators

Marketers

Job seekers

Indie founders

Small businesses

To generate high-quality text and visuals — without switching tools.

🧠 Project Motivation / Problem Statement

Content creators and professionals often struggle with fragmented workflows:

Writing tools separate from image tools

Resume analyzers separate from content platforms

Multiple subscriptions and disconnected data

NovaDraft solves this by centralizing everything into one AI-native workspace.

Users can:

Generate blog titles and long-form articles instantly

Create marketing images without design expertise

Remove backgrounds or objects from images

Receive AI-powered resume feedback

Export and publish directly

This project demonstrates how AI + full-stack engineering eliminates friction and boosts productivity.

✨ Key Features & Benefits

Smart AI Writing Tools – Blog titles, articles, resume reviews via modern LLMs

AI Image Powerhouse – Generate (gpt-image-1), edit, and transform images

Persistent History & Analytics – Stored securely in Neon (Postgres)

Plan-Aware Limits – SaaS monetization hooks built-in

Secure Authentication – Clerk-managed sessions

Cloud Media Pipeline – Cloudinary CDN optimization

Full SaaS Architecture – Scalable, production-ready system

🖥 UI Showcase
🔹 Writing Workspace

Modern distraction-free editor with AI-assisted writing, generation tools, and workspace layout.

🔹 AI Editor Interface

Clean, modular editing environment with real-time AI responses.

🔹 Command Palette

Power-user command interface for fast navigation and tool access.

🔹 Workspace Settings

User-level configuration for plan limits, preferences, and environment customization.

🔹 Setup Flow

Onboarding and environment configuration for secure AI usage.

🔹 Activity Dashboard

Track generated content, images, and usage history in a centralized dashboard.

🔹 Export & Publish

Seamless export workflow for publishing content.

🔹 Export Workflow (Advanced View)

Enhanced publishing options and structured output management.

🏗 System Design

NovaDraft follows a layered, modular SaaS architecture:

Client (React) → API Layer (Express) → Neon (Postgres) + LLM Models + Cloudinary

Architecture Diagram

Layer Breakdown

Frontend (React + Vite)
Handles UI, state management, and Clerk auth flows.

API Layer (Express 5)
Proxies LLM requests, enforces plan limits, logs activity.

Database (Neon PostgreSQL)
Stores prompts, outputs, metadata, usage history.

Media Layer (Cloudinary)
Upload handling, transformations, CDN delivery.

Authentication (Clerk)
Secure session management and subscription enforcement.

This makes NovaDraft:

Horizontally scalable

Cloud-native

Secure

Monetization-ready

⚡ Performance & Scaling

NovaDraft is engineered for cost-efficient performance:

Serverless Neon DB → Handles high concurrency without connection pooling headaches

Cloudinary CDN → Edge caching + transformation acceleration

Stateless Express APIs → Horizontal scaling ready

Plan-Based Rate Limiting → Prevents AI cost spikes

Optimized Frontend Bundles → Vite + Tailwind minimal payload

Token-Efficient Prompts → Controlled AI spend

⚠️ Heavy free usage can spike AI costs — but the architecture already supports billing integrations (e.g., Stripe).

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

AI

OpenAI client configured for:

gemini-2.0-flash (text)

gpt-image-1 (image)

Cloud

Cloudinary (image hosting + transformations)

Auth

Clerk

Utilities

axios

pdf-parse

multer

🧪 Environment & Run Instructions
Prerequisites

Node.js >= 18

Yarn or npm

Neon/Postgres DATABASE_URL

Clerk keys

Cloudinary keys

LLM API key (OPENAI_API_KEY / GEMINI_API_KEY)

Setup
# Clone repo
git clone https://github.com/AnsariTech-25667/NovaDraft.git

# Backend
cd NovaDraft/server
cp .env.example .env
npm install
npm run dev

# Frontend
cd ../client
cp .env.example .env
npm install
npm run dev


Open:

http://localhost:5173

📦 Deployment

NovaDraft is:

Serverless-ready

CI/CD friendly

Vercel / Render / Railway compatible

Cloud-native by design

📄 License

MIT License
