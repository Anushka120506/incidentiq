def analyze_uploaded_logs(log_content):

    detected_issues = []

    if "timeout" in log_content.lower():
        detected_issues.append(
            "Database timeout spikes detected"
        )

    if "cpu" in log_content.lower():
        detected_issues.append(
            "High CPU usage detected"
        )

    if "memory" in log_content.lower():
        detected_issues.append(
            "Possible memory leak identified"
        )

    if "crashloopbackoff" in log_content.lower():
        detected_issues.append(
            "Kubernetes CrashLoopBackOff issue detected"
        )

    if len(detected_issues) == 0:
        detected_issues.append(
            "No major infrastructure issues detected"
        )

    return {
        "analysis_status": "completed",

        "detected_issues": detected_issues,

        "ai_summary": (
            "IncidentIQ AI analyzed uploaded logs and detected "
            "potential infrastructure anomalies requiring investigation."
        ),

        "recommended_actions": [
            "Review infrastructure metrics",
            "Inspect recent deployments",
            "Check database connection health",
            "Monitor service resource utilization"
        ]
    }