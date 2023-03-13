import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Chip from "@mui/material/Chip";

const CartData = (props) => {
  return (
    <TableRow>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.desc}</TableCell>
      <TableCell align="center">
        <Chip label={`${props.lg}-lg`} />
        <Chip label={`${props.md}-md`} sx={{ marginInline: "1rem" }} />
        <Chip label={`${props.sm}-sm`} />
      </TableCell>
      <TableCell>{props.price}</TableCell>
    </TableRow>
  );
};

export default CartData;
