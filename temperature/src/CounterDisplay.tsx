import React from "react";

interface CounterDisplayProps {
  numberCount: number;
}
const CounterDisplay = ({ numberCount }: CounterDisplayProps) => {
  return <div>Display: {numberCount}</div>;
};

export default CounterDisplay;
