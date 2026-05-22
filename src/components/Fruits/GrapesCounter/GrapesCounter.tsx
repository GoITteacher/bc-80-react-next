import css from "./GrapesCounter.module.css";

interface GrapesCounterProps {
  incrementGrapes: () => void;
}

const GrapesCounter = ({ incrementGrapes }: GrapesCounterProps) => {
  return (
    <div className={css["grapesCounter"]}>
      <button onClick={incrementGrapes}>Grapes +</button>
    </div>
  );
};

export default GrapesCounter;
