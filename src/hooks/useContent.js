// src/hooks/useContent.js
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ref, onValue } from "firebase/database";

const useContent = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const contentRef = ref(db, "siteContent");

    const unsub = onValue(contentRef, (snapshot) => {
      if (snapshot.exists()) {
        setContent(snapshot.val());
      } else {
        setContent({});
      }
    });

    return () => unsub();
  }, []);

  return content; // <-- IMPORTANT FIX
};

export default useContent;
