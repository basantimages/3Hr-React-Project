import { useContext } from "react";
import TShirtContext from "./store/tshirts-context";
import NoItem from "./NoItem";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableData from "./dataLists/TableData";

const AddedTShirts = () => {
  const { tshirts } = useContext(TShirtContext);

  return (
    <Box sx={{ p: "1rem", marginBlock: "2rem" }}>
      {tshirts.length === 0 && <NoItem />}
      {tshirts.length > 0 && (
        <TableContainer sx={{ maxWidth: "1200px", m: "auto" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ th: { backgroundColor: "#f5f5f5", fontWeight: "bold" } }}>
              <TableRow>
                <TableCell>T-Shirt Name</TableCell>
                <TableCell>T-Shirt Description</TableCell>
                <TableCell>T-Shirt Price</TableCell>
                <TableCell align="center">Buy Large</TableCell>
                <TableCell align="center">Buy Medium</TableCell>
                <TableCell align="center">Buy Small</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tshirts.map((tshirt) => {
                return (
                  <TableData
                    key={tshirt.id}
                    id={tshirt.id}
                    name={tshirt.name}
                    description={tshirt.description}
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
  );
};

export default AddedTShirts;
