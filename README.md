NovaDraft — AI-Powered Writing & Image Suite

Author: Maaz Ansari — maazansari25667@gmail.com

GitHub: https://github.com/AnsariTech-25667

NovaDraft is a full-stack AI productivity platform designed to supercharge content creation and media workflows. It unifies AI text generation, image creation, background/object removal, resume reviews, and export workflows into one cohesive suite.

Architected with scalability and modern SaaS best practices, NovaDraft demonstrates how to integrate LLMs, serverless databases, and cloud media pipelines into a production-grade AI application.

🚀 Product Overview

NovaDraft empowers:

Content creators

Marketers

Job seekers

Indie founders

Small businesses

To generate high-quality text and visuals — without switching between tools.

🧠 Project Motivation / Problem Statement

Content workflows are fragmented:

Writing tools separate from image tools

Resume analyzers separate from content platforms

Multiple subscriptions and disconnected data

NovaDraft centralizes everything into one AI-native workspace.

Users can:

Generate blog titles and long-form articles instantly

Create marketing visuals without design skills

Remove backgrounds or objects from images

Get AI-powered resume feedback

Export and publish directly

This project proves how AI + full-stack engineering removes friction and increases productivity.

✨ Key Features & Benefits

Smart AI Writing Tools (blog, articles, resume review)

AI Image Generation & Editing (gpt-image-1)

Persistent History via Neon PostgreSQL

Plan-Based Usage Limits (SaaS ready)

Clerk Authentication

Cloudinary CDN Media Pipeline

Scalable Express API architecture

🖥 UI Showcase
🔹 Writing Workspace

🔹 Editor Interface

🔹 Command Palette

🔹 Workspace Settings

🔹 Setup Page

🔹 Activity Dashboard

🔹 Export & Publish

⚠️ This filename contains &, so it must be encoded as %26.

🔹 Export Workflow (Advanced View)

🏗 System Design

NovaDraft follows a layered architecture:

Client (React) → API Layer (Express) → Neon (Postgres) + LLM + Cloudinary

Architecture Diagram

Layer Breakdown

React + Vite frontend

Express 5 backend

Neon serverless PostgreSQL

Cloudinary media pipeline

Clerk authentication

LLM integration (text + image)

Scalable. Stateless. Cloud-ready.

⚡ Performance & Scaling

Serverless Neon DB handles concurrency

Cloudinary CDN reduces global latency

Stateless APIs scale horizontally

Plan-based rate limiting controls AI cost

Vite bundling minimizes frontend payload

Token-efficient prompts reduce spend

The system is SaaS-ready and billing-compatible (Stripe-ready architecture).

🛠 Tech Stack

Frontend

React

Vite

TailwindCSS

Backend

Node.js (>=18)

Express 5

Database

Neon PostgreSQL

AI

gemini-2.0-flash (text)

gpt-image-1 (image)

Cloud

Cloudinary

Auth

Clerk

Utilities

axios

pdf-parse

multer

🧪 Environment & Run Instructions
Prerequisites

Node.js >= 18

Neon/Postgres DATABASE_URL

Clerk keys

Cloudinary keys

OPENAI_API_KEY or GEMINI_API_KEY

Setup
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


Frontend runs on:

http://localhost:5173

📄 License

MIT License
