import { checkingCredentials, login } from "./";

export const checkingAuthencation = (email, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSingIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());

  }
}