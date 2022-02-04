import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/User/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setNumber(data.number);
        setAddress(data.address);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {
    if (name && email && number && address) {
      const data = {
        name,
        email,
        number,
        address,
      };
      fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/User/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("User updated successfully");
          navigate("/list")
        })
        .catch((error) => alert("Something went wrong"));
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <Stack
      component="form"
      sx={{
        width: "50ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      style={{ margin: "auto" }}
    >
      <h2>Edit details of user.</h2>
      <TextField
        id="standard-basic"
        label="enter name"
        variant="standard"
        fullWidth
        type="text"
        onChange={(e) => setName(e.target.value)}
        required
        value={name}
      />
      <TextField
        id="standard-basic"
        label="enter email"
        variant="standard"
        fullWidth
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
        value={email}
      />
      <TextField
        id="standard-basic"
        label="enter contact number"
        variant="standard"
        fullWidth
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        required
        value={number}
      />
      <TextField
        id="standard-basic"
        label="enter address"
        variant="standard"
        fullWidth
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        required
        value={address}
      />
      <Button variant="outlined" color="success" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default Edit;
