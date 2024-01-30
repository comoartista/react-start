import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import CountTitle from "./CountTitle.jsx";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer.jsx";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  return (
    <div className={`card ${locked && 'card--limit'}`} >
      <CountTitle locked={locked}/>
      <Count count={count} size="lg" />
      <ResetButton setCount={setCount}/>
      <ButtonContainer setCount={setCount} locked={locked}/>
    </div>
  );
}
