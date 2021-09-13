import React from "react";
import { Link } from "react-router-dom"; // can be react-router-dom, reach router
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useFloatNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/float";

export const MyMenu = React.memo(function FloatNavigationMenu() {
  return (
    <>
      <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
        <NavItem active>Systems</NavItem>
        {/* <NavItem as={Link} to={"/components/menu/"}> */}
        <NavItem as={Link} to={"/components/menu/"}>
          Illustrations
        </NavItem>
        <NavItem>Templates</NavItem>
        <NavItem>Mockups</NavItem>
      </NavMenu>
    </>
  );
});
