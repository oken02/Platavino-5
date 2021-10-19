import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Box } from "@material-ui/core";
import { addCartItem } from "../store/addToCarrito";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    // maxWidth: 500,
    width: "80%",
    // height:"50vh",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    // height:"50vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const BlogCardDemo = React.memo(function BlogCard({ wine }) {
  const { img, paisDeOrigen, descripcion, bodega } = wine;
  const styles = useStyles();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { button: buttonStyles, ...contentStyles } =
    useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <Box px={2} py={2} minWidth="40%">
        <img
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            borderRadius: "16px",
          }}
          src={img}
          alt=""
        />
      </Box>

      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={`Pais de origen : ${paisDeOrigen}`}
          heading={`Bodega : ${bodega}`}
          body={descripcion}
        />
        <Button
          color="primary"
          // className={buttonStyles}
          variant="outlined"
          onClick={() => {
            // dispatch(setCarrito(wine));
            if (!isAuthenticated) return history.push("/login");
            dispatch(addCartItem({ vinoId: wine.id, cantidad: 1 }));
            history.push("/cart");
          }}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo;
