import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./action.type";

const Alldata = {
  isLoading: false,
  isError: false,
  product: [],
};

export default function AppReducer(state = Alldata, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
      };
    case GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}