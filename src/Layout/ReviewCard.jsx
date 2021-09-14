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
    height: "100%",
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

export const ReviewCard = ({ thumbnail, title, description }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Column className={styles.card}>
        <Row px={2} py={1} gap={2} alignItems="center">
          <Avatar className={styles.logo} variant={"rounded"} src={thumbnail} />
          <Info position={"middle"} useStyles={useApexInfoStyles}>
            <InfoTitle>{title}</InfoTitle>
            {/* <InfoSubtitle>{subtitle}</InfoSubtitle> */}
            <Rating name="size-small" defaultValue={2} size="small" />
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

// export const ReviewCard = React.memo(function TeamCard() {
//   return (
//     <>
//       <NoSsr>
//         <GoogleFontLoader fonts={[{ font: "Ubuntu", weights: [400, 700] }]} />
//       </NoSsr>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6} lg={4}>
//           <CustomCard
//             thumbnail={
//               "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQHCBAj8nRJkEwjWg5TpNuSZZG9iscsf43V1mfx0LZHNDYW3S_&usqp=CAU"
//             }
//             title={"APEX Legends: Assemble!"}
//             description={
//               <>
//                 <b>Shining Alpaca</b> and 3 others are already members of this
//                 group.
//               </>
//             }
//           />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <CustomCard
//             joined
//             thumbnail={
//               "https://cm1.narvii.com/7153/05204b8d8dcbb652dd1a8ceaafde997bc1909468_00.jpg"
//             }
//             title={"League of Legends Official"}
//             description={
//               "You are already a member of this group since April 5th 2019."
//             }
//           />
//         </Grid>
//         <Grid item xs={12} md={6} lg={4}>
//           <CustomCard
//             thumbnail={
//               "https://bazar-react.vercel.app/assets/images/faces/7.png"
//             }
//             title={"Jannie Schumm"}
//             description={
//               <>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
//                 massa id ut mattis. Facilisis vitae gravida egestas ac account.
//               </>
//             }
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// });
