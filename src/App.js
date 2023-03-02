import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlicer";
import { setTruty, setFalsy } from "./redux/trutySlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const truty = useSelector((state) => state.truty.value);

  console.log(truty);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      {truty ? <h1>Es Verdadero </h1> : <h1>Es Falso</h1>}
      <button
        onClick={() => {
          dispatch(setTruty());
        }}
      >
        Set Truty
      </button>
      <button
        onClick={() => {
          dispatch(setFalsy());
        }}
      >
        Set Falsy
      </button>
    </div>
  );
}

export default App;
