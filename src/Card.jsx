import Count from "./Count.jsx";
import CountButton from "./CountButton.jsx";
import ResetButton from "./ResetButton.jsx";
import Title from "./Title.jsx";

export default function Card() {
  return (
    <div>
        <Title />
        <Count />
        <ResetButton />
        <CountButton />
    </div>
  )
}
