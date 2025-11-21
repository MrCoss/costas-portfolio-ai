// src/App.jsx
import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatBot from "./components/layout/ChatBot";

import Home from "./pages/Home";

const App = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-[#10121A] via-[#0A0D14] to-black text-white overflow-x-hidden">


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
