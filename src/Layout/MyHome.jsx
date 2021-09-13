import { Box } from "@material-ui/core";
import React from "react";
import { AllVinos } from "./AllVinos";
import { MyCarousel } from "./MyCarousel";

export const MyHome = () => {
  return (
    <div>
      <Box mb={3}>
        <MyCarousel />
      </Box>

      {/* <Box m={3} bgcolor="black">
        HOLA
      </Box> */}
      <AllVinos />
      <Box mt={4}></Box>
    </div>
  );
};
