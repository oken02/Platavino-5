import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Box, Grid } from "@material-ui/core";
import { Heading, Text, Box as BoxCh } from "@chakra-ui/layout";
import { Input, Textarea } from "@chakra-ui/react";

import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { ReviewCard } from "./ReviewCard";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  reviews: {
    margin: "0",
  },
}));

export const ReviewSection = ({ vinoId }) => {
  const classes = useStyles();
  const [reviews, setReviews] = useState(null);
  const user = useSelector((state) => state.user);
  const [{ comentario, puntaje }, setReview] = useState({
    comentario: "",
    puntaje: 2.5,
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/reviews/${vinoId}`)
      .then((res) => setReviews(res.data));
  }, []);

  const createReview = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/reviews/${vinoId}`,
        { comentario, puntaje },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log("DATA", data);
        setReviews([...reviews, res.data]);
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("VALUE", typeof value);
    setReview((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return (
    <div>
      <Heading
        my="10"
        p="3"
        textAlign="center"
        as="h4"
        size="md"
        border="1px solid purple"
        borderRadius="lg"
        color="purple.700"
      >
        Reviews
      </Heading>

      <Grid container spacing={3} className={` ${classes.reviews} `}>
        <Grid item lg={6} md={6} sm={12} className="">
          <>
            <NoSsr>
              <GoogleFontLoader
                fonts={[{ font: "Ubuntu", weights: [400, 700] }]}
              />
            </NoSsr>

            <Grid container className="bruno" spacing={4}>
              {reviews !== null && (
                <>
                  {reviews.length ? (
                    reviews.map((rev, i) => {
                      console.log("rev", rev);
                      return (
                        <Grid key={rev.id} item xs={12} md={6} lg={4} sm={12}>
                          <ReviewCard
                            thumbnail={
                              "https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
                            }
                            title={rev.user.username}
                            description={
                              <>
                                <b>{rev.comentario}</b>
                              </>
                            }
                            puntaje={rev.puntaje}
                          />
                        </Grid>
                      );
                    })
                  ) : (
                    <BoxCh p="5" width="100%">
                      <Alert status="warning">
                        <AlertIcon />
                        This wine has no reviews
                      </Alert>
                    </BoxCh>
                  )}
                </>
              )}
            </Grid>
          </>
        </Grid>

        <Grid item lg={6} md={6} sm={12}>
          <Heading my="3" as="h5" size="md">
            Write a Review for this wine
          </Heading>
          <form onSubmit={createReview}>
            <FormControl id="first-name" isRequired>
              <FormLabel>Your Rating</FormLabel>
              <Rating
                name="puntaje"
                // Required
                value={puntaje}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                // onClick={onChange}
                onChange={onChange}
              />
            </FormControl>

            <FormControl id="first-name">
              <FormLabel>Your Review</FormLabel>
              <Textarea
                name="comentario"
                value={comentario}
                onChange={onChange}
                placeholder="Deja un comentario"
                size="sm"
              />
            </FormControl>
            <Button
              disabled={!user.isAuthenticated}
              mt={4}
              colorScheme="purple"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
