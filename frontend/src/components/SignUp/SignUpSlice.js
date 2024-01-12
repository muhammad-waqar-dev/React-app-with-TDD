import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  error: null,
};

const SignUpSlice = createSlice({
  name: "signupReducer",
  initialState,
  reducers: {
    fetchSignUpDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSignUpDataSuccess(state, action) {
      state.loading = false;
      state.signupData = action.payload;
    },
    fetchSignUpDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const {fetchSignUpDataStart, fetchSignUpDataSuccess, fetchSignUpDataFailure } = SignUpSlice.actions;

export default SignUpSlice.reducer;