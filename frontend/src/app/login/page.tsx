"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = localStorage.getItem("incidentiq_user");

    if (!storedUser) {
      alert("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem(
        "incidentiq_logged_in",
        "true"
      );

      alert("Login Successful");

      window.location.href = "/";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1120] flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-white mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-slate-900 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-slate-900 text-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold"
        >
          Login
        </button>

      </div>
    </main>
  );
}