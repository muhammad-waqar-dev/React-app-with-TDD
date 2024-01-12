import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSliceReducer';
import SignUpSlice from '../components/SignUp/SignUpSlice';
import LoginSlice from '../components/Login/LoginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    signupReducer: SignUpSlice,
    loginReducer: LoginSlice,
  },
});
