import { useContext } from "react";
import CartData from "../dataLists/CartData";
import ModalContext from "../store/modal-context";
import TshirtContext from "../store/tshirts-context";
import NoItem from "../NoItem";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Cart = () => {
  const { showCartModal, cartModalHandler, purchaseAlertHandler } =
    useContext(ModalContext);
  const { cart, cartTotalPrice, purchaseHandler } = useContext(TshirtContext);

  function clickPurchaseHandler() {
    purchaseAlertHandler();
    purchaseHandler();
  }

  return (
    <>
      <Dialog
        open={showCartModal}
        onClose={cartModalHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            fontWeight="bold"
            variant="h4"
            component="p"
            color="initial"
            textAlign="center"
          >
            Cart
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
            {cart.length === 0 && <NoItem />}
            {cart.length > 0 && (
              <TableContainer>
                <Table>
                  <TableHead
                    sx={{ th: { backgroundColor: "#f5f5f5", fontWeight: "bold" } }}
                  >
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell align="center">Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((tshirt) => {
                      return (
                        <CartData
                          key={tshirt.id}
                          name={tshirt.name}
                          desc={tshirt.description}
                          price={tshirt.price}
                          lg={tshirt.lg}
                          md={tshirt.md}
                          sm={tshirt.sm}
                        />
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
          <Box>
            <Typography
              variant="h6"
              color="initial"
              align="right"
              fontWeight="bold"
              marginRight="1rem"
            >
              Total Price: ₹{cartTotalPrice}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ mr: "1rem", mb: "0.5rem" }}>
          <Button onClick={cartModalHandler} variant="contained" color="error">
            Close
          </Button>
          <Button
            disabled={cart.length === 0}
            onClick={clickPurchaseHandler}
            variant="contained"
            color="success"
          >
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cart;
