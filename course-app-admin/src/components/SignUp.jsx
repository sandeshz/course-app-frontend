import React from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={9} lg={9}>
          <img
            src="./src/assets/signup-image.jpg"
            style={{ width: "75%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <h2>Sign Up</h2>
          <form>
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
            />
            <Button onClick={ async () =>{
              const resp = await axios.post("http://localhost:3000/admin/login", {}, {
                headers: {
                    username: email,
                    password: password
                }
              });

              const data = resp.data;
              localStorage.setItem("token", data.token);
              window.location = "/landing";
            }} type="submit" fullWidth variant="contained">
              Sign In
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
