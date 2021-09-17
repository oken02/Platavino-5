import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { MyOrders } from "./MyOrders";
import { MyProfileInfo } from "./MyProfileInfo";
import { MyProfileSidebar } from "./MyProfileSidebar";

import { Switch, Route } from "react-router-dom";
import { MyProfileEdit } from "./MyProfileEdit";
import { Heading } from "@chakra-ui/layout";
import { Sidebar2 } from "./Sidebar2";
import { Button } from "@chakra-ui/button";
import { SimpleTable } from "./SimpleTable";

export const MyProfile = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <Paper>
            <MyProfileSidebar />
            {/* <Sidebar2 /> */}

          </Paper>
        </Grid>
        <Grid item md={9}>
          {/* <Paper> */}
          <Box px={3}>
            <Switch>
              <Route path="/perfil/orders" component={MyOrders}></Route>
              <Route path="/perfil/info" component={MyProfileInfo}></Route>
              <Route path="/perfil/edit" component={MyProfileEdit}></Route>
              <Route path='/admin/usuarios' component={SimpleTable} />
            </Switch>
          </Box>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};
