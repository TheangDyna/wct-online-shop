import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

const metadata = {
  contentType: "image/jpeg",
};

const upload = async (path, files) => {
  let urls = [];

  for (const file of files) {
    const fileName = Date.now();
    const storageRef = ref(storage, path + "/" + fileName);
    const uploadTask = await uploadBytesResumable(storageRef, file, metadata);
    const url = await getDownloadURL(uploadTask.ref);
    urls.push(url);
  }

  return urls;
};

const uploadService = {
  upload,
};

export default uploadService;
