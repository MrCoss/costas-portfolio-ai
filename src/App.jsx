// src/App.jsx
import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatBot from "./components/layout/ChatBot";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-transparent">

      {/* Fixed Header */}
      <Header />

      {/* Main Page Content */}
      <main className="pt-32 pb-20">
        <Home />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant */}
      <ChatBot />
    </div>
  );
};

export default App;
