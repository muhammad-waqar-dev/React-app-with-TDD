import { fetchLoginDataStart, fetchLoginDataSuccess, fetchLoginDataFailure } from './LoginSlice';
import { loginService } from './LoginService';

export const loginAction = (req) => async (dispatch) => {
  try {
    dispatch(fetchLoginDataStart());
    const response = await loginService(req);
    dispatch(fetchLoginDataSuccess(response.data));
  } catch (error) {
    debugger
    dispatch(fetchLoginDataFailure(error.message));
  }
};
