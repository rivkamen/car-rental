// src/redux/actions/userActions.js
import axios from 'axios';
import { REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../constants/userConstants';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/register', userData);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
  }
};
