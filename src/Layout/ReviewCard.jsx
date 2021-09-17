import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useApexInfoStyles } from "@mui-treasury/styles/info/apex";
import { useGraphicBtnStyles } from "@mui-treasury/styles/button/graphic";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  root: {
    // height: "100%",
    transition: "0.3s",
    position: "relative",
  },
  card: {
    zIndex: 1,
    position: "relative",
    borderRadius: "10px",
    boxShadow: "0 6px 20px 0 #dbdbe8",
    backgroundColor: "#fff",
    transition: "0.4s",
    height: "100%",
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: "0.75rem",
  },
  avatar: {
    fontFamily: "Ubuntu",
    fontSize: "0.875rem",
    backgroundColor: "#6d7efc",
  },
  join: {
    background: "linear-gradient(to top, #638ef0, #82e7fe)",
    "& > *": {
      textTransform: "none !important",
    },
  },
}));

export const ReviewCard = ({ thumbnail, title, description, puntaje }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row px={2} py={1} gap={2} alignItems="center">
          <Avatar className={styles.logo} variant={"rounded"} src={thumbnail} />
          <Info position={"middle"} useStyles={useApexInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            {/* <InfoSubtitle>{subtitle}</InfoSubtitle> */}
            <Rating name="size-small" defaultValue={puntaje} size="small" />
          </Info>
        </Row>
        <Box
          pb={2}
          px={2}
          color={"grey.600"}
          fontSize={"0.875rem"}
          fontFamily={"Ubuntu"}
        >
          {description}
        </Box>
      </Column>
    </div>
  );
};
