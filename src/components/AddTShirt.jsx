import { useContext, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TShirtContext from "./store/tshirts-context";

const AddTShirt = () => {
  const initialTShirtDetails = {
    name: "",
    description: "",
    price: "",
    lg: "",
    md: "",
    sm: "",
  };
  const [tshirtDetails, setTShirtDetails] = useState(initialTShirtDetails);
  const { addTShirts } = useContext(TShirtContext);

  const changeHandler = (e) => {
    setTShirtDetails({
      ...tshirtDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTShirts(tshirtDetails);
    setTShirtDetails(initialTShirtDetails);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          border: "1px solid lightgrey",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <form action="" onSubmit={submitHandler} autoComplete="true">
          <Typography
            variant="h5"
            color="initial"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 2 }}
          >
            Add TShirt Details
          </Typography>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Grid item md={3}>
              <TextField
                value={tshirtDetails.name}
                required
                onChange={changeHandler}
                name="name"
                label="T-Shirt Name"
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                value={tshirtDetails.description}
                required
                onChange={changeHandler}
                name="description"
                label="T-Shirt Description"
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                value={tshirtDetails.price}
                required
                onChange={changeHandler}
                name="price"
                label="T-Shirt Price"
                type="number"
              />
            </Grid>
            <Grid item md={2.5}>
              <Stack direction="row">
                <TextField
                  value={tshirtDetails.lg}
                  required
                  onChange={changeHandler}
                  name="lg"
                  label="lg"
                  fullWidth
                  type="number"
                  color="secondary"
                />
                <TextField
                  value={tshirtDetails.md}
                  required
                  onChange={changeHandler}
                  name="md"
                  label="md"
                  fullWidth
                  type="number"
                  color="success"
                />
                <TextField
                  value={tshirtDetails.sm}
                  required
                  onChange={changeHandler}
                  name="sm"
                  label="sm"
                  fullWidth
                  type="number"
                  color="primary"
                />
              </Stack>
            </Grid>
            <Grid item md={1.5}>
              <Button variant="contained" color="primary" type="submit">
                Add T-Shirt
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddTShirt;
