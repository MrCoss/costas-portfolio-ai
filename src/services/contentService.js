// src/services/contentService.js
import { db } from "../config/firebase";
import { ref, get, set } from "firebase/database";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

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

    return {}; // fallback when content does not exist
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

/**
 * ---------------------------------------
 *  LOGOUT USER (Firebase Auth)
 * ---------------------------------------
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("🔒 User logged out");
    return true;
  } catch (error) {
    console.error("❌ Logout failed:", error);
    return false;
  }
};
