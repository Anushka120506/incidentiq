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

        {/* Main Dashboard */}
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

          {/* Main Stats */}
          <div className="grid grid-cols-4 gap-6">

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">

              <h3 className="text-gray-400 mb-3">
                Critical Incidents
              </h3>

              <p className="text-5xl font-bold text-red-400">
                12
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">

              <h3 className="text-gray-400 mb-3">
                Active Alerts
              </h3>

              <p className="text-5xl font-bold text-yellow-400">
                28
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">

              <h3 className="text-gray-400 mb-3">
                Resolved Today
              </h3>

              <p className="text-5xl font-bold text-green-400">
                43
              </p>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">

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

          {/* Infrastructure Health */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Infrastructure Health
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <div className="bg-[#1E293B] p-6 rounded-2xl">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    Kubernetes Cluster
                  </h3>

                  <span className="text-green-400 font-bold">
                    Healthy
                  </span>

                </div>

                <p className="text-gray-400 mt-4">
                  All nodes operational with stable memory usage.
                </p>

              </div>

              <div className="bg-[#1E293B] p-6 rounded-2xl">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    PostgreSQL Database
                  </h3>

                  <span className="text-yellow-400 font-bold">
                    Warning
                  </span>

                </div>

                <p className="text-gray-400 mt-4">
                  Increased query latency detected during peak traffic.
                </p>

              </div>

              <div className="bg-[#1E293B] p-6 rounded-2xl">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-semibold">
                    Payment Gateway
                  </h3>

                  <span className="text-red-400 font-bold">
                    Critical
                  </span>

                </div>

                <p className="text-gray-400 mt-4">
                  API timeout spikes impacting payment processing.
                </p>

              </div>

            </div>

          </div>

          {/* Recent Incidents */}
          <div className="mt-10 bg-[#1E293B] rounded-2xl p-6 shadow-lg">

            <h2 className="text-2xl font-semibold mb-6">
              Recent Incidents
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b border-gray-700 text-left text-gray-400">

                  <th className="pb-4">
                    Service
                  </th>

                  <th className="pb-4">
                    Severity
                  </th>

                  <th className="pb-4">
                    Status
                  </th>

                  <th className="pb-4">
                    AI Root Cause
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-800">

                  <td className="py-4">
                    Payment API
                  </td>

                  <td className="text-red-400">
                    Critical
                  </td>

                  <td>
                    Investigating
                  </td>

                  <td>
                    Database connection timeout spike
                  </td>

                </tr>

                <tr className="border-b border-gray-800">

                  <td className="py-4">
                    Auth Service
                  </td>

                  <td className="text-yellow-400">
                    Warning
                  </td>

                  <td>
                    Monitoring
                  </td>

                  <td>
                    CPU usage exceeded threshold
                  </td>

                </tr>

                <tr>

                  <td className="py-4">
                    Kubernetes Cluster
                  </td>

                  <td className="text-green-400">
                    Resolved
                  </td>

                  <td>
                    Resolved
                  </td>

                  <td>
                    Memory leak after deployment rollback
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </main>
  );
}