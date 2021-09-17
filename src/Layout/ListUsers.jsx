import { Box, Typography, Button, TextField, Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { SimpleTable } from "./SimpleTable";
import AddIcon from "@material-ui/icons/Add";
import { setUsers } from "../store/usersReducer";

import axios from "axios";
import { useDispatch } from "react-redux";

export const ListUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        dispatch(setUsers(data.data));
        // history.push("/admin/usuarios");
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div classname="contenedor1">
      <div className="simple">
        <Box mb={2} display="flex" justifyContent="space-between">
          <Typography variant="h5">Users</Typography>

          <Button
            variant="contained"
            color="primary"
            // className={classes.button}
            startIcon={<AddIcon />}
          >
            Add user
          </Button>
        </Box>

        {/* <Box mb={2} textAlign="center" padding="0 20%"> */}
        <Box mb={2} width="30%">
          <TextField
            inputProps={{ type: "search" }}
            // fullWidth
            id="standard-basic"
            label="Search user"
            fullWidth
          />
        </Box>
      </div>

      {/* <Divider style={clases.divider} /> */}
      <Divider />

      <SimpleTable />
    </div>
  );
};
