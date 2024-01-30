import Count from "./Count.jsx";
import CountButton from "./CountButton.jsx";
import ResetButton from "./ResetButton.jsx";
import CountTitle from "./CountTitle.jsx";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(3);
  return (
    <div className="card">
      <CountTitle />
      <Count count={count} size="lg" />
      <ResetButton />
      <CountButton setCount={setCount}/>
    </div>
  );
}
