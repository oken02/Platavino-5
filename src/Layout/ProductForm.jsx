import React, { useContext, useState } from "react";

import TextField from "@material-ui/core/TextField";

import { Button } from "@chakra-ui/react";
import getToken from "../utils/getToken";
import axios from "axios";
import { addProduct, updateProduct } from "../store/ProductsReducer";
import { useDispatch } from "react-redux";
import { ModalContext } from "../contexts/modalContext";

export const ProductForm = ({ data, editing }) => {
  const dispatch = useDispatch();
  const { onClose } = useContext(ModalContext);

  const [form, setForm] = useState(
    data || {
      paisDeOrigen: "",
      bodega: "",
      precio: "",
      varietal: "",
      color: "",
      ml: "",
      descripcion: "",
      img: "",
      stock: "",
    }
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("SUBMIT DATA", form);

    if (editing) {
      console.log("EDITING");

      const res = await axios.put(
        "http://localhost:3001/api/vinos/edit/" + form.id,
        form,
        getToken()
      );
      console.log("UPDATEDDDDDDD", res.data);
      dispatch(updateProduct(res.data));
      onClose();
      return;
    }
    const { data } = await axios.post(
      `http://localhost:3001/api/vinos/nuevo`,
      form,
      getToken()
    );

    console.log("CREATED", data);
    dispatch(addProduct(data));
    onClose();
  };

  return (
    <div>

      <div>
        <form style={{ width: "100%" }} noValidate onSubmit={onSubmit}>
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Pais de origen"
            name="paisDeOrigen"
            className="input"
            autoFocus
            value={form.paisDeOrigen}
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Bodega"
            name="bodega"
            value={form.bodega}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Precio"
            name="precio"
            value={form.precio}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Varietal"
            name="varietal"
            value={form.varietal}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Color"
            name="color"
            value={form.color}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="ml"
            name="ml"
            value={form.ml}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Descripcion"
            name="descripcion"
            value={form.descripcion}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Imagen"
            name="img"
            value={form.img}
            autoComplete="email"
            className="input"
          />
          <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Stock"
            name="stock"
            value={form.stock}
            autoComplete="email"
            className="input"
          />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Add a wine!
          </Button> */}
          <Button type="submit" width="100%" colorScheme="purple" mr={3}>
            {editing ? "Edit wine" : " Add a wine!"}
          </Button>
        </form>

        <br />
      </div>
    </div>
  );
};
