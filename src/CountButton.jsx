import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount }) {
  const countHandler = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon onClick={countHandler} className="count-btn-icon" />
      </button>
      <button  className="count-btn">
        <PlusIcon onClick={() => {
          setCount(prev => prev + 1)
        }} className="count-btn-icon" />
      </button>
    </div>
  );
}
