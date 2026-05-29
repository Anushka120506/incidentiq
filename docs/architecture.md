# IncidentIQ Architecture

## Overview

IncidentIQ is an AI-powered incident intelligence platform that helps engineering teams detect incidents, analyze infrastructure logs, identify root causes, and reduce downtime.

## Architecture Flow

User
↓
Next.js Frontend (Vercel)
↓
REST API Calls
↓
FastAPI Backend (Render)
↓
AI Analysis Engine
↓
Incident Detection Logic
↓
Recommendations Engine

## Components

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Recharts

### Backend
- FastAPI
- Python
- Uvicorn

### Deployment
- Vercel (Frontend)
- Render (Backend)

## Key Features

- Live Incident Monitoring
- AI Root Cause Analysis
- Infrastructure Log Upload
- AI Recommendations
- Analytics Dashboard