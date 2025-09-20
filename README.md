# NovaDraft — AI-Powered Writing & Image Suite  
**Author:** Maaz Ansari — [maazansari25667@gmail.com](mailto:maazansari25667@gmail.com)  
**GitHub:** [https://github.com/AnsariTech-25667](https://github.com/AnsariTech-25667)  

NovaDraft is a full-stack AI productivity platform designed to supercharge content creation and media workflows. It unifies **AI text generation, image creation, background/object removal, and resume reviews** into one cohesive suite. Architected with scalability and developer best practices, NovaDraft demonstrates how to integrate **modern LLMs, serverless databases, and cloud media pipelines** into a production-grade SaaS application.  

---

## Project Motivation / Problem Statement  
Content creators, job seekers, and small businesses often struggle with producing high-quality blogs, resumes, and visuals quickly. Traditional workflows are fragmented — requiring multiple tools and significant time.  

NovaDraft solves this by providing a single platform where users can:  

- Generate blog titles and long-form articles in seconds.  
- Create marketing images or product visuals without design skills.  
- Instantly clean up images (background/object removal).  
- Get AI-powered resume feedback to improve job prospects.  

This project proves how **AI + full-stack engineering** can eliminate bottlenecks and empower users to focus on creativity, not technical overhead.  

---

## Key Features & Benefits  
- **Smart AI Writing Tools**: Blog titles, articles, and resume reviews via Gemini-style LLMs.  
- **AI Image Powerhouse**: Generate (`gpt-image-1`), edit, and transform images seamlessly.  
- **Persistent History & Analytics**: Creations stored in Neon (Postgres) with metadata.  
- **Plan-Aware Limits**: Built-in monetization hooks for SaaS readiness.  
- **Authentication First**: Clerk ensures secure, production-ready login.  
- **End-to-End Ownership**: Designed and developed entirely by **Maaz Ansari**.  

---

## Tech Stack & Why  

- **Frontend**: React + Vite → optimized dev + builds. TailwindCSS → utility-first design system.  
- **Backend**: Node.js (>=18) + Express 5 → lightweight and modular for real-time AI calls.  
- **Database**: Neon (serverless PostgreSQL) → infinite scaling, zero DevOps.  
- **AI Models**: OpenAI client configured for `gemini-2.0-flash` (text) + `gpt-image-1` (image).  
- **Cloud Media**: Cloudinary for storage, background/object editing, CDN delivery.  
- **Auth**: Clerk → secure sessions and plan enforcement.  
- **Other Libraries**: `axios`, `pdf-parse`, `multer`.  

---

## System Design  
NovaDraft is built as a layered, modular system:  

**Client (React) → API Layer (Express) → Database (Neon) + AI Models + Cloudinary**  

- **Frontend**: React/Vite client handles UI and secure auth flows.  
- **API Layer**: Express routes proxy LLM requests, enforce plan limits, and persist results.  
- **Database**: Neon/Postgres stores prompts, outputs, and metadata.  
- **Media Layer**: Cloudinary processes uploads and serves optimized media globally.  
- **Auth**: Clerk ensures only authenticated, plan-verified users access endpoints.  

This architecture is scalable, secure, and cloud-ready, making NovaDraft more than a demo — **it’s SaaS-production capable.**  

### 📊 Architecture Diagram  
![NovaDraft System Design](https://github.com/AnsariTech-25667/NovaDraft/blob/main/system-design.png?raw=true)  

---

## Performance & Scaling  
From the codebase, NovaDraft is tuned for cost-efficient performance:  

- **Serverless DB (Neon)** → Handles concurrency without connection issues.  
- **Cloudinary CDN** → Global caching + edge transformations reduce latency.  
- **Stateless APIs** → Backend can horizontally scale across Node.js instances.  
- **Rate Limits** → Plan-based checks prevent abuse and control API spend.  
- **Optimized Bundles** → Vite + Tailwind ensure minimal frontend payload.  
- **AI Efficiency** → Prompts and token sizes tuned to keep costs predictable.  

⚠️ **Caution**: Heavy free usage can spike AI costs — but the project already includes free/premium gating, making it SaaS-ready for billing providers like Stripe.  

---

## Environment & Run Instructions  

### Prereqs  
- Node.js >= 18  
- Yarn or npm  
- Neon/Postgres `DATABASE_URL`  
- Clerk keys  
- Cloudinary keys  
- LLM API key (`OPENAI_API_KEY` / `GEMINI_API_KEY`)  

### Setup  

```bash
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
