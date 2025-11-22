import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming react-router
import { getContent, updateContent, logoutUser } from "../services/contentService";
import { 
  Save, 
  LogOut, 
  LayoutDashboard, 
  Loader2, 
  CheckCircle2, 
  Layers, 
  FileText, 
  User, 
  Cpu, 
  Briefcase, 
  Award 
} from "lucide-react"; // npm install lucide-react

import EditorCard from "./components/EditorCard";
import ObjectArrayEditor from "./components/ObjectArrayEditor";

const Dashboard = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load Data
  useEffect(() => {
    const load = async () => {
      const data = await getContent();
      setContent(data || {});
    };
    load();
  }, []);

  // Save Data
  const saveAll = async () => {
    if (!content) return;
    setSaving(true);
    setSaveSuccess(false);

    const ok = await updateContent(content);
    
    setSaving(false);
    if (ok) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000); // Reset after 3s
    } else {
      alert("Failed to save. Check console.");
    }
  };

  // Logout
  const logout = async () => {
    await logoutUser();
    navigate("/admin/login"); // Cleaner navigation
  };

  // --- LOADING STATE ---
  if (!content) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white gap-4">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full" />
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin relative z-10" />
        </div>
        <p className="text-white/40 text-sm font-medium tracking-wider uppercase animate-pulse">
          Initializing Command Center...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative overflow-x-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* --- TOP NAVIGATION --- */}
      <nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/10 rounded-lg border border-blue-600/20">
            <LayoutDashboard className="text-blue-400 w-5 h-5" />
          </div>
          <h1 className="font-bold text-lg tracking-tight">
            Portfolio<span className="text-white/40 font-normal">OS</span>
          </h1>
        </div>

        <button
          onClick={logout}
          className="
            flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400
            text-sm font-medium text-white/60 transition-all duration-300
          "
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </nav>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 pb-32">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* COLUMN 1: CORE CONTENT */}
          <div className="space-y-8">
            <SectionLabel icon={<Layers size={14} />} label="Structure & Layout" />
            
            <EditorCard
              title="Header Config"
              root="header"
              fields={["title"]}
              content={content}
              setContent={setContent}
            />

            <EditorCard
              title="Hero Section"
              root="hero"
              fields={["title", "subtitle", "linkedin", "github", "kaggle", "leetcode", "hackerrank"]}
              content={content}
              setContent={setContent}
            />

            <EditorCard
              title="About Me"
              root="about"
              fields={["text"]}
              content={content}
              setContent={setContent}
            />

             <EditorCard
              title="Footer & Copyright"
              root="footer"
              fields={["line1", "line2"]}
              content={content}
              setContent={setContent}
            />
          </div>

          {/* COLUMN 2: DYNAMIC ARRAYS */}
          <div className="space-y-8">
            <SectionLabel icon={<FileText size={14} />} label="Dynamic Data" />

            <ObjectArrayEditor
              title="Skills"
              root="skills"
              structure={["name", "level"]}
              content={content}
              setContent={setContent}
            />

            <ObjectArrayEditor
              title="Projects"
              root="projects"
              structure={["title", "description", "stack", "link", "tags"]}
              content={content}
              setContent={setContent}
            />

            <ObjectArrayEditor
              title="Experience"
              root="experience"
              structure={["company", "role", "period", "details"]}
              content={content}
              setContent={setContent}
            />

            <ObjectArrayEditor
              title="Education"
              root="education"
              structure={["school", "degree", "year", "description"]}
              content={content}
              setContent={setContent}
            />

            <ObjectArrayEditor
              title="Certifications"
              root="certifications"
              structure={["title", "issuer", "year", "link"]}
              content={content}
              setContent={setContent}
            />
            
            <EditorCard
              title="Contact Info"
              root="contact"
              fields={["email", "message"]}
              content={content}
              setContent={setContent}
            />
          </div>

        </div>
      </main>

      {/* --- STICKY SAVE BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none flex justify-center">
        <div className="pointer-events-auto backdrop-blur-xl bg-[#050505]/80 border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/50 flex items-center gap-4">
          
          <div className="px-4 text-sm text-white/40 hidden sm:block">
            Last saved: <span className="text-white/60">Just now</span>
          </div>

          <button
            onClick={saveAll}
            disabled={saving}
            className={`
              flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all duration-300
              shadow-lg
              ${saveSuccess 
                ? "bg-green-500 shadow-green-500/20 cursor-default" 
                : "bg-blue-600 hover:bg-blue-500 shadow-blue-600/20 active:scale-95"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {saving ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Saving...
              </>
            ) : saveSuccess ? (
              <>
                <CheckCircle2 size={18} />
                Saved!
              </>
            ) : (
              <>
                <Save size={18} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};

// Small Utility Component for Section Headers
const SectionLabel = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-white/40 px-1">
    {icon}
    <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
    <div className="h-px bg-white/10 flex-1" />
  </div>
);

export default Dashboard;