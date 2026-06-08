"use client";

export default function AIAnalysisPage() {
  const detectedIssues = [
    "Database timeout spikes detected",
    "High CPU utilization observed",
    "Kubernetes CrashLoopBackOff events",
    "Memory pressure increasing",
  ];

  const recommendations = [
    "Scale database read replicas",
    "Increase pod resource limits",
    "Investigate application memory leaks",
    "Enable additional monitoring alerts",
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Operations Center
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            AI Confidence
          </p>

          <h2 className="text-5xl font-bold text-cyan-400 mt-2">
            94%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Active Analyses
          </p>

          <h2 className="text-5xl font-bold text-blue-400 mt-2">
            28
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Root Causes Found
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            19
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Risk Level
          </p>

          <h2 className="text-5xl font-bold text-red-400 mt-2">
            High
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-slate-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-6">
            Detected Issues
          </h2>

          <div className="space-y-4">

            {detectedIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-slate-900 p-4 rounded-lg"
              >
                {issue}
              </div>
            ))}

          </div>

        </div>

        <div className="bg-slate-800 p-6 rounded-xl">

          <h2 className="text-2xl font-bold mb-6">
            Recommended Actions
          </h2>

          <div className="space-y-4">

            {recommendations.map((action, index) => (
              <div
                key={index}
                className="bg-slate-900 p-4 rounded-lg"
              >
                {action}
              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="bg-slate-800 p-6 rounded-xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          AI Root Cause Summary
        </h2>

        <p className="text-green-400 text-lg">
          AI analysis indicates infrastructure instability caused by
          elevated database latency and resource contention within
          Kubernetes workloads. Immediate scaling and monitoring
          adjustments are recommended.
        </p>

      </div>

    </main>
  );
}