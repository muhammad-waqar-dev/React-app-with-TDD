import { createSlice } from "@reduxjs/toolkit";
import { setCookies } from "../../Utility/utilities";

const initialState = {
  loginData: null,
  loading: false,
  error: null,
};

const LoginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    fetchLoginDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLoginDataSuccess(state, action) {
      state.loading = false;
      setCookies(action?.payload);
    },
    fetchLoginDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const {fetchLoginDataStart, fetchLoginDataSuccess, fetchLoginDataFailure } = LoginSlice.actions;

export default LoginSlice.reducer;