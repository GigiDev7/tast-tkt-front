import { useState } from "react";

const useModal = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleModal = () => {
    setIsShown((prev) => !prev);
  };

  const showModal = () => {
    setIsShown(true);
  };

  const hideModal = () => {
    setIsShown(false);
  };

  return { isShown, toggleModal, showModal, hideModal };
};

export default useModal;
