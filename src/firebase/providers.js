import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid} = result.user;

    return {
      ok: true,
      // User info
      displayName, email, photoURL, uid
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerWithEmailPassword = async({email, password, displayName}) => {
  console.log("🚀 ~ registerWithEmailPassword ~ email:", email)
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, photoURL } = resp.user;
    console.log("🚀 ~ registerWithEmailPassword ~ resp:", resp)
    //TODO: Actualizar el displayName en Firebase

    return {
      uid, photoURL, displayName
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    }
  }
}