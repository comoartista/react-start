import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import CountTitle from "./CountTitle.jsx";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer.jsx";

export default function Card() {
  const [count, setCount] = useState(3);
  return (
    <div className="card">
      <CountTitle />
      <Count count={count} size="lg" />
      <ResetButton setCount={setCount}/>
      <ButtonContainer setCount={setCount}/>
    </div>
  );
}
