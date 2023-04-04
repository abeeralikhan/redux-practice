import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const reset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const incrementByCount = () => {
    dispatch({
      type: "INCREMENT_BY_COUNT",
      payload: 10,
    });
  };
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <div className="App--btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementByCount}>Increment by Count</button>
      </div>
    </div>
  );
}

export default App;
