import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Column, Item } from "@mui-treasury/components/flex";
import { makeStyles } from "@material-ui/core/styles";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { useD01InfoStyles } from "@mui-treasury/styles/info/d01";
import grey from "@material-ui/core/colors/grey";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Icon } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
//necesito dispatchear(removeCarrito, addCarrito)
//cuando este la db funcional traer la info con un useEffect para traer los productos que esten guardados en el carrito
// aca para abajo es fakeinfo
let probando = [
  {
    PaisDeOrigen: "Argentina ",
    Bodega: "Alma Mora, Chivilcoy ",
    Precio: 1500,
    Varietal: "Malbec",
    Color: "Tinto",
    ml: 750,
    Descripcion:
      "Austero: es uno de los más valorados por los profesionales. Se usa para aquellos que expresan sin distorsiones el carácter varietal de las uvas y su origen o aquellos en los que la elaboración no desvirtúa su naturaleza. ",
    Img: "https://static0.tiendeo.com.ar/upload_articulos/259644/0d89eaa5-db12-50d9-b06a-c7cda1c94a4b.jpg",
  },
  {
    PaisDeOrigen: "Estados Unidos",
    Bodega: "Antigal",
    Precio: 25000,
    Varietal: "Malbec",
    Color: "Tinto",
    ml: 750,
    Descripcion:
      "Balanceado: es el estado ideal de un vino en boca y significa que sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en armonía. ",
    Img: "https://www.antigal.com/wp-content/uploads/2020/09/antigal-key-visuals-28.jpg",
  },
  {
    PaisDeOrigen: "Argentina ",
    Bodega: "Alma Mora, Chivilcoy ",
    Precio: 1500,
    Varietal: "Malbec",
    Color: "Tinto",
    ml: 750,
    Descripcion:
      "Austero: es uno de los más valorados por los profesionales. Se usa para aquellos que expresan sin distorsiones el carácter varietal de las uvas y su origen o aquellos en los que la elaboración no desvirtúa su naturaleza. ",
    Img: "https://static0.tiendeo.com.ar/upload_articulos/259644/0d89eaa5-db12-50d9-b06a-c7cda1c94a4b.jpg",
  },
  {
    PaisDeOrigen: "Estados Unidos",
    Bodega: "Antigal",
    Precio: 25000,
    Varietal: "Malbec",
    Color: "Tinto",
    ml: 750,
    Descripcion:
      "Balanceado: es el estado ideal de un vino en boca y significa que sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en armonía. ",
    Img: "https://www.antigal.com/wp-content/uploads/2020/09/antigal-key-visuals-28.jpg",
  },
];

const useStyles = makeStyles(() => ({
  item: {
    backgroundColor: grey[900],
    borderRadius: "5px",
    marginBottom: "5px",
    justifyContent: "space-between",
    padding: "0 15px",
  },
  delete: {
    color: "red",
  },
  row: {
    height: "1000px",
    width: "100%",
  },
  width: {
    width: "100%",
  },
  column: {
    width: "30%",
    height: "50%",
    backgroundColor: "gray",
    marginLeft: "10px",
    borderRadius: "3px",
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  subtotal: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    display: "flex",
    padding: "0",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
}));
const Cart = React.memo(function DarkRapListItem() {
  const avatarStyles = useDynamicAvatarStyles({ size: 70 });
  const styles = useStyles();
  const [total, setTotal] = useState(0);
  const history = useHistory();
  let contador = 1;

  useEffect(() => {
    let count = 0;
    probando.map((wine) => {
      count += wine.Precio;
    });
    setTotal(count);
  }, []);

  return (
    <Row gap={5} className={styles.row}>
      <div className={styles.width}>
        {probando.map((wine, i) => {
          return (
            <Row key={i} className={styles.item}>
              <Item className={styles.card}>
                <Avatar
                  variant={"rounded"}
                  classes={avatarStyles}
                  src={wine.Img}
                  style={{ margin: "auto" }}
                />
                <Info useStyles={useD01InfoStyles}>
                  <InfoCaption> • U$D {wine.Precio} #</InfoCaption>
                  <InfoTitle>{wine.Bodega}</InfoTitle>
                  <InfoSubtitle>• {wine.PaisDeOrigen} •</InfoSubtitle>
                </Info>
              </Item>

              <div className={styles.icons}>
                <Tooltip title="Delete">
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      console.log(
                        "poner dispatch que elimina producto de carrito"
                      )
                    }
                  >
                    <DeleteIcon className={styles.delete} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove">
                  <IconButton
                    aria-label="remove"
                    onClick={() =>
                      console.log(
                        "poner dispatch que resta 1  producto de carrito"
                      )
                    }
                  >
                    <Icon color="secondary">remove_circle</Icon>
                  </IconButton>
                </Tooltip>
                <Typography>{contador}</Typography>
                <Tooltip title="Add">
                  {/* agregar la logica de agregar tipo.. crear el producto en la base de datos y cuando lo queramos mostrar en el subtotal hacer un filter por el id  */}
                  <IconButton
                    aria-label="add"
                    onClick={() => {
                      console.log(
                        "poner dispatch que suma 1  producto de carrito",
                        contador
                      );
                    }}
                  >
                    <Icon color="primary">add_circle</Icon>
                  </IconButton>
                </Tooltip>
              </div>
            </Row>
          );
        })}
      </div>

      <Card className={(styles.root, styles.column)}>
        <CardContent>
          <Typography
            className={styles.title}
            color="textSecondary"
            gutterBottom
          >
            Your Products:
          </Typography>

          <div className={styles.subtotal}>
            <h5>Total:</h5>
            <span>$ {total}</span>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => history.push("/checkout")}>
            Comprar
          </Button>
        </CardActions>
      </Card>
    </Row>
  );
});

export default Cart;
