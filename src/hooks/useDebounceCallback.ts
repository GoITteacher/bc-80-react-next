import { useEffect, useState } from "react";

export const useDebounceCallback = <T>(value: T, delay: number) => {
  const [result, setResult] = useState<T | undefined>();
  const [timeoutId, setTimeoutId] = useState<number>();

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      setResult(value);
    }, delay);

    setTimeoutId(id);
  }, [value, delay]);

  return result;
};
