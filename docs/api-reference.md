# IncidentIQ API Reference

## Base URL

Production Backend:

https://incidentiq-1-dqqe.onrender.com

---

## Health Check

GET /health

Response:

{
  "message": "IncidentIQ Backend Running Successfully"
}

---

## Get Incidents

GET /incidents

Description:

Returns active incidents detected by the platform.

Response:

{
  "incidents": []
}

---

## Analyze Incident

POST /analyze-incident

Description:

Analyzes infrastructure incidents and generates AI-powered root cause analysis.

Request:

{
  "service_name": "Payment API",
  "error": "Database timeout spike"
}

---

## Upload Logs

POST /upload-logs

Description:

Uploads infrastructure log files and generates AI-powered recommendations.

Content Type:

multipart/form-data

Parameter:

file

Response:

{
  "analysis_status": "completed",
  "detected_issues": [],
  "recommended_actions": [],
  "ai_summary": ""
}

---

## Documentation

Swagger UI:

https://incidentiq-1-dqqe.onrender.com/docs