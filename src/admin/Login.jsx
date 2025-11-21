// src/admin/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);

      // Parent navigation trigger
      if (onSuccess) onSuccess(cred.user);

    } catch (err) {
      console.error("Login error:", err.code);

      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        case "auth/user-not-found":
          setError("Admin account does not exist.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/too-many-requests":
          setError("Too many attempts. Try again later.");
          break;
        default:
          setError("Login failed. Check your credentials.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex items-center justify-center">
      <div className="w-[90%] max-w-md p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl">

        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Admin Login
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/30 text-red-200 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={login} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-white/70 mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter admin email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white/70 mb-1 block">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass((p) => !p)}
                className="absolute right-3 top-3 text-white/60 hover:text-white"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded-xl text-white font-medium shadow-lg transition-all"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
