import { createContext, useState } from "react";

export const counterContext = createContext();

export default function CounterProvider(props) {

  const [counter, setCounter] = useState(0);

  // Functions to change  the counter state item
  const increment = function() {
    setCounter(counter + 1);
  };

  const decrement = function() {
    setCounter(counter - 1);
  };

  const clear = function() {
    setCounter(0);
  };

  const data = { counter, increment, decrement, clear };

  return (
    <counterContext.Provider value={data}>
      {props.children}
    </counterContext.Provider>
  );

};