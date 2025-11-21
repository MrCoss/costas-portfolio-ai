import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImage = async (file, path) => {
  try {
    const storageRef = ref(storage, `${path}/${file.name}`);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (err) {
    console.error("Image upload failed:", err);
    return null;
  }
};
