import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Heading } from "@chakra-ui/layout";
// import { Table,TableCaption } from "@chakra-ui/table";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/table";
import { MenuList, MenuItem } from "@chakra-ui/menu";
import {
  ExternalLinkIcon,
  AddIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import axios from "axios";

import { ModalContext } from "../contexts/modalContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export function MyOrders() {
  const classes = useStyles();

  const isLogged = useSelector((state) => {
    return state.user.data.username;
  });
  const lstoken = localStorage.getItem("token");
  const [ordenes, setOrdenes] = React.useState([]);
  const modalContext = useContext(ModalContext);

  console.log("MODAL CONTEXT", modalContext);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/api/ordens", {
        headers: {
          Authorization: "Bearer " + lstoken,
        },
      })
      .then((data) => {
        console.log(data.data);
        setOrdenes(() => {
          return data.data;
        });
      })
      .catch((e) => console.log("ESTO ", e.response));
  }, []);

  return (
    <div>
      <Heading mb={4} as="h3" size="lg">
        Orders
      </Heading>
      <Table variant="striped">
        <TableCaption>
          <b>{`Ordenes de compra de ${isLogged}`}</b>
        </TableCaption>
        {/* <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead> */}
        <Thead>
          <Tr>
            <Th>Id de orden</Th>
            <Th>Status</Th>
            <Th>Fecha</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr> */}
          {ordenes.map((orden) => {
            return (
              <Tr>
                <Td>{orden.id}</Td>
                <Td>{orden.Status}</Td>
                <Td>
                  {new Date(orden.FechaCompra).toLocaleDateString("es-PE")}
                </Td>
                <Td>{orden.PrecioTotal}</Td>
              </Tr>
            );
          })}
          {/* <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr> */}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
}
