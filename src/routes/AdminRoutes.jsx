// src/routes/AdminRoutes.jsx
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";

const AdminRoutes = () => {
  const [authStatus, setAuthStatus] = useState("loading");
  // "loading" | "logged-in" | "logged-out"

  useEffect(() => {
    console.log("🔍 AdminRoutes Mounted");
    console.log("Firebase Auth Object:", auth);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("🔥 Auth State Changed:", user);
      setAuthStatus(user ? "logged-in" : "logged-out");
    });

    return () => unsubscribe();
  }, []);

  if (authStatus === "loading") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xl shadow-xl">
          Checking authentication…
        </div>
      </div>
    );
  }

  return authStatus === "logged-in" ? <Dashboard /> : <Login />;
};

export default AdminRoutes;
