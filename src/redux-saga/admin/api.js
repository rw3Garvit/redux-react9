import axios from "axios";
import { BASE_URL, GET_PRODUCT } from "../constant";

let get_product = async (action) => {
  // console.log(action, "action from get api");

  let res = await axios.get(BASE_URL + GET_PRODUCT);
  // console.log(res, "res from get api");
  let data = res.data;
  let status = res.status;
  return { data, status };
};

export { get_product };
