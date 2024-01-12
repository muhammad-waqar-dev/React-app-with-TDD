import { fetchSignUpDataStart, fetchSignUpDataSuccess, fetchSignUpDataFailure } from './SignUpSlice';
import { signupService } from './SignUpService';

export const signupAction = (req) => async (dispatch) => {
  try {
    dispatch(fetchSignUpDataStart());
    const data = await signupService(req);
    debugger
    dispatch(fetchSignUpDataSuccess(data));
  } catch (error) {
    debugger
    dispatch(fetchSignUpDataFailure(error.message));
  }
};
