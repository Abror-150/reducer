import type { Dispatch } from "redux";
import axios from "axios";

const API = "http://localhost:3001/users";

export const getUsers = () => async (dispatch: Dispatch) => {
  dispatch({ type: "USER_LOADING" });
  try {
    const res = await axios.get(API);
    dispatch({ type: "GET_USERS", payload: res.data });
  } catch {
    dispatch({ type: "USERS_ERROR" });
  }
};

export const addUsers = (user: any) => async (dispatch: Dispatch) => {
  const res = await axios.post(API, user);
  dispatch({ type: "ADD_USER", payload: res.data });
};

export const updateusers = (user: any) => async (dispatch: Dispatch) => {
  const res = await axios.put(`${API}/${user.id}`, user);
  dispatch({ type: "UPDATE_USER", payload: res.data });
};

export const deleteUsers = (id: number) => async (dispatch: Dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch({ type: "DELETE_USER", payload: id });
};
