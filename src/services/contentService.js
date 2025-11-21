// src/services/contentService.js
import { db } from "../config/firebase";
import { ref, get, set } from "firebase/database";

/**
 * ---------------------------------------
 *  FETCH SITE CONTENT (Realtime Database)
 * ---------------------------------------
 * Path: /siteContent
 */
export const getContent = async () => {
  try {
    const snapshot = await get(ref(db, "siteContent"));

    if (snapshot.exists()) {
      return snapshot.val();
    }

    return {}; // Empty structure fallback
  } catch (error) {
    console.error("❌ Error loading content:", error);
    return {};
  }
};

/**
 * ---------------------------------------
 *  UPDATE SITE CONTENT (Full Overwrite)
 * ---------------------------------------
 */
export const updateContent = async (updatedContent) => {
  try {
    await set(ref(db, "siteContent"), updatedContent);
    console.log("✅ Content updated successfully");
    return true;
  } catch (error) {
    console.error("❌ Error updating content:", error);
    return false;
  }
};
