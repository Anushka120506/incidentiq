export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 h-screen bg-[#111827] p-6 border-r border-gray-800">
          <h1 className="text-3xl font-bold text-blue-400 mb-10">
            IncidentIQ
          </h1>

          <nav className="space-y-5">
            <div className="text-gray-300 hover:text-white cursor-pointer">
              Dashboard
            </div>

            <div className="text-gray-300 hover:text-white cursor-pointer">
              Incidents
            </div>

            <div className="text-gray-300 hover:text-white cursor-pointer">
              Alerts
            </div>

            <div className="text-gray-300 hover:text-white cursor-pointer">
              AI Analysis
            </div>

            <div className="text-gray-300 hover:text-white cursor-pointer">
              Infrastructure
            </div>

            <div className="text-gray-300 hover:text-white cursor-pointer">
              Settings
            </div>
          </nav>
        </aside>

        {/* Main Dashboard */}
        <section className="flex-1 p-8">

          <h2 className="text-4xl font-bold mb-8">
            AI Incident Dashboard
          </h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6">

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-400 mb-2">
                Critical Incidents
              </h3>

              <p className="text-5xl font-bold text-red-400">
                12
              </p>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-400 mb-2">
                Active Alerts
              </h3>

              <p className="text-5xl font-bold text-yellow-400">
                28
              </p>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl shadow-lg">
              <h3 className="text-gray-400 mb-2">
                Resolved Today
              </h3>

              <p className="text-5xl font-bold text-green-400">
                43
              </p>
            </div>

          </div>

          {/* Incident Table */}
          <div className="mt-10 bg-[#1E293B] rounded-2xl p-6 shadow-lg">

            <h3 className="text-2xl font-semibold mb-6">
              Recent Incidents
            </h3>

            <table className="w-full">

              <thead>
                <tr className="border-b border-gray-700 text-left text-gray-400">
                  <th className="pb-4">Service</th>
                  <th className="pb-4">Severity</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">AI Root Cause</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-gray-800">
                  <td className="py-4">Payment API</td>
                  <td className="text-red-400">Critical</td>
                  <td>Investigating</td>
                  <td>Database connection timeout spike</td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-4">Auth Service</td>
                  <td className="text-yellow-400">Warning</td>
                  <td>Monitoring</td>
                  <td>CPU usage exceeded threshold</td>
                </tr>

                <tr>
                  <td className="py-4">Kubernetes Cluster</td>
                  <td className="text-green-400">Resolved</td>
                  <td>Resolved</td>
                  <td>Memory leak after deployment rollback</td>
                </tr>

              </tbody>
            </table>
          </div>

        </section>
      </div>
    </main>
  );
}