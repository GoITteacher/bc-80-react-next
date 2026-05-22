import css from "./AppleCounter.module.css";

interface AppleCounterProps {
  incrementApple: () => void;
}

const AppleCounter = ({ incrementApple }: AppleCounterProps) => {
  return (
    <div className={css["appleCounter"]}>
      <button onClick={incrementApple}>Apple +</button>
    </div>
  );
};

export default AppleCounter;
