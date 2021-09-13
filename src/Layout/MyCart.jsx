import { Heading, Text } from "@chakra-ui/layout";
import { Box, Grid, Paper } from "@material-ui/core";
import { Box as BoxCk } from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon, CloseIcon } from "@chakra-ui/icons";

import { Tag } from "@chakra-ui/tag";

import { ButtonGroup, Button, IconButton } from "@chakra-ui/button";

import React from "react";

export const MyCart = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Paper elevation={1}>
            <Box p={2}>
              <Grid container>
                <Grid item md={4}>
                  <img
                    style={{ width: "100%" }}
                    src="https://www.vinetur.com/imagenes/2019/agosto/5/vino_termometro.jpg"
                    alt=""
                  />
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  md={8}
                  justifyContent="space-between"
                  alignContent="space-between"
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    {/* <Heading as="h5" size="md">
                      vino termometro
                    </Heading> */}
                    <Text display="flex" alignItems="center" fontWeight="normal" fontSize="xl">
                      Vino termometro
                    </Text>

                    <IconButton
                      aria-label="Add to friends"
                      icon={<CloseIcon />}
                    />
                  </Box>

                  <Box
                    color="gray"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    // ml="2"
                    flex={1}
                  >
                    color
                  </Box>

                  {/* <Box
                    // mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    vino termometro
                  </Box> */}

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <BoxCk display="flex" alignItems="center">$250.00 x 1</BoxCk>
                    <ButtonGroup variant="outline" spacing="6" isAttached>
                      <IconButton
                        aria-label="Add to friends"
                        icon={<MinusIcon />}
                      />

                      <BoxCk
                        // bg="purple"
                        borderWidth="1px"
                        borderRadius="lg"
                        px={4}
                        d="flex"
                        alignItems="center"
                      >
                        2
                      </BoxCk>

                      {/* <Button>Cancel</Button> */}
                      <IconButton
                        aria-label="Add to friends"
                        icon={<AddIcon />}
                      />
                    </ButtonGroup>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={5}>
          <Paper elevation={3}>
            <h1>paper 2</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
