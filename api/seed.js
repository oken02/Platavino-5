const { User, Carrito } = require("./models");
const Vino = require("./models/Vino");
const bcrypt = require("bcrypt");

(async () => {
  const promises = [];

  const c = await Carrito.create();

  const p1 = User.create({
    username: "bruno",
    email: "bruno@gmail.com",
    password: await bcrypt.hash("bruno", 12),
    carritoId: c.dataValues.id,
  });
  promises.push(p1);

  const cart = await Carrito.create();

  const p2 = User.create({
    username: "kevin",
    email: "kevin@gmail.com",
    password: await bcrypt.hash("kevin", 12),
    carritoId: cart.dataValues.id,
  });

  console.log("CART.ID", cart.id, "CART:DATAVALUES:ID", cart.dataValues.id);

  promises.push(p2);

  const cartAdmin = await Carrito.create();

  const admin = User.create({
    username: "admin",
    email: "admin@gmail.com",
    role: "admin",
    password: await bcrypt.hash("admin", 12),
    carritoId: cartAdmin.dataValues.id,
  });

  promises.push(admin);

  const p3 = Vino.bulkCreate([
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
      Stock: 500,
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
      Stock: 500,
    },
    {
      PaisDeOrigen: "Francia",
      Bodega: "Alaris",
      Precio: 3200,
      Varietal: "Syrah",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Cálido: el alcohol en boca despierta sensaciones táctiles y psudotérmicas, cuando su presencia está por encima de lo ideal se puede sentir cierta calidez que llega a desbalancear el paladar.",
      Img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/alaris-syrah1-72489b184e1ac3831415900687171609-640-0.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Italia",
      Bodega: "Bonnal",
      Precio: 7000,
      Varietal: "Merlot",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Carnoso: el cuerpo del vino, su peso y textura deben ser descriptos y este término se utiliza con aquello de buena presencia y cuerpo.",
      Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgja2Uqhyrx1CsBJyIoZLXNMQTQUbDNUIzpQ&usqp=CAU",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "The Luxonomist, Mendoza",
      Precio: 1700,
      Varietal: "Borgoña",
      Color: "Blanco",
      ml: 750,
      Descripcion:
        "Complejo: es un vino que reúne características excepcionales con sus aromas y sabores. Además debe ser armónico y elegante.",
      Img: "https://theluxonomist.es/wp-content/uploads/2020/04/vino-blanco-f.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Francia",
      Bodega: "Lur Saluces Grand Chateau d’Yquem",
      Precio: 4500,
      Varietal: "Cosecha Tardia",
      Color: "Rosado",
      ml: 750,
      Descripcion:
        "Expresivo: no todos los vinos se la hacen fácil a los sentidos. Algunos huelen mientras otros apenas se hacen notar. Idealmente es bueno que un vino permita disfrutar de sus aromas y cuando su caudal aromático lo facilita se lo destaca con este término.",
      Img: "https://fecovita.vteximg.com.br/arquivos/ids/155479-450-450/Dilema_Rosado_Dulce_Natural.png?v=637033715176200000",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Etchart",
      Precio: 5200,
      Varietal: "Syrah",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Filoso: la acidez es uno de los atributos más importantes ya que es responsable de la frescura. En algunos vinos este sabor es más intenso que en otros y el punto máximo, tolerable, es cuando imprime una sensación táctil que parece cortar a su paso.",
      Img: "https://eistore.vteximg.com.br/arquivos/ids/177701-1000-1000/7790093130632.jpg?v=637562537613800000",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Etchart",
      Precio: 6200,
      Varietal: "Malbec Syrah",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Franco: expresión siempre positiva. En primer lugar da cuenta de un vino sin defectos y a la vez que tanto sus aromas como su sabor van en una misma línea.",
      Img: "https://tipsparatuviaje.com/wp-content/uploads/2020/01/perchel-runa-syrah-malbec-2014.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Italia",
      Bodega: "Bonnal",
      Precio: 8500,
      Varietal: "Cosecha Tardia",
      Color: "Rosado",
      ml: 750,
      Descripcion:
        "Gastronómico: el vino es un alimento y si bien este término puede parecer redundante, los cierto es que se utiliza en aquellos vinos que reúnen las condiciones para acompañar diversos estilos de cocina o se disfrutan mejor con un plato delante.",
      Img: "https://assets.iprofesional.com/assets/jpg/2019/11/486502.jpg?5.0.1",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Francia",
      Bodega: "Lur Saluces Grand Chateau d’Yquem",
      Precio: 4200,
      Varietal: "Merlot",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Graso: este descriptor se refiere a la textura del vino. Así como están aquellos que fluyen ligeros y lineales otros despliegan una untuosidad a su paso, como aceitosa o grasa acompañada de buen sabor.",
      Img: "https://lh3.googleusercontent.com/proxy/_4l5vU0b2aK-E3DjtmFRyFrjIVF2b8mNFLBUz9Gz1RRXMavzh2mpWpt5C37XNij-7Yq8SZMVjigjJqL4KV_Uog7119s2XiqKfnWAkZL384SAguixFD7s",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Estados Unidos",
      Bodega: "Jarvis Estate",
      Precio: 45000,
      Varietal: "Chardonnay",
      Color: "Blanco",
      ml: 750,
      Descripcion:
        "Jugoso: tintos jóvenes y expresivos con buena acidez y sabor. Son vinos que llenan el paladar y gustan. Generalmente destacan por su perfil frutal.",
      Img: "https://wines4fun.com/1449-home_default/wente-morning-fog-chardonnay-blanco-california.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Lopez",
      Precio: 3000,
      Varietal: "Cabernet Sauvignon",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Largo: un vino debe dejar su sabor en boca por un buen tiempo. Si la sensación que imprime es agradable y prolongada entonces se debe destacar. Lo ideal es que su sabor supere los diez segundos en permanencia.",
      Img: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63247_default_medium.jpeg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Bianchi",
      Precio: 4500,
      Varietal: "Blend",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Lineal: cuando un vino ataca el paladar con buena frescura y fluir ligero realiza un recorrido directo al final de boca. Allí se expresa y realza sabores. Es decir que son vinos fluidos y vivaces. ",
      Img: "https://jumboargentina.vteximg.com.br/arquivos/ids/579454-750-750/Vino-Famiglia-Bianchi-Red-Blend-750-Cc-1-466356.jpg?v=637215672696300000",
    },
    {
      PaisDeOrigen: "Francia",
      Bodega: "Unanime",
      Precio: 5800,
      Varietal: "Blend",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Mineral: es un término que despierta polémicas. Algunos lo usan con los vinos con aromas de asfalto húmedo, grafito o cemento fresco. Otros para describir la textura cuándo deja un efecto semisecante o polvoriento como al borrar un pizarrón, sensación de tiza.",
      Img: "https://www.vinosyspirits.com/media/catalog/product/cache/f49669d1bf2df0010137a9ec5423343e/u/n/unanimegranvinotinto_54022.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Lagarde",
      Precio: 4500,
      Varietal: "Malbec Rose",
      Color: "Rosado",
      ml: 750,
      Descripcion:
        "Nervioso: no siempre la acidez es una virtud. Cuando se convierte en una molestia se puede recurrir a esta expresión.",
      Img: "https://cdn.shopify.com/s/files/1/0393/3231/5303/products/bodega-lagarde-vino-rosado-organico-1_600x.jpg?v=1598628850",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Italia",
      Bodega: "Sperone",
      Precio: 9000,
      Varietal: "Pinot Grigio",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Piracina: más que un descriptor es un compuesto aromático. Sin embargo, se lo menciona a la hora de describir el perfil especiado de un vino, principalmente cuando este recuerda al pimiento verde fresco.",
      Img: "https://http2.mlstatic.com/D_NQ_NP_736180-MLA46595652292_072021-V.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Mendel",
      Precio: 2500,
      Varietal: "Semillon",
      Color: "Blanco",
      ml: 750,
      Descripcion:
        "Profundo: este término se puede usar para describir el color de un vino cuando éste es concentrado y oscuro o bien para referirse a aromas penetrantes e intensos.",
      Img: "http://d2r9epyceweg5n.cloudfront.net/stores/097/048/products/mendel-semillon1-6fa04cf8dd3a8f149e15698589079728-640-0.jpg",
      Stock: 500,
    },
    {
      PaisDeOrigen: "Argentina",
      Bodega: "Nietos Senetiner",
      Precio: 87100,
      Varietal: "Bonarda",
      Color: "Tinto",
      ml: 750,
      Descripcion:
        "Versátil: ideal para hablar de vinos que pueden desempeñarse bien en diversas situaciones, por ejemplo, con carnes rojas o pastas, junto a un plato principal o durante la sobremesa, etc. Es un atributo siempre positivo.",
      Img: "https://vinocular.files.wordpress.com/2016/04/1.jpg",
      Stock: 5,
    },
  ]);
  await Promise.all(promises);
  console.log("SEED EXITOSO!!!");
  return;
})();
