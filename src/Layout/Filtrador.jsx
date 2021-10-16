import React, { useState } from "react";
// import Box from "@material-ui/core/Box";
import { Box } from "@chakra-ui/react";

import Menu from "@mui-treasury/components/menu/collapsible";
import { useGatsbyCollapsibleMenuStyles } from "@mui-treasury/styles/collapsibleMenu/gatsby";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
} from "@chakra-ui/react";

// const menuData = {
//   varietal: [
//     "Malbec",
//     "Syrah",
//     "Merlot",
//     "Borgoña",
//     "Cosecha Tardia",
//     "Malbec Syrah",
//     "Chardonnay",
//   ],
//   "Pais de origen": ["Estados Unidos", "Francia", "Italia"],

//   color: ["Tinto", "Blanco", "Rosado"],
// };

const menuData = [
  {
    dbName: "varietal",
    appName: "Varietal",
    values: [
      "Malbec",
      "Syrah",
      "Merlot",
      "Borgoña",
      "Cosecha Tardia",
      "Malbec Syrah",
      "Chardonnay",
    ],
  },
  {
    dbName: "paisDeOrigen",
    appName: "Pais de origen",
    values: ["Estados Unidos", "Francia", "Italia"],
  },
  {
    dbName: "color",
    appName: "Color",
    values: ["Tinto", "Blanco", "Rosado"],
  },
];

export const Filtrador = ({ setFilter, filters }) => {
  // const [index, setIndex] = React.useState(-1);

  // const [filters, setFilters] = useState({ precio: 6000 });

  // const setFilter = (menu, subMenu) => () => {
  //   //   const res =
  //   if (subMenu) filters[menu] = subMenu;
  //   else delete filters[menu];
  //   console.log("FILTERS STATE", { ...filters });
  //   setFilters({ ...filters });
  // };

  return (
    <Box minWidth={343}>
      {menuData.map((menuItem) => (
        <Menu
          //   collapsed
          useStyles={useGatsbyCollapsibleMenuStyles}
          renderToggle={({ onClick, collapsed }) => (
            <Menu.Row>
              <Menu.RowItem button onClick={setFilter(menuItem.dbName, null)}>
                {menuItem.appName}
              </Menu.RowItem>
              <Menu.Action button toggled={collapsed} onClick={onClick} />
            </Menu.Row>
          )}
        >
          {menuItem.values.map((value) => (
            <>
              <Menu.ListItem
                button
                selected={value === filters[menuItem.dbName]}
                onClick={setFilter(menuItem.dbName, value)}
              >
                {value}
              </Menu.ListItem>
            </>
          ))}
        </Menu>
      ))}

      <Box>
        {/* <Heading as="h6" size="xs">
          Precio
        </Heading> */}

        <Menu
          //   collapsed
          useStyles={useGatsbyCollapsibleMenuStyles}
          renderToggle={({ onClick, collapsed }) => (
            <Menu.Row>
              <Menu.RowItem>
                <Box display="flex" width="100%" justifyContent="space-between">
                  <p>precio</p>
                  <p>$ {filters.precio || "all"}</p>
                </Box>
              </Menu.RowItem>
              {/* <Menu.Action button toggled={collapsed} onClick={onClick} /> */}
            </Menu.Row>
          )}
        ></Menu>
      </Box>

      <Box px="6" className="Jiiiiiiiiiiii">
        <Slider
          colorScheme="purple"
          // defaultValue={1000}
          value={parseInt(filters.precio.slice(2))}
          min={0}
          max={10000}
          step={1000}
          onChange={(v) => {
            console.log("CHANGE", v);
            setFilter("precio", `0-${v}`)();
          }}
        >
          <SliderTrack bg="purple.100">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="purple" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
          {/* <SliderThumb boxSize={6} />
        <SliderThumb boxSize={6} /> */}
        </Slider>
      </Box>
    </Box>
  );
};

{
  /* <Menu
        collapsed
        useStyles={useGatsbyCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem button selected={false} onClick={createOnClick(-1)}>
              Gatsby styles
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
           
          </Menu.Row>
        )}
      >
        <Menu.ListItem button selected={index === 1} onClick={createOnClick(1)}>
          List item 1
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 2} onClick={createOnClick(2)}>
          List item 2
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 3} onClick={createOnClick(3)}>
          List item 3
        </Menu.ListItem>
        <Menu.ListItem button selected={index === 4} onClick={createOnClick(4)}>
          List item 4
        </Menu.ListItem>
      </Menu> */
}
