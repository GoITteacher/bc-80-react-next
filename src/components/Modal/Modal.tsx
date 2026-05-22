import css from "./Modal.module.css";
interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <h5>Modal</h5>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
