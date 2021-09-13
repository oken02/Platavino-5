import React from "react";
import { Grid } from "@material-ui/core";
import { VinoProduct } from "./VinoProduct";
export const AllVinos = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {[1, 2, 3, 4,5,6,7,8,9].map((n) => (
          <Grid item xs={12} md={3} lg={3}>
            <VinoProduct />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
