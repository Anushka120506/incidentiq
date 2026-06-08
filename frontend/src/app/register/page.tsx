"use client";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold text-white mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-lg bg-slate-900 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-slate-900 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-slate-900 text-white"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold">
          Register
        </button>
      </div>
    </main>
  );
}