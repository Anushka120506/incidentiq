# IncidentIQ

AI-powered incident intelligence and root cause analysis platform for modern SRE and DevOps teams.

---

# Overview

IncidentIQ is a full-stack AI observability platform designed to help engineering teams detect, analyze, and resolve infrastructure incidents faster.

The platform provides:

- AI-powered root cause analysis
- Infrastructure log analysis
- Live incident monitoring
- AI-generated recommendations
- Incident analytics dashboard
- Enterprise observability workflows

---

# Features

## AI Incident Analysis

- Detects infrastructure anomalies
- Identifies probable root causes
- Generates AI recommendations
- Reduces MTTR significantly

## Log Upload & Analysis

- Upload infrastructure logs
- Detect timeout spikes
- Detect memory leaks
- Detect high CPU usage
- Detect Kubernetes CrashLoopBackOff errors

## Enterprise Dashboard

- Live incident feed
- Severity analytics
- AI confidence trends
- Infrastructure monitoring
- Modern SaaS UI

## Authentication UI

- Enterprise login experience
- Secure dashboard workflow
- Production-ready design

---

# Tech Stack

## Frontend

- Next.js 15
- React
- Tailwind CSS
- Axios
- Recharts
- React Hot Toast

## Backend

- FastAPI
- Python
- Uvicorn
- Pydantic

---

# Architecture

```txt
Frontend Dashboard
        ↓
Axios API Requests
        ↓
FastAPI Backend
        ↓
AI Analysis Engine
        ↓
Infrastructure Detection
        ↓
AI Recommendations
        ↓
Dashboard Visualization
```

---

# Folder Structure

```txt
incidentiq/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── backend/
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   ├── requirements.txt
│
├── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <your-repo-url>
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```txt
http://127.0.0.1:8000
```

---

# API Documentation

Swagger Docs:

```txt
http://127.0.0.1:8000/docs
```

---

# Demo Workflow

1. Open dashboard
2. Upload infrastructure logs
3. AI analyzes logs
4. Detect incidents automatically
5. Display recommendations
6. Monitor analytics dashboard

---

# Sample Infrastructure Issues Detected

- Database timeout spikes
- High CPU usage
- Memory leak patterns
- Kubernetes CrashLoopBackOff
- Infrastructure anomalies

---

# AI Benefits

- Faster incident response
- Reduced MTTR
- Improved observability
- AI-powered debugging
- Better operational visibility

---

# Future Improvements

- Real LLM integration
- Kubernetes monitoring
- Slack alerts
- PagerDuty integration
- Datadog integration
- Multi-cloud observability
- AI auto-remediation

---

# Author

Built for hackathon innovation and modern infrastructure operations.

---

# License

MIT License