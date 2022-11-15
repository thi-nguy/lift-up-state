import React from "react";

interface NameProps {
  name: string;
}
const Name = ({ name }: NameProps) => {
  return <div>Name is: {name}</div>;
};

export default Name;
