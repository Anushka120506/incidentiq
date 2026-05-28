"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  const [incidents, setIncidents] = useState<any[]>([]);

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

      console.error("API Error:", error);

    }

  };

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

          </nav>

        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">

          {/* Header */}
          <div className="mb-10">

            <h1 className="text-5xl font-bold">
              Live AI Incident Dashboard
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Real-time infrastructure monitoring powered by AI.
            </p>

          </div>

          {/* Live API Status */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl mb-10">

            <h2 className="text-2xl font-bold">
              Backend API Connected Successfully
            </h2>

            <p className="mt-3 text-lg">
              IncidentIQ is now fetching live incidents from FastAPI backend.
            </p>

          </div>

          {/* Live Incidents */}
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