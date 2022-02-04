import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function List() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch("https://61921f02aeab5c0017105d5a.mockapi.io/User")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container spacing={2} style={{ margin: 25 }}>
      {users.map((user, index) => (
        <Grid item xs={12} lg={3} md={6} key={index}>
          <UserCard data={user} />
        </Grid>
      ))}
    </Grid>
  );
}

export default List;

function UserCard({ data }) {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`https://61921f02aeab5c0017105d5a.mockapi.io/User/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/list");
        alert("deleted successfully");
      })
      .catch((error) => alert("Something went wrong"));
  };
  console.log(data);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h5" component="div">
          {data.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.number}
        </Typography>
        <Typography variant="body2">{data.address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={() => navigate(`/edit/${data.id}`)}>
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
