import React from "react";
import Carousel from "react-material-ui-carousel";

import { makeStyles } from "@material-ui/styles";
import MyVino from "./MyVino";
const useStyles = makeStyles(() => ({
  root: {
    heigth: "500px",
  },
}));
export const MyCarousel = () => {
  const classes = useStyles();
  return (
    // <div>
    <Carousel
      className={classes.root}
      autoPlay={false}
      className="vinos-carousel"
    >
      {[0, 1, 2, 3].map((n) => (
        <MyVino />
      ))}
    </Carousel>
    // </div>
  );
};
