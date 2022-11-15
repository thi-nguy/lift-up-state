import "./App.css";
import CounterDisplay from "./CounterDisplay";
import CounterIncrement from "./CounterIncrement";
import Form from "./Form";
import Name from "./Name";
import { useState } from "react";

function App() {
  const [numberFromIncrement, setNumberFromIncrement] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const getData = (data: string) => {
    setName(data);
  };

  const getNumber = (num: number) => {
    setNumberFromIncrement(num);
  };

  return (
    <div className="App">
      <Form formSubmit={getData} />
      <Name name={name} />
      
      <CounterIncrement sendCounter={getNumber} />
      <CounterDisplay numberCount={numberFromIncrement} />
    </div>
  );
}

export default App;
