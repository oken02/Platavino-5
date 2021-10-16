import React from "react";

import TextField from "@material-ui/core/TextField";

export const ProductForm = ({ data = {} }) => {

  for (const key in data) {
    // console.log("JKKK", data[key]);
    // data[key] = data[key][0].toLowerCase() + data[key][0].slice(1);
    // data[key] = data[key][0].toLowerCase() + data[key][0].slice(1);
    data[key[0].toLowerCase() + key.slice(1)] = data[key];
  }
  return (
    <div>
      <div>
        <form style={{ width: "100%" }} noValidate>
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Pais de origen"
            name="paisDeOrigen"
            className="input"
            value={data.paisDeOrigen || ""}
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Bodega"
            name="bodega"
            value={data.bodega || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Precio"
            name="precio"
            value={data.precio || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Varietal"
            name="varietal"
            value={data.varietal || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Color"
            name="color"
            value={data.varietal || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="ml"
            name="ml"
            value={data.ml || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Descripcion"
            name="descripcion"
            value={data.descripcion || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Imagen"
            name="img"
            value={data.img || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          <TextField
            // onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Stock"
            name="stock"
            value={data.stock || ""}
            autoComplete="email"
            autoFocus
            className="input"
          />
          {/* <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add a wine!
        </Button> */}
        </form>

        <br />
      </div>
    </div>
  );
};
