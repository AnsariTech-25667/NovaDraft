// server/index.js
// Express 5 ESM server for NovaDraft

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import { v2 as cloudinary } from 'cloudinary';
import OpenAI from 'openai';
import { requireAuth } from '@clerk/express'; // ✅ fixed import

// tiny dev logger
import { log } from './utils/log.js';

// ----- App & Config -----
const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Cloudinary (optional)
if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}

// Multer in-memory for small uploads (PDFs, images)
const upload = multer({ storage: multer.memoryStorage() });

// ----- Middleware -----
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  })
);
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// helpers
const assertEnv = key => {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
};

// Only require auth if CLERK_SECRET_KEY is set
const maybeAuth = (req, res, next) => {
  if (process.env.CLERK_SECRET_KEY) {
    return requireAuth()(req, res, next); // ✅ fixed guard
  }
  return next();
};

// ----- Routes -----

// Health check
app.get('/healthz', (_req, res) => {
  res.json({ ok: true, service: 'novadraft', time: new Date().toISOString() });
});

// Generate text (chat completion)
app.post('/api/generate-text', maybeAuth, async (req, res, next) => {
  try {
    assertEnv('OPENAI_API_KEY');
    const { prompt, model } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'prompt is required (string)' });
    }

    const useModel = model || 'gpt-4o-mini';

    const completion = await openai.chat.completions.create({
      model: useModel,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.4
    });

    const text = completion.choices?.[0]?.message?.content ?? '';
    res.json({ model: useModel, text });
  } catch (err) {
    next(err);
  }
});

// Generate image
app.post('/api/generate-image', maybeAuth, async (req, res, next) => {
  try {
    assertEnv('OPENAI_API_KEY');
    const { prompt, size } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'prompt is required (string)' });
    }

    const image = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      size: size || '1024x1024'
    });

    const data = image.data?.[0];
    if (!data?.url && !data?.b64_json) {
      return res.status(500).json({ error: 'image generation failed' });
    }

    res.json({
      url: data.url || null,
      b64: data.b64_json || null
    });
  } catch (err) {
    next(err);
  }
});

// Summarize PDF (upload field name: "file")
app.post('/api/summarize-pdf', maybeAuth, upload.single('file'), async (req, res, next) => {
  try {
    assertEnv('OPENAI_API_KEY');

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded (expect form field "file")' });
    }

    const parsed = await pdfParse(req.file.buffer);
    const rawText = (parsed.text || '').trim();

    if (!rawText) {
      return res.status(400).json({ error: 'Could not extract text from PDF' });
    }

    const maxChars = 12000;
    const slice = rawText.length > maxChars ? rawText.slice(0, maxChars) : rawText;

    const prompt = `Summarize the following PDF text into concise bullet points with clear sections for Overview, Key Points, and Action Items. Keep it under 200 words, and preserve any numerical data if present:\n\n${slice}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    });

    const summary = completion.choices?.[0]?.message?.content ?? '';
    res.json({ summary, truncated: rawText.length > maxChars });
  } catch (err) {
    next(err);
  }
});

// Upload image to Cloudinary (optional) — field: "image"
app.post('/api/upload-image', maybeAuth, upload.single('image'), async (req, res, next) => {
  try {
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      return res.status(400).json({ error: 'Cloudinary not configured' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded (expect form field "image")' });
    }

    const b64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    const result = await cloudinary.uploader.upload(b64, { folder: 'novadraft' });
    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (err) {
    next(err);
  }
});

// ----- Error handler -----
app.use((err, _req, res, _next) => {
  console.error('[novadraft] error:', err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  });
});

// ----- Boot -----
app.listen(PORT, () => {
  log(`Server listening on http://localhost:${PORT}`);
});
