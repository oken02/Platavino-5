// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { purple, red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { Box } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   flex: {
//     justifyContent: "flex-end",
//   },
//   root: {
//     maxWidth: 345,
//     backgroundColor: "",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: purple[500],
//   },
// }));

// export default function Cards({ products }) {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const { title, year, description, image } = products;
//   return (
//     <Box ml={1} mr={1} mt={4}>
//       <Card className={classes.root} m={6}>
//         <CardHeader
//           avatar={
//             <Avatar aria-label="recipe" className={classes.avatar}>
//               P
//             </Avatar>
//           }
//           avatar={
//             // <Rating
//             //   name="simple-controlled"
//             //   value={value}
//             //   onChange={(event, newValue) => {
//             //     setValue(newValue);
//             //   }}
//             // />
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title={title}
//           subheader={year}
//         />
//         <CardMedia
//           className={classes.media}
//           image="https://http2.mlstatic.com/D_NQ_NP_802480-MLA31739001583_082019-O.webp"
//           title="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing className={classes.flex}>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </Box>
//   );
// }

//de aca para arriba solo son cosas de prueba

import React from "react";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 360,
    margin: "15px 10px",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export const Cards = React.memo(function GalaxyCard({ products }) {
  const { title, year, description, image } = products;
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const styles = useStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: "Spartan", weights: [300] },
            { font: "Montserrat", weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={styles.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>info</InfoSubtitle>
            <InfoTitle>{title}</InfoTitle>
            <InfoCaption>{description}</InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});

export default Cards;
