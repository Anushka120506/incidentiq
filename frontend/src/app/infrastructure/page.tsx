"use client";

export default function InfrastructurePage() {
  const services = [
    {
      name: "API Gateway",
      status: "Healthy",
      uptime: "99.9%",
    },
    {
      name: "PostgreSQL",
      status: "Healthy",
      uptime: "99.8%",
    },
    {
      name: "Redis Cache",
      status: "Healthy",
      uptime: "99.7%",
    },
    {
      name: "Kubernetes",
      status: "Healthy",
      uptime: "99.9%",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Infrastructure Monitoring
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            CPU Usage
          </p>

          <h2 className="text-5xl font-bold text-yellow-400 mt-2">
            67%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Memory Usage
          </p>

          <h2 className="text-5xl font-bold text-cyan-400 mt-2">
            58%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Network Health
          </p>

          <h2 className="text-5xl font-bold text-green-400 mt-2">
            98%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Services Online
          </p>

          <h2 className="text-5xl font-bold text-blue-400 mt-2">
            16
          </h2>
        </div>

      </div>

      <div className="bg-slate-800 rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-900">

            <tr>
              <th className="text-left p-4">
                Service
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Uptime
              </th>
            </tr>

          </thead>

          <tbody>

            {services.map((service, index) => (

              <tr
                key={index}
                className="border-t border-slate-700"
              >

                <td className="p-4 font-semibold">
                  {service.name}
                </td>

                <td className="p-4">

                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    {service.status}
                  </span>

                </td>

                <td className="p-4">
                  {service.uptime}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}