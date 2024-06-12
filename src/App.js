import { useEffect, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRODUCT_PENDING,
  POST_PRODUCT_PENDING,
} from "./redux-saga/admin/action";

function App() {
  let dispatch = useDispatch();

  let productName = useRef();
  let price = useRef();
  let desc = useRef();

  //fetch data from store
  let result = useSelector((state) => state.adminReducer);

  //add product
  function addProduct() {
    let product = {
      productName: productName.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };

    console.log(product);

    dispatch({ type: POST_PRODUCT_PENDING, payload: product });
  }

  useEffect(() => {
    // action
    dispatch({ type: GET_PRODUCT_PENDING });
  }, []);

  if (result.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <input type="text" ref={productName} />
      <input type="number" ref={price} />
      <input type="text" ref={desc} />
      <button onClick={addProduct}>submit</button>
      {result.product.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h2>{val.productName}</h2>
            <h3>{val.price}</h3>
          </>
        );
      })}
    </div>
  );
}

export default App;
