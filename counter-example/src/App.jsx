import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);

  const increment = () => {};
  const decrement = () => {};
  const reset = () => {};
  const incrementByCount = () => {};
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
