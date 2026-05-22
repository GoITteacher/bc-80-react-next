import css from "./LemonCounter.module.css";

interface LemonCounterProps {
  incrementLemon: () => void;
}

const LemonCounter = ({ incrementLemon }: LemonCounterProps) => {
  return (
    <div className={css["lemonCounter"]}>
      <button onClick={incrementLemon}>Lemon +</button>
    </div>
  );
};

export default LemonCounter;
