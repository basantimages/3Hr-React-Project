import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { useContext } from "react";
import TShirtContext from "../store/tshirts-context";

const TableData = (props) => {
  const { addToCart } = useContext(TShirtContext);

  function cartHandler(size) {
    const cart = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: +props.price,
      lg: 0,
      md: 0,
      sm: 0,
    };
    addToCart(props.id, size, cart);
  }
  return (
    <TableRow>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.description}</TableCell>
      <TableCell>{props.price}</TableCell>
      <TableCell align="center">
        <Button
          onClick={cartHandler.bind(this, "lg")}
          variant="outlined"
          color="secondary"
          size="small"
          disabled={props.lg === 0}
          sx={{ fontSize: "0.7rem" }}
        >
          Buy Large ({props.lg})
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          onClick={cartHandler.bind(this, "md")}
          variant="outlined"
          color="success"
          size="small"
          disabled={props.md === 0}
          sx={{ fontSize: "0.7rem" }}
        >
          Buy Medium ({props.md})
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          onClick={cartHandler.bind(this, "sm")}
          variant="outlined"
          color="primary"
          size="small"
          disabled={props.sm === 0}
          sx={{ fontSize: "0.7rem" }}
        >
          Buy Small ({props.sm})
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableData;
