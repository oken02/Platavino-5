import React, { useContext, useEffect } from "react";

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
import { useSelector } from "react-redux";

function Orders({ orders }) {
  const isLogged = useSelector((state) => {
    return state.user.data.username;
  });

  return (
    <div>
      <Table variant="striped">
        <TableCaption>
          <b>{`Ordenes de compra de ${isLogged}`}</b>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Id de orden</Th>
            <Th>Status</Th>
            <Th>Fecha de compra</Th>
            <Th>Pago</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((orden) => {
            return (
              <Tr key={orden.id}>
                <Td>{orden.id}</Td>
                <Td>{orden.state}</Td>
                <Td>
                  {new Date(orden.fechaCompra).toLocaleDateString("es-PE")}
                </Td>
                <Td>{orden.payment}</Td>

                <Td>$ {orden.precioTotal}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
