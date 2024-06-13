import { useEffect, useRef, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PENDING,
  GET_PRODUCT_PENDING,
  POST_PRODUCT_PENDING,
  UPDATE_PRODUCT_PENDING,
} from "./redux-saga/admin/action";

function App() {
  const [view, setview] = useState({});

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

  //delete product

  function deleteProduct(id) {
    dispatch({ type: DELETE_PRODUCT_PENDING, payload: id });
  }

  //view data

  function viewData(product) {
    setview(product);
  }

  function handle(e) {
    setview({ ...view, [e.target.name]: e.target.value });
  }

  function updateProduct() {
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view });
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
      <br />
      <br />
      <br />

      <input
        type="text"
        name="productName"
        value={view.productName}
        onChange={handle}
      />
      <input type="number" name="price" value={view.price} onChange={handle} />
      <input type="text" name="desc" value={view.desc} onChange={handle} />
      <button onClick={updateProduct}>update</button>
      {result.product.map((val, index) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h2>{val.productName}</h2>
            <h3>{val.price}</h3>
            <button onClick={() => deleteProduct(val.id)}>delete</button>
            <button onClick={() => viewData(val)}>view</button>
          </>
        );
      })}
    </div>
  );
}

export default App;
