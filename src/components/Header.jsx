import { useContext } from "react";
import ModalContext from "./store/modal-context";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TShirtContext from "./store/tshirts-context";

const Header = () => {
  const { cartModalHandler } = useContext(ModalContext);
  const { cartTotalItems } = useContext(TShirtContext);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4" component="h1" color="inherit" fontWeight="bold">
            T-Shirt Order App
          </Typography>
          <Button
            onClick={cartModalHandler}
            variant="contained"
            sx={{
              ml: "auto",
              backgroundColor: "lime",
              "&:hover": { backgroundColor: "green" },
            }}
          >
            <Typography variant="body1" color="inherit" fontWeight="bold">
              Cart
            </Typography>
            <Chip label={cartTotalItems} color="primary" sx={{ ml: 2 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
