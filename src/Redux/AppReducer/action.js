import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./action.type";


export const GetData = (page,sp,cp) => (dispatch) => {
  dispatch({ type: GET_REQUEST });
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${page}${sp}${cp}`,
    )
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data.data });
    // console.log(res.data.data)
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE });
    });
};