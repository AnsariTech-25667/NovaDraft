NovaDraft — AI-Powered Writing & Image Suite

Author: Maaz Ansari — maazansari25667@gmail.com

GitHub: https://github.com/AnsariTech-25667

NovaDraft is a full-stack AI productivity platform designed to supercharge content creation and media workflows. It unifies AI text generation, image creation, background/object removal, resume reviews, and export workflows into one cohesive suite.

Architected with scalability and modern SaaS best practices, NovaDraft demonstrates how to integrate LLMs, serverless databases, and cloud media pipelines into a production-grade AI application.

🚀 Product Overview

NovaDraft empowers creators, marketers, job seekers, and teams to generate high-quality content and visuals without switching between tools.

🖥 UI Showcase
🔹 Writing Workspace

🔹 Editor Interface

🔹 Command Palette

🔹 Workspace Settings

🔹 Setup Flow

🔹 Activity Dashboard

🔹 Export & Publish

🔹 Export & Publish (Detailed View)

🏗 System Design

NovaDraft follows a layered architecture:

Client (React) → API Layer (Express) → Neon (Postgres) + LLM + Cloudinary

Scalable. Stateless. SaaS-ready.

⚡ Performance & Scaling

Serverless Neon handles concurrency

Cloudinary CDN reduces latency

Stateless Express APIs scale horizontally

Plan-based limits prevent AI cost spikes

Optimized frontend bundles (Vite + Tailwind)

🛠 Tech Stack

Frontend
React + Vite + TailwindCSS

Backend
Node.js (>=18) + Express 5

Database
Neon (Serverless PostgreSQL)

AI
gemini-2.0-flash (text)
gpt-image-1 (image)

Cloud
Cloudinary

Auth
Clerk

🧪 Setup
git clone https://github.com/AnsariTech-25667/NovaDraft.git

cd NovaDraft/server
npm install
npm run dev

cd ../client
npm install
npm run dev
