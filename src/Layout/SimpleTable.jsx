import { IconButton } from "@material-ui/core";
import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlined";

export const SimpleTable = () => {
  return (
    <table class="table table-hover table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Acciones</th>
          <th scope="col">Apellidos</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5].map((n, idx) => (
          <tr>
            <th scope="row">{idx + 1}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <IconButton color="primary" aria-label="add an alarm">
                <EditOutlinedIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
