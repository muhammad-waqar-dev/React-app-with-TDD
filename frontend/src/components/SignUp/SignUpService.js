import {SIGNUP_URL} from "../../Utility/Constant"
import { apiCall } from '../../api';

export const signupService = async (req) => {
  try {
    const reqPayload = {
      method: 'post',
      url: SIGNUP_URL,
      data: req
    }
    const response = await apiCall({...reqPayload});
    return response.data;
  } catch (error) {
    throw error;
  }
};
