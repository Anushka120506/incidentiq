"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

export default function Home() {

  const [incidents, setIncidents] = useState<any[]>([]);

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const [logAnalysis, setLogAnalysis] = useState<any>(null);

  useEffect(() => {

    fetchIncidents();

  }, []);

  const fetchIncidents = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/incidents"
      );

      setIncidents(response.data.incidents);

    } catch (error) {

      console.error(error);

    }

  };

  const uploadLogs = async () => {

    if (!selectedFile) {
      alert("Please select a log file");
      return;
    }

    const formData = new FormData();

    formData.append("file", selectedFile);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/upload-logs",
        formData
      );

      setLogAnalysis(response.data.log_analysis);

    } catch (error) {

      console.error(error);

    }

  };

  const severityData = [
    { name: "Critical", incidents: 12 },
    { name: "Warning", incidents: 18 },
    { name: "Resolved", incidents: 43 }
  ];

  const aiTrendData = [
    { day: "Mon", confidence: 82 },
    { day: "Tue", confidence: 86 },
    { day: "Wed", confidence: 88 },
    { day: "Thu", confidence: 90 },
    { day: "Fri", confidence: 94 }
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 h-screen bg-[#111827] p-6 border-r border-gray-800">

          <h1 className="text-3xl font-bold text-blue-400 mb-12">
            IncidentIQ
          </h1>

          <nav className="space-y-6">

            <div className="text-white font-semibold">
              Dashboard
            </div>

            <div className="text-gray-400">
              Incidents
            </div>

            <div className="text-gray-400">
              AI Analysis
            </div>

            <div className="text-gray-400">
              Infrastructure
            </div>

            <div className="text-gray-400">
              Analytics
            </div>

          </nav>

        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold">
              AI Incident Intelligence Platform
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Enterprise-grade AI-powered root cause analysis and observability platform.
            </p>

          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-10">

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <p className="text-gray-400">
                Critical Incidents
              </p>

              <h2 className="text-5xl font-bold text-red-400 mt-3">
                12
              </h2>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <p className="text-gray-400">
                Active Alerts
              </p>

              <h2 className="text-5xl font-bold text-yellow-400 mt-3">
                28
              </h2>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <p className="text-gray-400">
                AI Accuracy
              </p>

              <h2 className="text-5xl font-bold text-cyan-400 mt-3">
                94%
              </h2>

            </div>

            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <p className="text-gray-400">
                MTTR Reduction
              </p>

              <h2 className="text-5xl font-bold text-green-400 mt-3">
                80%
              </h2>

            </div>

          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-10">

            {/* Severity Chart */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

              <h2 className="text-2xl font-bold mb-6">
                Incident Severity Heatmap
              </h2>

              <ResponsiveContainer width="100%" height={300}>

                <BarChart data={severityData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Bar dataKey="incidents" fill="#3B82F6" />

                </BarChart>

              </ResponsiveContainer>

            </div>

            {/* AI Trends */}
            <div className="bg-[#1E293B] p-6 rounded-2xl">

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

          </div>

          {/* Upload Logs */}
          <div className="bg-[#1E293B] p-6 rounded-2xl mb-10">

            <h2 className="text-3xl font-bold mb-6">
              Upload Infrastructure Logs
            </h2>

            <input
              type="file"
              onChange={(e: any) =>
                setSelectedFile(e.target.files[0])
              }
              className="mb-5 block"
            />

            <button
              onClick={uploadLogs}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
            >
              Analyze Logs with AI
            </button>

          </div>

          {/* AI Analysis */}
          {logAnalysis && (

            <div className="bg-[#1E293B] p-6 rounded-2xl mb-10">

              <h2 className="text-3xl font-bold mb-6">
                AI Analysis Results
              </h2>

              <p className="text-green-400 text-lg mb-6">
                {logAnalysis.ai_summary}
              </p>

              <div className="grid grid-cols-2 gap-6">

                <div>

                  <h3 className="text-2xl font-semibold mb-4">
                    Detected Issues
                  </h3>

                  <div className="space-y-3">

                    {logAnalysis.detected_issues.map(
                      (issue: string, index: number) => (

                        <div
                          key={index}
                          className="bg-[#0F172A] p-4 rounded-xl"
                        >
                          {issue}
                        </div>

                      )
                    )}

                  </div>

                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-4">
                    Recommended Actions
                  </h3>

                  <div className="space-y-3">

                    {logAnalysis.recommended_actions.map(
                      (action: string, index: number) => (

                        <div
                          key={index}
                          className="bg-[#0F172A] p-4 rounded-xl"
                        >
                          {action}
                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          )}

          {/* Live Incident Feed */}
          <div className="bg-[#1E293B] p-6 rounded-2xl">

            <h2 className="text-3xl font-bold mb-6">
              Live Incident Feed
            </h2>

            <div className="space-y-5">

              {incidents.map((incident, index) => (

                <div
                  key={index}
                  className="bg-[#0F172A] p-5 rounded-xl border border-gray-700"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-semibold">
                      {incident.service}
                    </h3>

                    <span className="text-red-400 font-bold">
                      {incident.severity}
                    </span>

                  </div>

                  <p className="text-gray-400 mt-3">
                    Status: {incident.status}
                  </p>

                  <p className="mt-3 text-cyan-400">
                    AI Root Cause: {incident.root_cause}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}