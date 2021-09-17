import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole, deleteUser, setUsers } from "../store/usersReducer";
import axios from "axios";

export const SimpleTable = () => {
  const dispatch = useDispatch()
  const lstoken = localStorage.getItem("token");

  const users = useSelector((state) => {
    return state.users
  })

  users.map((user) => {
    return console.log(user.username)
  })

  const handleAdminPermisoClick = (id) => {
    axios.put(`http://localhost:3001/api/auth/promover/${id}`, {}, {
      headers: {
        Authorization: "Bearer " + lstoken,
      }
    })
      .then((data) => {
        dispatch(changeUserRole(data.data))
      })
      .catch(e => console.log(e))
  }

  const handleDeleteUser = (id) => {
    const lstoken = localStorage.getItem("token");
    axios.delete(`http://localhost:3001/api/users/${id}`, {
      headers: {
        Authorization: "Bearer " + lstoken,
      }
    })
      .then((data) => {
        dispatch(deleteUser(id))
      })
      .catch(e => console.log('aca', e.response))
  }

  return (
    <div className='simpleTable'>
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((n, idx) => (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td>{n.username}</td>
              <td>{n.email}</td>
              <td>
                <IconButton onClick={() => handleAdminPermisoClick(n.id)} color="primary" aria-label="add an alarm">
                  <EditOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteUser(n.id)} color="primary" aria-label="add an alarm">
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </td>
              <td>{n.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
