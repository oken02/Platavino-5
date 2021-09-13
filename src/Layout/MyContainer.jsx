import { Box, Container } from "@material-ui/core";
import React from "react";
import { AllVinos } from "./AllVinos";
import { MyAppBar } from "./MyAppBar";
import { MyCarousel } from "./MyCarousel";
import { SingleWine } from "./SingleWine";
import { AdminDrawer } from "./AdminDrawer";

export const MyContainer = () => {
  return (
    <div>
      <MyAppBar />
      <Box mt={4}></Box>
      <Container maxWidth="lg">

        

      </Container>
      <Box mt={4}></Box>
    </div>
  );
};
