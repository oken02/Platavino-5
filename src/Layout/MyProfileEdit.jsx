import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { Box, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-item": {
      padding: theme.spacing(2),
      // padding: `0 ${theme.spacing(1)}px`,
      paddingLeft: 0,
      paddingTop: 0,

      // width: 200,
    },
  },
}));

export const MyProfileEdit = () => {
  const classes = useStyles();
  return (
    <div>
      <Heading mb={4} as="h3" size="lg">
        Edit profile
      </Heading>
      <Box mt={2}></Box>
      <Grid container className={classes.root}>
        <Grid item md={6}>
          <Input variant="outline" placeholder="Outline" />
        </Grid>
        <Grid item md={6}>
          <Input variant="outline" placeholder="Outline" />
        </Grid>

        <Grid item md={6}>
          <Input variant="outline" placeholder="Outline" />
        </Grid>

        <Grid item md={6}>
          <Input variant="outline" placeholder="Outline" />
        </Grid>
      </Grid>
      <Button colorScheme="purple" size="md">
        Button
      </Button>
    </div>
  );
};
