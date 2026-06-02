import { useEffect } from "react";
import toast from "react-hot-toast";
import HelloMessage from "../components/HelloMessage/HelloMessage";

export const useHello = () => {
  useEffect(() => {
    toast((t) => <HelloMessage />);
  }, []);
};
