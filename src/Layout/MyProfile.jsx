import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import MyOrders from "./MyOrders";
import { MyProfileInfo } from "./MyProfileInfo";
import { MyProfileSidebar } from "./MyProfileSidebar";

import { Switch, Route } from "react-router-dom";
import { MyProfileEdit } from "./MyProfileEdit";
import { Heading } from "@chakra-ui/layout";
import { Sidebar2 } from "./Sidebar2";
import { NewSidebar } from "./NewSidebar";
import { ListUsers } from "./ListUsers";
import { SimpleTable } from "./SimpleTable";
import { ListProducts } from "./ListProducts";
import { MyModal } from "./Modal";

import { ModalContextProvider } from "../contexts/modalContext";
import AllOrders from "./AllOrders";

export const MyProfile = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item md={3}>
          <Paper>
            <MyProfileSidebar />
            {/* <Sidebar2 /> */}
            {/* <NewSidebar/> */}
          </Paper>
        </Grid>
        <Grid item md={9}>
          {/* <Paper> */}
          <Box px={3}>
            <ModalContextProvider>
              <Switch>
                <Route path="/perfil/orders" component={MyOrders} />
                <Route path="/perfil/info" component={MyProfileInfo}></Route>
                <Route path="/perfil/edit" component={MyProfileEdit}></Route>
                <Route path="/perfil/admin/users" component={ListUsers} />
                <Route path="/perfil/admin/products" component={ListProducts} />
                <Route path="/perfil/admin/orders" component={AllOrders} />
              </Switch>
            </ModalContextProvider>
          </Box>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};
