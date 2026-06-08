"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

export default function AnalyticsPage() {
  const aiTrendData = [
    { day: "Mon", confidence: 82 },
    { day: "Tue", confidence: 86 },
    { day: "Wed", confidence: 88 },
    { day: "Thu", confidence: 90 },
    { day: "Fri", confidence: 94 },
  ];

  const severityData = [
    { name: "Critical", incidents: 12 },
    { name: "Warning", incidents: 18 },
    { name: "Resolved", incidents: 43 },
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            AI Accuracy
          </p>
          <h2 className="text-5xl font-bold text-cyan-400 mt-2">
            94%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            MTTR Reduction
          </p>
          <h2 className="text-5xl font-bold text-green-400 mt-2">
            80%
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Active Incidents
          </p>
          <h2 className="text-5xl font-bold text-red-400 mt-2">
            28
          </h2>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-gray-400">
            Services Monitored
          </p>
          <h2 className="text-5xl font-bold text-blue-400 mt-2">
            16
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">
            AI Confidence Trends
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aiTrendData}>
              <Line
                type="monotone"
                dataKey="confidence"
                stroke="#06B6D4"
                strokeWidth={4}
              />
              <CartesianGrid stroke="#374151" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">
            Incident Severity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={severityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="incidents"
                fill="#3B82F6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </main>
  );
}