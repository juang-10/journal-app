import { registerWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthencation = (email, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSingIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if(!result.ok) return dispatch( logout( result.errorMessage ) );
    dispatch( login( result ) );
  }
}

export const startEmailPasswordRegister = ({email, password, displayName}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const resp = await registerWithEmailPassword({email, password, displayName});
    console.log("🚀 ~ returnasync ~ resp:", resp)
    
  }
}