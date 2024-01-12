import {LOGIN_URL} from "../../Utility/Constant"
import { apiCall } from '../../api';

export const loginService = async (req) => {
  try {
    const reqPayload = {
      method: 'post',
      url: LOGIN_URL,
      data: req
    }
    const response = await apiCall({...reqPayload});
    return response.data;
  } catch (error) {
    debugger
    throw error;
  }
};
