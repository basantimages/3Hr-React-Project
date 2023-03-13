import { useContext } from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ModalContext from "../store/modal-context";

const PurchaseAlert = () => {
  const { showPurchaseAlert, purchaseAlertHandler } = useContext(ModalContext);

  return (
    <>
      <Snackbar
        open={showPurchaseAlert}
        autoHideDuration={2000}
        onClose={purchaseAlertHandler}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={purchaseAlertHandler}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Purchase Successful
        </Alert>
      </Snackbar>
    </>
  );
};

export default PurchaseAlert;
