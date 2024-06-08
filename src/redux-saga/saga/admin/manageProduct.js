import { call, put } from "redux-saga/effects";
import { get_product } from "../../admin/api";
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../admin/action";

function* handle_get_product(action) {
  try {
    // console.log(action, "action from manage");
    let { status, data } = yield call(get_product, action);

    if (status == 200) {
      yield put({ type: GET_PRODUCT_SUCCESS, payload: data });
    }
  } catch (err) {
    yield put({ type: GET_PRODUCT_ERROR, payload: err });
  }
}

export { handle_get_product };
