import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole, deleteUser, setUsers } from "../store/usersReducer";
import axios from "axios";

import { TriangleUpIcon,DeleteIcon } from "@chakra-ui/icons";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const SimpleTable = ({ users }) => {
  const dispatch = useDispatch();

  // const users = useSelector((state) => state.users);

  return (
    <Table variant="striped" colorScheme="purple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Rol</Th>
          <Th>Acciones</Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr> */}
        {users.map((user, idx) => (
          <Tr>
            <Td>{user.id}</Td>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>

            <Td>{user.role}</Td>
            <Td>
              <IconButton
                onClick={() => dispatch(changeUserRole(user.id))}
                color="primary"
                aria-label="add an alarm"
              >
                <TriangleUpIcon />
              </IconButton>
              <IconButton
                onClick={() => dispatch(deleteUser(user.id))}
                color="primary"
                aria-label="add an alarm"
              >
                <DeleteIcon />
              </IconButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
      {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
    </Table>
  );
};
