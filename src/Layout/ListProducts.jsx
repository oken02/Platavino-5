import React from "react";
import { AllVinos } from "./AllVinos";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

export const ListProducts = () => {
  return (
    <div>
      <Box mb={2} display="flex" justifyContent="space-between">
        <Typography variant="h5">Productos</Typography>

        <Button
          variant="contained"
          color="primary"
          // className={classes.button}
          startIcon={<AddIcon />}
        >
          Añadir Productos
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
      <AllVinos />
    </div>
  );
};
