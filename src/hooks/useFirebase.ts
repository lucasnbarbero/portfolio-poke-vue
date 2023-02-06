import { auth } from "@/services/firebase.service";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export function useFirebase() {
  async function currentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => resolve(user),
        (e) => reject(e)
      );
      unsubscribe();
    });
  }

  async function register(
    email: string,
    password: string,
    fieldError: Function
  ) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  }

  return {
    currentUser,
  };
}
