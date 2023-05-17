import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const STORAGE_SESSION_KEY = "session";
const STORAGE_USER_KEY = "user";
const saveAuthToStorage = (session, user) => {
  window.localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(session));
  window.localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
};
const loadAuthFromStorage = () => {
  const session = JSON.parse(window.localStorage.getItem(STORAGE_SESSION_KEY));
  const user = JSON.parse(window.localStorage.getItem(STORAGE_USER_KEY));
  if (session && user) {
    return {
      session,
      user,
    };
  }
  return null;
};
const deleteAuthFromStorage = () => {
  window.localStorage.clear();
};
const initialState = {
  isAuth: false,
  isSet: false,
  isAuthLoading: false,
  user: null,
  sessionToken: null,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    initAuth: (state, { payload }) => {
      const auth = loadAuthFromStorage();
      if (auth) {
        state.user = auth.user;
        state.sessionToken = auth.session;
        state.isAuth = true;

        state.isSet = auth.user.set;
      }
    },
    startAuth: (state, { payload }) => {
      state.isAuthLoading = true;
    },
    authSeccess: (state, { payload }) => {
      state.user = payload.user;
      state.sessionToken = payload.session;
      state.isAuth = true;
      saveAuthToStorage(payload.session, payload.user);

      state.isSet = payload.user.set;

      state.isAuthLoading = false;
    },
    authLogOut: (state) => {
      state.user = null;
      state.sessionToken = null;
      state.isAuth = false;
      state.isSet = false;
      deleteAuthFromStorage();
    },
    apdateuser: (state, { payload }) => {
      state.user = payload.user;
      state.isSet = payload.user.set;
      saveAuthToStorage(state.sessionToken, payload.user);
    },
  },
});
export const { initAuth, authSeccess, authFailed, apdateuser, authLogOut } =
  authSlice.actions;
export const authReducer = authSlice.reducer;

export const authSignup =
  ({ name, lastName, email, password, enqueueSnackbar }) =>
  async (dispatch) => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/register";
    try {
      const res = await axios({
        method: "post",
        url: URL,
        headers: { "Content-Type": "application/json" },
        data: {
          name,
          lastName,
          email,
          password,
        },
      });
      dispatch(authSeccess(res?.data?.data));
      enqueueSnackbar("User registered", {
        variant: "success",
        preventDuplicate: true,
      });
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message, {
        variant: "error",
        preventDuplicate: true,
      });
    }
  };
export const authLogin =
  ({ email, password, enqueueSnackbar }) =>
  async (dispatch) => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/login";
    try {
      const res = await axios({
        method: "post",
        url: URL,
        headers: { "Content-Type": "application/json" },
        data: {
          email,
          password,
        },
      });
      dispatch(authSeccess(res?.data?.data));
      enqueueSnackbar("logged in", {
        variant: "success",
        preventDuplicate: true,
      });
    } catch (e) {
      enqueueSnackbar(e.response?.data?.message, {
        variant: "error",
        preventDuplicate: true,
      });
    }
  };

export const updateAvatarImg =
  ({ img, sessionToken }) =>
  async (dispatch) => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/register/avatar";
    const formdata = new FormData();
    formdata.append("image", img);
    try {
      const res = await axios({
        method: "put",
        url: URL,
        headers: {
          "x-session-token": sessionToken,
        },
        data: formdata,
      });
      dispatch(apdateuser(res?.data?.data));
    } catch (e) {
      console.log(e);
    }
  };
export const updateCoverImg =
  ({ img, sessionToken }) =>
  async (dispatch) => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/register/cover";
    const formdata = new FormData();
    formdata.append("image", img);
    try {
      const res = await axios({
        method: "put",
        url: URL,
        headers: {
          "x-session-token": sessionToken,
        },
        data: formdata,
      });
      dispatch(apdateuser(res?.data?.data));
    } catch (e) {
      console.log(e);
    }
  };
