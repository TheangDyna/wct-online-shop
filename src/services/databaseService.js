import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const addData = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), data);
};

const updateDtata = async (collectionName, id, data) => {
  await updateDoc(doc(db, collectionName, id), data);
};

const deleteData = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id));
};

const databaseService = {
  addData,
  deleteData,
  updateDtata,
};

export default databaseService;
