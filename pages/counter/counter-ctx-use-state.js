import { useState, createContext, useContext } from "react";

const CounterContext = createContext(null);

const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
);

const Container = () => (
  <div>
    <AddOneButton />
  </div>
);

const AddOneButton = () => {
  const [, setCounter] = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter((currentValue) => currentValue + 1)}>
        Add One
      </button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>Counter: {counter}</div>;
};

export default function CounterUseState() {
  return (
    <div>
      <CounterContextProvider>
        <Container />
        <Counter />
      </CounterContextProvider>
    </div>
  );
}
