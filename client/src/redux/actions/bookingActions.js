import axios from "axios";
import { message } from "antd";

export const bookbook = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    axios.post("/api/bookings/bookbook", reqObj);
    dispatch({ type: "LOADING", payload: false });
    message.success("Your book booked with success");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something wrong, Please try later");
  }
};
