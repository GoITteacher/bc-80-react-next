import { useState } from "react";
import Modal from "../Modal/Modal";
import css from "./ModalExample.module.css";

const ModalExample = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={css["modalExample"]}>
      <h1>Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      {isShowModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default ModalExample;
