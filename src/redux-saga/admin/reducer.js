import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
} from "./action";

let initialState = {
  product: [],
  isLoading: false,
  isError: null,
};

let adminReducer = (state = initialState, action) => {
  console.log(action, "action fro reducer");

  switch (action.type) {
    case GET_PRODUCT_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        isLoading: false,
        product: action.payload,
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        isLoading: false,
        isError: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default adminReducer;
