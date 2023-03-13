import { createContext, useState } from "react";

const ModalContext = createContext({
  showCartModal: false,
  cartModalHandler: () => {},
  showPurchaseAlert: false,
  purchaseAlertHandler: (open, text) => {},
});

export const ModalContextProvider = (props) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false);

  function cartModalHandler() {
    setShowCartModal(!showCartModal);
  }

  function purchaseAlertHandler() {
    setShowPurchaseAlert(!showPurchaseAlert);
  }

  const contextValue = {
    showCartModal,
    cartModalHandler,
    showPurchaseAlert,
    purchaseAlertHandler,
  };

  return (
    <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>
  );
};

export default ModalContext;
