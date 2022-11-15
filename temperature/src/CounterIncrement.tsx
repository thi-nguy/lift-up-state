import React, { useState } from "react";

interface CounterIncrementProps {
  sendCounter: (num: number) => void;
}

const CounterIncrement = ({ sendCounter }: CounterIncrementProps) => {
  const [count, setCount] = useState<number>(1);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
    sendCounter(count);
  };
  return <button onClick={handleClick}>Increase Number</button>;
};

export default CounterIncrement;
