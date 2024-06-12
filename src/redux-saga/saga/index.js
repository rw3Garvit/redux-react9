import { all } from "redux-saga/effects";
import {
  handle_get_product_saga,
  handle_post_product_saga,
} from "./root/productSaga";

function* rootSaga() {
  yield all([handle_get_product_saga(), handle_post_product_saga()]);
}

export default rootSaga;
