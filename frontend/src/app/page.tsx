export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 h-screen bg-[#111827] p-6 border-r border-gray-800">

          <h1 className="text-3xl font-bold text-blue-400 mb-12">
            IncidentIQ
          </h1>

          <nav className="space-y-6">

            <div className="text-white font-semibold cursor-pointer">
              Dashboard
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              Incidents
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              Alerts
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              AI Analysis
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              Infrastructure
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              Integrations
            </div>

            <div className="text-gray-400 hover:text-white cursor-pointer">
              Settings
            </div>

          </nav>

        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">

            <div>

              <h1 className="text-5xl font-bold">
                AI Incident Dashboard
              </h1>

              <p className="text-gray-400 text-lg mt-3">
                Real-time AI-powered root cause analysis platform for modern infrastructure.
              </p>

            </div>

            <div className="flex gap-4">

              <div className="bg-[#1E293B] px-5 py-3 rounded-2xl">

                <p className="text-gray-400 text-sm">
                  Environment
                </p>

                <p className="text-green-400 font-bold">
                  Production
                </p>

              </div>

              <div className="bg-[#1E293B] px-5 py-3 rounded-2xl">

                <p className="text-gray-400 text-sm">
                  AI Status
                </p>

                <p className="text-blue-400 font-bold">
                  Active
                </p>

              </div>

            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h3 className="text-gray-400 mb-3">
                Critical Incidents
              </h3>

              <p className="text-5xl font-bold text-red-400">
                12
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h3 className="text-gray-400 mb-3">
                Active Alerts
              </h3>

              <p className="text-5xl font-bold text-yellow-400">
                28
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h3 className="text-gray-400 mb-3">
                Resolved Today
              </h3>

              <p className="text-5xl font-bold text-green-400">
                43
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h3 className="text-gray-400 mb-3">
                AI Accuracy
              </h3>

              <p className="text-5xl font-bold text-cyan-400">
                94%
              </p>

            </div>

          </div>

          {/* AI Summary */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-2xl shadow-xl">

            <h2 className="text-3xl font-bold mb-4">
              AI Incident Summary
            </h2>

            <p className="text-lg leading-8 text-white">

              IncidentIQ detected unusual database latency spikes affecting the
              Payment API service. AI analysis indicates a probable PostgreSQL
              connection pool exhaustion issue after deployment v2.3.

              Recommended action:
              restart database pool and rollback latest deployment changes.

            </p>

          </div>

          {/* AI Analysis Section */}
          <div className="mt-10 grid grid-cols-2 gap-6">

            {/* Root Cause Panel */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-6">
                AI Root Cause Analysis
              </h2>

              <div className="space-y-5">

                <div>

                  <p className="text-gray-400 mb-2">
                    Primary Root Cause
                  </p>

                  <p className="text-xl font-semibold text-red-400">
                    PostgreSQL Connection Pool Exhaustion
                  </p>

                </div>

                <div>

                  <p className="text-gray-400 mb-2">
                    Affected Service
                  </p>

                  <p className="text-xl font-semibold">
                    Payment API Gateway
                  </p>

                </div>

                <div>

                  <p className="text-gray-400 mb-2">
                    Confidence Score
                  </p>

                  <p className="text-3xl font-bold text-cyan-400">
                    94%
                  </p>

                </div>

                <div>

                  <p className="text-gray-400 mb-2">
                    Severity
                  </p>

                  <p className="text-red-400 font-bold text-xl">
                    Critical
                  </p>

                </div>

              </div>

            </div>

            {/* AI Recommendation Panel */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-6">
                AI Recommended Actions
              </h2>

              <div className="space-y-4">

                <div className="bg-[#0F172A] p-4 rounded-xl">
                  Restart PostgreSQL connection pool
                </div>

                <div className="bg-[#0F172A] p-4 rounded-xl">
                  Rollback deployment version v2.3
                </div>

                <div className="bg-[#0F172A] p-4 rounded-xl">
                  Increase database connection limits
                </div>

                <div className="bg-[#0F172A] p-4 rounded-xl">
                  Enable additional monitoring alerts
                </div>

              </div>

            </div>

          </div>

          {/* Timeline + Activity */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            {/* Timeline */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-6">
                Incident Timeline
              </h2>

              <div className="space-y-6">

                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-red-400 font-bold">
                    03:14 AM
                  </p>

                  <p className="mt-1">
                    Payment API latency exceeded threshold.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="text-yellow-400 font-bold">
                    03:17 AM
                  </p>

                  <p className="mt-1">
                    Database connection pool nearing limit.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-blue-400 font-bold">
                    03:22 AM
                  </p>

                  <p className="mt-1">
                    AI root cause analysis initiated automatically.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-green-400 font-bold">
                    03:28 AM
                  </p>

                  <p className="mt-1">
                    Recommended rollback generated by IncidentIQ.
                  </p>
                </div>

              </div>

            </div>

            {/* Activity Feed */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-6">
                Live Activity Feed
              </h2>

              <div className="space-y-5">

                <div className="flex items-start gap-4">

                  <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>

                  <div>
                    <p className="font-semibold">
                      Critical Alert Triggered
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Payment API timeout rate increased by 67%.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>

                  <div>
                    <p className="font-semibold">
                      AI Analysis Started
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Collecting logs and infrastructure metrics.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

                  <div>
                    <p className="font-semibold">
                      Slack Notification Sent
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Incident summary delivered to SRE team.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}