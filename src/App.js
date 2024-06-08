import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { GET_PRODUCT_PENDING } from "./redux-saga/admin/action";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    // action
    dispatch({ type: GET_PRODUCT_PENDING });
  }, []);

  return <div className="App"></div>;
}

export default App;
