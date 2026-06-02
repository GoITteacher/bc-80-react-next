import { useEffect, useState } from "react";

type ModalProps = [boolean, () => void, () => void, () => void];

// interface UseModalRes {
//   isOpen: boolean;
//   openModal: () => void;
// }

export const useModal = (): ModalProps => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, openModal, closeModal, toggleModal];
};

export const useModalListener = (onClose: () => void) => {
  useEffect(() => {
    console.log("Add Modal Listener");
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.code);

      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("Remove Modal Listener");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
