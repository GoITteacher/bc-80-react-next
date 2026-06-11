"use client";

import Link from "next/link";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: ErrorProps) => {
  console.log(error);

  return (
    <div>
      <Link href="/">Go Home</Link>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ErrorPage;
