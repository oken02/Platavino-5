import React, { useEffect, useState } from "react";
import { Box, Divider } from "@material-ui/core";
import Menu from "@mui-treasury/components/menu/collapsible";
import { useGatsbyCollapsibleMenuStyles } from "@mui-treasury/styles/collapsibleMenu/gatsby";
import { setCategories } from "../store/CategoriesReducer";
import { useDispatch } from "react-redux";

const FilterSidebar = () => {
  const [indPrecio, setIndPrecio] = useState(-1);
  const [indVarietal, setIndVarietal] = useState(-1);
  const [indPais, setIndPais] = useState(-1);
  const [indColor, setIndColor] = useState(-1);
  const [fields, setFields] = useState({});
  const dispatch = useDispatch();

  const handleClick = (key, value) => {
    setFields({ ...fields, [key]: value });
  };

  useEffect(() => {
    dispatch(setCategories(fields));
  }, [fields]);

  return (
    <Box width={245}>
      <Menu
        useStyles={useGatsbyCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={indPrecio === 0}
              onClick={() => {
                setIndPrecio(0);
              }}
            >
              Precio
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.ListItem
          button
          selected={indPrecio === 1}
          onClick={() => {
            setIndPrecio(1);
           
            handleClick("Precio", "0-2000");
          }}
        >
          Hasta $2000
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPrecio === 2}
          onClick={() => {
            setIndPrecio(2);
            handleClick("Precio", "2000-4999");
          }}
        >
          De $2000 a $4999
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPrecio === 3}
          onClick={() => {
            setIndPrecio(3);
            handleClick("Precio", "5000-9999");
          }}
        >
          De $5000 a $9999
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPrecio === 4}
          onClick={() => {
            setIndPrecio(4);
            handleClick("Precio", "10000-100000000");
          }}
        >
          Mas de $10000
        </Menu.ListItem>
      </Menu>
      <Divider variant="middle" style={{ backgroundColor: "blue" }} />
      <Menu
        useStyles={useGatsbyCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={indVarietal === 0}
              onClick={() => setIndVarietal(0)}
            >
              Varietal
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.ListItem
          button
          selected={indVarietal === 1}
          onClick={() => {
            setIndVarietal(1);
            handleClick("Varietal", "Malbec");
          }}
        >
          Malbec
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 2}
          onClick={() => {
            setIndVarietal(2);
            handleClick("Varietal", "Syrah");
          }}
        >
          Syrah
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 3}
          onClick={() => {
            setIndVarietal(3);
            handleClick("Varietal", "Merlot");
          }}
        >
          Merlot
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 4}
          onClick={() => {
            setIndVarietal(4);
            handleClick("Varietal", "Borgoña");
          }}
        >
          Borgoña
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 5}
          onClick={() => {
            setIndVarietal(5);
            handleClick("Varietal", "Cosecha Tardia");
          }}
        >
          Cosecha Tardia
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 6}
          onClick={() => {
            setIndVarietal(6);
            handleClick("Varietal", "Malbec Syrah");
          }}
        >
          Malbec Syrah
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indVarietal === 7}
          onClick={() => {
            setIndVarietal(7);
            handleClick("Varietal", "Chardonnay");
          }}
        >
          Chardonnay
        </Menu.ListItem>
      </Menu>
      <Divider variant="middle" style={{ backgroundColor: "blue" }} />
      <Menu
        useStyles={useGatsbyCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={indPais === 0}
              onClick={() => setIndPais(0)}
            >
              Pais de origen
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.ListItem
          button
          selected={indPais === 1}
          onClick={() => {
            setIndPais(1);
            handleClick("PaisDeOrigen", "Argentina");
          }}
        >
          Argentina
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPais === 2}
          onClick={() => {
            setIndPais(2);
            handleClick("PaisDeOrigen", "Estados Unidos");
          }}
        >
          Estados Unidos
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPais === 3}
          onClick={() => {
            setIndPais(3);
            handleClick("PaisDeOrigen", "Francia");
          }}
        >
          Francia
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indPais === 4}
          onClick={() => {
            setIndPais(4);
            handleClick("PaisDeOrigen", "Italia");
          }}
        >
          Italia
        </Menu.ListItem>
      </Menu>
      <Divider variant="middle" style={{ backgroundColor: "blue" }} />
      <Menu
        useStyles={useGatsbyCollapsibleMenuStyles}
        renderToggle={({ onClick, collapsed }) => (
          <Menu.Row>
            <Menu.RowItem
              button
              selected={indColor === 0}
              onClick={() => {
                setIndColor(0);
              }}
            >
              Color
            </Menu.RowItem>
            <Menu.Action button toggled={collapsed} onClick={onClick} />
          </Menu.Row>
        )}
      >
        <Menu.ListItem
          button
          selected={indColor === 1}
          onClick={() => {
            setIndColor(1);
            handleClick("Color", "Tinto");
          }}
        >
          Tinto
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indColor === 2}
          onClick={() => {
            setIndColor(2);
            handleClick("Color", "Blanco");
          }}
        >
          Blanco
        </Menu.ListItem>
        <Menu.ListItem
          button
          selected={indColor === 3}
          onClick={() => {
            setIndColor(3);
            handleClick("Color", "Rosado");
          }}
        >
          Rosado
        </Menu.ListItem>
      </Menu>
      <Divider variant="middle" style={{ backgroundColor: "blue" }} />
    </Box>
  );
};

export default FilterSidebar;
