import React, { useContext } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import { Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
// import { IconButton, CardActions } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Box as BoxCh, Heading, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../store/selectedProductReducer";
import { height } from "@mui/system";
import { ModalContext } from "../contexts/modalContext";
import EditProduct from "../components/EditProduct";

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 304,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 0,
    position: "relative",
    "&:hover .icon": {
      // backgroundColor: "aqua",
      display: "flex",
    },
    borderRadius: "10px",
    "& .MuiCardMedia-root": {
      cursor: "pointer",
      backgroundSize: "contain",
      padding: 0,
      height: "200px",
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  icons: {
    justifyContent: "center",
  },
  img: {
    cursor: "pointer",
  },
}));

export const VinoProduct = React.memo(function NewsCard({
  wine,
  adminAcions = false,
  onEdit,
  onDelete,
}) {
  const dispatch = useDispatch();

  const { img, bodega, color, paisDeOrigen, varietal, precio, id } = wine;
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const history = useHistory();

  const modalContext = useContext(ModalContext);

  // const openModal = () => {
  //   modalContext.setData({
  //     body: <EditProduct />,
  //     title: "ADD A PRODUCT",
  //   });
  // };

  //en algun lado hacer que la imagen se adapte al tamaño sin cortarsee
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        onClick={() => {
          dispatch(setSelectedProduct(wine));
          history.push(`/vino/${id}`);
        }}
        classes={mediaStyles}
        image={img}
      />
      <CardContent className={styles.content}>
        <Heading as="h5" size="sm">
          {bodega}
        </Heading>
        <Box py={1}>
          <Rating name="read-only" value={3} readOnly size="small" />
        </Box>
        <BoxCh>{`$ ${precio}`}</BoxCh>
      </CardContent>

      {/* <CardActions disableSpacing> */}
      {/* <IconButton aria-label="add to favorites"> */}

      {adminAcions && (
        <BoxCh display="flex" p="2">
          <IconButton
            onClick={onEdit(wine.id)}
            flex="1"
            variant="outline"
            colorScheme="purple"
            aria-label="Send email"
            icon={<EditIcon />}
            mr="2"
          />
          <IconButton
            onClick={onDelete(wine.id)}
            flex="1"
            variant="outline"
            colorScheme="purple"
            aria-label="Send email"
            icon={<DeleteIcon />}
          />
        </BoxCh>
      )}

      {/* </IconButton> */}
      {/* <IconButton aria-label="share">
          <DeleteIcon fontSize="small" color="primary" />
        </IconButton> */}
      {/* </CardActions> */}

      {/* <Box
        display="none"
        className="icon"
        position="absolute"
        top={0}
        right={0}
        flexDirection="column"
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon fontSize="small" />
        </IconButton>
      </Box> */}
    </Card>
  );
});
