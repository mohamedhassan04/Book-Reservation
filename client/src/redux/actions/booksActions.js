import { message } from "antd";
import axios from "axios";

export const getAllBooks = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/books/getallbooks");
    dispatch({ type: "GET_ALL_BOOKS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addBook = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    axios.post("/api/books/addbook", reqObj);
    message.success("New book added successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
