from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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