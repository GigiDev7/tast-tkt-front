import React from "react";

const ModalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.3)] z-10 fixed top-0 bottom-0 left-0 right-0"></div>
      {children}
    </>
  );
};

export default ModalWrapper;
