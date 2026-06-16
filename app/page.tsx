import Fruits from "@/components/Fruits/Fruits";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Fruits />
      </main>
    </div>
  );
}
