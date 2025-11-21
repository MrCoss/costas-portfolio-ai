// src/services/contentService.js
import { db } from "../config/firebase";
import { ref, get, set } from "firebase/database";

// Path where all content is stored
const CONTENT_REF = ref(db, "siteContent");

export const getContent = async () => {
  try {
    const snap = await get(CONTENT_REF);
    if (snap.exists()) {
      return snap.val();
    }
    return {}; // default empty structure
  } catch (err) {
    console.error("❌ Error loading content:", err);
    return null;
  }
};

export const updateContent = async (updatedContent) => {
  try {
    await set(CONTENT_REF, updatedContent);
    return true;
  } catch (err) {
    console.error("❌ Error saving content:", err);
    return false;
  }
};
