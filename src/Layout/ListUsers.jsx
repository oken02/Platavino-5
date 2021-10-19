import { Box, Typography, Button, TextField, Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { SimpleTable } from "./SimpleTable";
import AddIcon from "@material-ui/icons/Add";
import { getUsers, setUsers } from "../store/usersReducer";

import { useDispatch, useSelector } from "react-redux";
import { Input, Heading } from "@chakra-ui/react";
import { useSearch } from "../hooks/useSearch";

export const ListUsers = () => {
  const dispatch = useDispatch();
  console.log("RENDER USER LISt");
  const users = useSelector((state) => state.users);

  const [usersTemp, changeQuery] = useSearch(
    "http://localhost:3001/api/users/"
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <Heading as="h4" size="lg">
            Users
          </Heading>

          {/* <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add user
          </Button> */}
        </Box>

        {/* <Box mb={2} textAlign="center" padding="0 20%"> */}
        <Box my={4}>
          <Input
            onChange={changeQuery}
            variant="filled"
            placeholder="Busca un usuario"
          />
        </Box>
      </div>

      {/* <Divider style={clases.divider} /> */}
      {/* <Divider /> */}

      <SimpleTable users={usersTemp || users} />
    </div>
  );
};
