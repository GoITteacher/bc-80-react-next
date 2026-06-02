import { useEffect } from "react";
import css from "./Modal.module.css";
import { useModalListener } from "../../hooks/useModal";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, onClose }: ModalProps) => {
  useModalListener(onClose);

  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button onClick={onClose}>CLOSE</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
