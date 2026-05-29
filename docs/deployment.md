# IncidentIQ Deployment Guide

## Frontend Deployment

Platform: Vercel

Repository: GitHub

Root Directory:

frontend

Build Framework:

Next.js

## Backend Deployment

Platform: Render

Root Directory:

backend

Build Command:

pip install -r requirements.txt

Start Command:

uvicorn main:app --host 0.0.0.0 --port 10000

## Production URLs

Frontend:
https://incidentiq-kappa.vercel.app

Backend:
https://incidentiq-1-dqqe.onrender.com

## Deployment Workflow

1. Push code to GitHub
2. Vercel automatically deploys frontend
3. Render automatically deploys backend
4. Production services become available

## Hosting Stack

Frontend Hosting:
- Vercel

Backend Hosting:
- Render

Version Control:
- GitHub