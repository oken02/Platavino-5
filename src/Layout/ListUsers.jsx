import { Box, Typography, Button, TextField } from "@material-ui/core";
import React from "react";
import { SimpleTable } from "./SimpleTable";
import AddIcon from "@material-ui/icons/Add";

export const ListUsers = () => {
  return (
    <div classname='contenedor1'>
      <div className='simple'>
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
      <SimpleTable />
    </div>
  );
};
