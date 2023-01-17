import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const RegisterForm = () => {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
        Register new account
      </Typography>
      <TextField
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <TextField
        type="password"
        placeholder="repeat password"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
      />
      <Button variant='contained' type='submit' sx={{display: 'block', mx: 'auto'}}>Register</Button>
    </form>
  );
};

export default RegisterForm;
