// src/admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getContent, updateContent } from "../services/contentService";

import EditorCard from "./components/EditorCard";
import ArrayEditor from "./components/ArrayEditor";
import ObjectArrayEditor from "./components/ObjectArrayEditor";

const Dashboard = () => {
  const [content, setContent] = useState(null);
  const [saving, setSaving] = useState(false);

  // Load site content once
  useEffect(() => {
    const load = async () => {
      const data = await getContent();
      setContent(data || {});
    };
    load();
  }, []);

  // Save to Firebase Realtime DB
  const saveAll = async () => {
    if (!content) return;
    setSaving(true);

    const ok = await updateContent(content);

    alert(ok ? "Content saved!" : "Failed to save content");

    setSaving(false);
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
        Loading Admin Dashboard…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Admin Control Panel
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* HEADER */}
  <EditorCard
    title="Header"
    root="header"
    fields={["title"]}
    content={content}
    setContent={setContent}
  />

  {/* FOOTER */}
  <EditorCard
    title="Footer"
    root="footer"
    fields={["line1", "line2"]}
    content={content}
    setContent={setContent}
  />

{/* HERO */}
<EditorCard
  title="Hero Section"
  root="hero"
  fields={[
    "title",
    "subtitle",
    "image",
    "linkedin",
    "github",
    "kaggle",
    "leetcode",
    "hackerrank"
  ]}
  content={content}
  setContent={setContent}
/>


  {/* ABOUT */}
  <EditorCard
    title="About Section"
    root="about"
    fields={["text"]}
    content={content}
    setContent={setContent}
  />

  {/* CONTACT */}
  <EditorCard
    title="Contact Section"
    root="contact"
    fields={["email", "message", "linkedin", "github"]}
    content={content}
    setContent={setContent}
  />

  {/* SKILLS */}
  <ObjectArrayEditor
    title="Skills"
    root="skills"
    structure={["name", "icon", "level"]}
    content={content}
    setContent={setContent}
  />

  {/* CERTIFICATIONS */}
<ObjectArrayEditor
  title="Certifications"
  root="certifications"
  structure={[
    "title",
    "issuer",
    "year",
    "link",
    "imageUrl",      // Cloudinary URL
    "imagePublicId"  // Optional Cloudinary public ID
  ]}
  content={content}
  setContent={setContent}
/>

{/* PROJECTS */}
<ObjectArrayEditor
  title="Projects"
  root="projects"
  structure={[
    "title",
    "description",
    "stack",
    "link",
    "imageUrl",      // Cloudinary URL
    "imagePublicId"  // Optional Cloudinary public ID
  ]}
  content={content}
  setContent={setContent}
/>

  {/* EXPERIENCE */}
  <ObjectArrayEditor
    title="Experience"
    root="experience"
    structure={["company", "role", "period", "details"]}
    content={content}
    setContent={setContent}
  />

  {/* EDUCATION */}
  <ObjectArrayEditor
    title="Education"
    root="education"
    structure={["school", "degree", "year", "image"]}
    content={content}
    setContent={setContent}
  />
</div>
      {/* SAVE BUTTON */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={saveAll}
          disabled={saving}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold shadow-xl disabled:bg-gray-600 transition"
        >
          {saving ? "Saving…" : "Save All Changes"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
