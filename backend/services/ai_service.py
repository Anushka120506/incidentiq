def generate_incident_analysis(service_name, issue):

    return {
        "service": service_name,

        "issue": issue,

        "severity": "Critical",

        "confidence_score": "94%",

        "root_cause": (
            "Probable PostgreSQL connection pool exhaustion "
            "after recent deployment activity."
        ),

        "recommended_actions": [
            "Restart database connection pool",
            "Rollback latest deployment version",
            "Increase database connection limits",
            "Enable enhanced monitoring alerts"
        ],

        "ai_summary": (
            f"IncidentIQ detected unusual behavior in {service_name}. "
            f"AI analysis identified a likely root cause linked to "
            f"{issue}. Immediate remediation is recommended "
            f"to prevent service degradation."
        )
    }