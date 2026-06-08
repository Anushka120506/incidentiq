"use client";

import { useState } from "react";

export default function IncidentsPage() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");

  const incidents = [
    {
      service: "Payment API",
      severity: "Critical",
      status: "Investigating",
    },
    {
      service: "Auth Service",
      severity: "Warning",
      status: "Monitoring",
    },
    {
      service: "Database Cluster",
      severity: "Critical",
      status: "Investigating",
    },
    {
      service: "Redis Cache",
      severity: "Resolved",
      status: "Resolved",
    },
  ];

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch = incident.service
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSeverity =
      severity === "All" || incident.severity === severity;

    return matchesSearch && matchesSeverity;
  });

  return (
    <main className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Incident Management
      </h1>

      <div className="flex gap-4 mb-8">

        <input
          type="text"
          placeholder="Search incidents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 p-3 rounded-lg w-80"
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="bg-slate-800 p-3 rounded-lg"
        >
          <option>All</option>
          <option>Critical</option>
          <option>Warning</option>
          <option>Resolved</option>
        </select>

      </div>

      <div className="space-y-4">

        {filteredIncidents.map((incident, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold">
              {incident.service}
            </h2>

            <div className="flex gap-3 mt-3">

  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${
      incident.severity === "Critical"
        ? "bg-red-500/20 text-red-400"
        : incident.severity === "Warning"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-green-500/20 text-green-400"
    }`}
  >
    {incident.severity}
  </span>

  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${
      incident.status === "Investigating"
        ? "bg-red-500/20 text-red-400"
        : incident.status === "Monitoring"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-green-500/20 text-green-400"
    }`}
  >
    {incident.status}
  </span>

</div>
          </div>
        ))}

      </div>
    </main>
  );
}