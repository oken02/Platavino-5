import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/styles";
import MyVino from "./MyVino";

const useStyles = makeStyles(() => ({
  root: {
    heigth: "500px",
  },
}));
export const MyCarousel = ({ products }) => {
  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/vinos")
  //     .then((res) => dispatch(setProducts(res.data)))
  //     .catch((e) => console.log(e));
  // }, []);
  const classes = useStyles();
  return (
    <Carousel
      className={classes.root}
      autoPlay={true}
      className="vinos-carousel"
    >
      {products.slice(1, 5).map((wine, i) => (
        <MyVino key={i} wine={wine} />
      ))}
    </Carousel>
  );
};
