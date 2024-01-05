import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const handleLogin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const handleRegister = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

const handleLogout = async () => {
  await signOut(auth);
};

const authService = {
  handleLogin,
  handleRegister,
  handleLogout,
};

export default authService;
