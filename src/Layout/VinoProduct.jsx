import React from "react";
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
import { IconButton, CardActions } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { Box as BoxCh, Heading } from "@chakra-ui/react";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 0,
    position: "relative",
    "&:hover .icon": {
      // backgroundColor: "aqua",
      display: "flex",
    },
    borderRadius: "10px",
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
}));

export const VinoProduct = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const history = useHistory();
  return (
    <Card
      onClick={() => history.push("/vino/2")}
      className={cx(styles.root, shadowStyles.root)}
    >
      <CardMedia
        classes={mediaStyles}
        image={
          "https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
        }
      />
      <CardContent className={styles.content}>
        {/* <Typography component="legend">Vino Nose</Typography> */}
        <Heading as="h5" size="sm">
          Cabernet Sauvignon
        </Heading>
        <Box py={1}>
          <Rating name="read-only" value={3} readOnly size="small" />
        </Box>
        <BoxCh>$ 185.50</BoxCh>
        {/* <TextInfoContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'What happened in Thailand?'}
          body={
            'Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button> */}
      </CardContent>

      <Box
        display="none"
        className="icon"
        position="absolute"
        top={0}
        right={0}
        flexDirection="column"
      >
        {/* <IconButton aria-label="addToCart">
          <AddShoppingCartIcon />
        </IconButton> */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon fontSize="small" />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon fontSize="small" />
        </IconButton> */}
      </Box>
    </Card>
  );
});
