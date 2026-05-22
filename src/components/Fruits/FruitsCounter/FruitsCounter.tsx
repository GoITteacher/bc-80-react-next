import css from "./FruitsCounter.module.css";

interface FruitsCounterProps {
  apples: number;
  grapes: number;
  lemons: number;
}

const FruitsCounter = ({ apples, grapes, lemons }: FruitsCounterProps) => {
  return (
    <div className={css["fruitsCounter"]}>
      <p>Apples: {apples}</p>
      <p>Grapse: {grapes}</p>
      <p>Lemon: {lemons}</p>
    </div>
  );
};

export default FruitsCounter;
