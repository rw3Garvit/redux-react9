import { put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PENDING, POST_PRODUCT_PENDING } from "../../admin/action";
import {
  handle_get_product,
  handle_post_product,
} from "../admin/manageProduct";

function* handle_get_product_saga() {
  yield takeLatest(GET_PRODUCT_PENDING, handle_get_product);
}

function* handle_post_product_saga() {
  yield takeLatest(POST_PRODUCT_PENDING, handle_post_product);
}

export { handle_get_product_saga, handle_post_product_saga };
