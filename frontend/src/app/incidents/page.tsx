"use client";

import { useState } from "react";

export default function IncidentsPage() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");

  const [serviceName, setServiceName] = useState("");
  const [newSeverity, setNewSeverity] = useState("Critical");
  const [newStatus, setNewStatus] = useState("Investigating");

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editService, setEditService] = useState("");
  const [editSeverity, setEditSeverity] = useState("Critical");
  const [editStatus, setEditStatus] = useState("Investigating");

  const [notifications, setNotifications] = useState<string[]>([]);

  const [incidents, setIncidents] = useState([
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
  ]);

  const addIncident = () => {
    if (!serviceName.trim()) {
      alert("Please enter a service name");
      return;
    }

    const incident = {
      service: serviceName,
      severity: newSeverity,
      status: newStatus,
    };

    setIncidents([incident, ...incidents]);

    setNotifications([
      `New Incident Created: ${serviceName}`,
      ...notifications,
    ]);

    setServiceName("");
    setNewSeverity("Critical");
    setNewStatus("Investigating");
  };

  const deleteIncident = (indexToDelete: number) => {
    const updatedIncidents = incidents.filter(
      (_, index) => index !== indexToDelete
    );

    setIncidents(updatedIncidents);

    setNotifications([
      "Incident Deleted",
      ...notifications,
    ]);
  };

  const saveEdit = () => {
    if (editingIndex === null) return;

    const updatedIncidents = [...incidents];

    updatedIncidents[editingIndex] = {
      service: editService,
      severity: editSeverity,
      status: editStatus,
    };

    setIncidents(updatedIncidents);

    setNotifications([
      `Incident Updated: ${editService}`,
      ...notifications,
    ]);

    setEditingIndex(null);
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch = incident.service
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSeverity =
      severity === "All" ||
      incident.severity === severity;

    return matchesSearch && matchesSeverity;
  });

  return (
    <main className="min-h-screen bg-[#0B1120] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Incident Management
      </h1>

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold mb-4">
          🔔 Notifications
        </h2>

        {notifications.length === 0 ? (
          <p className="text-gray-400">
            No notifications yet
          </p>
        ) : (
          <div className="space-y-2">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="bg-slate-900 p-3 rounded-lg"
              >
                {notification}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 p-5 rounded-xl">
          <p className="text-gray-400">
            Total Incidents
          </p>
          <h2 className="text-4xl font-bold mt-2">
            {incidents.length}
          </h2>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <p className="text-gray-400">
            Critical
          </p>
          <h2 className="text-4xl font-bold text-red-400 mt-2">
            {
              incidents.filter(
                (i) => i.severity === "Critical"
              ).length
            }
          </h2>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <p className="text-gray-400">
            Warning
          </p>
          <h2 className="text-4xl font-bold text-yellow-400 mt-2">
            {
              incidents.filter(
                (i) => i.severity === "Warning"
              ).length
            }
          </h2>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <p className="text-gray-400">
            Resolved
          </p>
          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {
              incidents.filter(
                (i) => i.severity === "Resolved"
              ).length
            }
          </h2>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Create New Incident
        </h2>

        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) =>
              setServiceName(e.target.value)
            }
            className="bg-slate-900 p-3 rounded-lg"
          />

          <select
            value={newSeverity}
            onChange={(e) =>
              setNewSeverity(e.target.value)
            }
            className="bg-slate-900 p-3 rounded-lg"
          >
            <option>Critical</option>
            <option>Warning</option>
            <option>Resolved</option>
          </select>

          <select
            value={newStatus}
            onChange={(e) =>
              setNewStatus(e.target.value)
            }
            className="bg-slate-900 p-3 rounded-lg"
          >
            <option>Investigating</option>
            <option>Monitoring</option>
            <option>Resolved</option>
          </select>

          <button
            onClick={addIncident}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
          >
            + Create Incident
          </button>
        </div>
      </div>

      {editingIndex !== null && (
        <div className="bg-slate-800 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Edit Incident
          </h2>

          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              value={editService}
              onChange={(e) =>
                setEditService(e.target.value)
              }
              className="bg-slate-900 p-3 rounded-lg"
            />

            <select
              value={editSeverity}
              onChange={(e) =>
                setEditSeverity(e.target.value)
              }
              className="bg-slate-900 p-3 rounded-lg"
            >
              <option>Critical</option>
              <option>Warning</option>
              <option>Resolved</option>
            </select>

            <select
              value={editStatus}
              onChange={(e) =>
                setEditStatus(e.target.value)
              }
              className="bg-slate-900 p-3 rounded-lg"
            >
              <option>Investigating</option>
              <option>Monitoring</option>
              <option>Resolved</option>
            </select>

            <button
              onClick={saveEdit}
              className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search incidents..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-slate-800 p-3 rounded-lg w-80"
        />

        <select
          value={severity}
          onChange={(e) =>
            setSeverity(e.target.value)
          }
          className="bg-slate-800 p-3 rounded-lg"
        >
          <option>All</option>
          <option>Critical</option>
          <option>Warning</option>
          <option>Resolved</option>
        </select>
      </div>

      <div className="bg-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">Severity</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredIncidents.map((incident, index) => (
              <tr
                key={index}
                className="border-t border-slate-700"
              >
                <td className="p-4 font-semibold">
                  {incident.service}
                </td>

                <td className="p-4">
                  {incident.severity}
                </td>

                <td className="p-4">
                  {incident.status}
                </td>

                <td className="p-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setEditService(
                        incident.service
                      );
                      setEditSeverity(
                        incident.severity
                      );
                      setEditStatus(
                        incident.status
                      );
                    }}
                    className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteIncident(index)
                    }
                    className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}