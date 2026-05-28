"use client";

import { FaShieldAlt } from "react-icons/fa";

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B1120] flex items-center justify-center text-white">

      <div className="bg-[#1E293B] p-10 rounded-3xl w-[420px] shadow-2xl">

        <div className="flex flex-col items-center mb-8">

          <div className="bg-blue-600 p-4 rounded-2xl mb-5">

            <FaShieldAlt size={40} />

          </div>

          <h1 className="text-4xl font-bold">
            IncidentIQ
          </h1>

          <p className="text-gray-400 mt-3 text-center">
            AI-powered incident intelligence platform for modern infrastructure teams.
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-4 rounded-xl bg-[#0F172A] border border-gray-700 outline-none"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-4 rounded-xl bg-[#0F172A] border border-gray-700 outline-none"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold"
          >
            Sign In
          </button>

        </div>

      </div>

    </main>

  );

}