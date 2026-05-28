from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.ai_service import generate_incident_analysis

app = FastAPI(
    title="IncidentIQ API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class IncidentRequest(BaseModel):
    service_name: str
    issue: str

@app.get("/")
def root():
    return {
        "message": "IncidentIQ Backend Running Successfully"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "IncidentIQ API"
    }

@app.get("/incidents")
def get_incidents():
    return {
        "incidents": [
            {
                "service": "Payment API",
                "severity": "Critical",
                "status": "Investigating",
                "root_cause": "Database timeout spike"
            },
            {
                "service": "Auth Service",
                "severity": "Warning",
                "status": "Monitoring",
                "root_cause": "CPU usage exceeded threshold"
            }
        ]
    }

@app.post("/analyze-incident")
def analyze_incident(data: IncidentRequest):

    analysis = generate_incident_analysis(
        data.service_name,
        data.issue
    )

    return analysis