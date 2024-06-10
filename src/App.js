import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT_PENDING } from "./redux-saga/admin/action";

function App() {
  let dispatch = useDispatch();

  //fetch data from store
  let result = useSelector((state) => state.adminReducer);

  useEffect(() => {
    // action
    dispatch({ type: GET_PRODUCT_PENDING });
  }, []);

  if (result.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
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
