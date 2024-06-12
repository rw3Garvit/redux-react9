import axios from "axios";
import { BASE_URL, GET_PRODUCT, POST_PRODUCT } from "../constant";

let get_product = async (action) => {
  // console.log(action, "action from get api");

  let res = await axios.get(BASE_URL + GET_PRODUCT);
  // console.log(res, "res from get api");
  let data = res.data;
  let status = res.status;
  return { data, status };
};

let post_product = async (action) => {
  console.log(action, "action from post api");
  let { data, status } = await axios.post(
    BASE_URL + POST_PRODUCT,
    action.payload
  );
  return { data, status };
};

export { get_product, post_product };
