"use client";

export default function Page() {

  return (

    <div
      style={{
        background: "#0B1120",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >

      <div
        style={{
          background: "#1E293B",
          padding: "40px",
          borderRadius: "20px",
          width: "400px"
        }}
      >

        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}
        >
          IncidentIQ
        </h1>

        <p
          style={{
            color: "#94A3B8",
            marginBottom: "30px"
          }}
        >
          AI-powered incident intelligence platform
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#0F172A",
            color: "white"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "none",
            background: "#0F172A",
            color: "white"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            background: "#2563EB",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>

      </div>

    </div>

  );

}