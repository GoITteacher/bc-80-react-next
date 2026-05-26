/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Монтування");

    return () => {
      console.log("Розмонтування");
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>Timer: {time}</p>;
}
