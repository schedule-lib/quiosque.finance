import { createContext, useState, ReactNode } from "react";

type ModalContextType = {
  changeActiveState: () => void;
  modalIsActive: boolean;
};

type ModalProps = {
  children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: ModalProps) {
  const [modalIsActive, setModalActive] = useState(false);

  function changeActiveState() {
    setModalActive(!modalIsActive);
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsActive,
        changeActiveState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
