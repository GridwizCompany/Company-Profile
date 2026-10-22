"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { adminLogin } from "../../../lib/adminStore";
import "../admin.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulasi delay sedikit agar terasa smooth
    await new Promise((r) => setTimeout(r, 600));

    if (adminLogin(username, password)) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Username atau password salah. Coba lagi.");
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <div style={{ background: "#0f172a", padding: "12px 24px", borderRadius: "12px", display: "inline-flex", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
              <Image
                src="/images/logo/LOGO-GWE&M.png"
                alt="Gridwiz Logo"
                width={160}
                height={38}
                priority
                style={{ objectFit: "contain", height: "34px", width: "auto" }}
              />
            </div>
          </div>
          <p>Admin Panel — Masuk untuk mengelola konten</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <div>
            <label className="admin-login-label" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="admin-login-input"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div>
            <label className="admin-login-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="admin-login-input"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && <div className="admin-login-error">{error}</div>}

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? "Masuk..." : "Masuk ke Admin Panel"}
          </button>
        </form>
      </div>
    </div>
  );
}
