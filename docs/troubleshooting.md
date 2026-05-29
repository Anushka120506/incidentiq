# IncidentIQ Troubleshooting Guide

## Frontend Not Loading

### Possible Causes

- Deployment still in progress
- Browser cache issue
- Build failure

### Resolution

- Refresh browser
- Check Vercel deployment logs
- Verify latest commit deployed successfully

---

## Backend API Not Responding

### Possible Causes

- Render service sleeping
- Deployment failure
- Incorrect API URL

### Resolution

- Open backend URL directly
- Check Render logs
- Verify production API endpoint

---

## Log Upload Failure

### Possible Causes

- Unsupported file format
- Network issue
- Backend unavailable

### Resolution

- Upload .txt log files
- Verify backend status
- Retry upload

---

## AI Analysis Not Appearing

### Possible Causes

- API request failed
- Backend unavailable
- Browser network interruption

### Resolution

- Refresh page
- Verify backend deployment
- Check browser console

---

## Deployment Issues

### Frontend

Platform:
- Vercel

Check:
- Build logs
- Environment variables
- Deployment status

### Backend

Platform:
- Render

Check:
- Build command
- Start command
- Requirements file

---

## Support Workflow

1. Verify GitHub latest commit
2. Verify Vercel deployment
3. Verify Render deployment
4. Verify API connectivity
5. Retry operation