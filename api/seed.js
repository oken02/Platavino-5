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
      paisDeOrigen: "Argentina ",
      bodega: "Alma Mora, Chivilcoy ",
      precio: 1500,
      varietal: "Malbec",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Austero: es uno de los más valorados por los profesionales. Se usa para aquellos que expresan sin distorsiones el carácter varietal de las uvas y su origen o aquellos en los que la elaboración no desvirtúa su naturaleza. ",
      img: "https://static0.tiendeo.com.ar/upload_articulos/259644/0d89eaa5-db12-50d9-b06a-c7cda1c94a4b.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Estados Unidos",
      bodega: "Antigal",
      precio: 25000,
      varietal: "Malbec",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Balanceado: es el estado ideal de un vino en boca y significa que sus atributos (alcohol, taninos, acidez, fruta y dulzor) están en armonía. ",
      img: "https://www.antigal.com/wp-content/uploads/2020/09/antigal-key-visuals-28.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Francia",
      bodega: "Alaris",
      precio: 3200,
      varietal: "Syrah",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Cálido: el alcohol en boca despierta sensaciones táctiles y psudotérmicas, cuando su presencia está por encima de lo ideal se puede sentir cierta calidez que llega a desbalancear el paladar.",
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/809/products/alaris-syrah1-72489b184e1ac3831415900687171609-640-0.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Italia",
      bodega: "Bonnal",
      precio: 7000,
      varietal: "Merlot",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Carnoso: el cuerpo del vino, su peso y textura deben ser descriptos y este término se utiliza con aquello de buena presencia y cuerpo.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgja2Uqhyrx1CsBJyIoZLXNMQTQUbDNUIzpQ&usqp=CAU",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "The Luxonomist, Mendoza",
      precio: 1700,
      varietal: "Borgoña",
      color: "Blanco",
      ml: 750,
      descripcion:
        "Complejo: es un vino que reúne características excepcionales con sus aromas y sabores. Además debe ser armónico y elegante.",
      img: "https://theluxonomist.es/wp-content/uploads/2020/04/vino-blanco-f.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Francia",
      bodega: "Lur Saluces Grand Chateau d’Yquem",
      precio: 4500,
      varietal: "Cosecha Tardia",
      color: "Rosado",
      ml: 750,
      descripcion:
        "Expresivo: no todos los vinos se la hacen fácil a los sentidos. Algunos huelen mientras otros apenas se hacen notar. Idealmente es bueno que un vino permita disfrutar de sus aromas y cuando su caudal aromático lo facilita se lo destaca con este término.",
      img: "https://fecovita.vteximg.com.br/arquivos/ids/155479-450-450/Dilema_Rosado_Dulce_Natural.png?v=637033715176200000",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Etchart",
      precio: 5200,
      varietal: "Syrah",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Filoso: la acidez es uno de los atributos más importantes ya que es responsable de la frescura. En algunos vinos este sabor es más intenso que en otros y el punto máximo, tolerable, es cuando imprime una sensación táctil que parece cortar a su paso.",
      img: "https://eistore.vteximg.com.br/arquivos/ids/177701-1000-1000/7790093130632.jpg?v=637562537613800000",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Etchart",
      precio: 6200,
      varietal: "Malbec Syrah",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Franco: expresión siempre positiva. En primer lugar da cuenta de un vino sin defectos y a la vez que tanto sus aromas como su sabor van en una misma línea.",
      img: "https://tipsparatuviaje.com/wp-content/uploads/2020/01/perchel-runa-syrah-malbec-2014.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Italia",
      bodega: "Bonnal",
      precio: 8500,
      varietal: "Cosecha Tardia",
      color: "Rosado",
      ml: 750,
      descripcion:
        "Gastronómico: el vino es un alimento y si bien este término puede parecer redundante, los cierto es que se utiliza en aquellos vinos que reúnen las condiciones para acompañar diversos estilos de cocina o se disfrutan mejor con un plato delante.",
      img: "https://assets.iprofesional.com/assets/jpg/2019/11/486502.jpg?5.0.1",
      stock: 500,
    },
    {
      paisDeOrigen: "Francia",
      bodega: "Lur Saluces Grand Chateau d’Yquem",
      precio: 4200,
      varietal: "Merlot",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Graso: este descriptor se refiere a la textura del vino. Así como están aquellos que fluyen ligeros y lineales otros despliegan una untuosidad a su paso, como aceitosa o grasa acompañada de buen sabor.",
      img: "https://lh3.googleusercontent.com/proxy/_4l5vU0b2aK-E3DjtmFRyFrjIVF2b8mNFLBUz9Gz1RRXMavzh2mpWpt5C37XNij-7Yq8SZMVjigjJqL4KV_Uog7119s2XiqKfnWAkZL384SAguixFD7s",
      stock: 500,
    },
    {
      paisDeOrigen: "Estados Unidos",
      bodega: "Jarvis Estate",
      precio: 45000,
      varietal: "Chardonnay",
      color: "Blanco",
      ml: 750,
      descripcion:
        "Jugoso: tintos jóvenes y expresivos con buena acidez y sabor. Son vinos que llenan el paladar y gustan. Generalmente destacan por su perfil frutal.",
      img: "https://wines4fun.com/1449-home_default/wente-morning-fog-chardonnay-blanco-california.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Lopez",
      precio: 3000,
      varietal: "Cabernet Sauvignon",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Largo: un vino debe dejar su sabor en boca por un buen tiempo. Si la sensación que imprime es agradable y prolongada entonces se debe destacar. Lo ideal es que su sabor supere los diez segundos en permanencia.",
      img: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63247_default_medium.jpeg",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Bianchi",
      precio: 4500,
      varietal: "Blend",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Lineal: cuando un vino ataca el paladar con buena frescura y fluir ligero realiza un recorrido directo al final de boca. Allí se expresa y realza sabores. Es decir que son vinos fluidos y vivaces. ",
      img: "https://jumboargentina.vteximg.com.br/arquivos/ids/579454-750-750/Vino-Famiglia-Bianchi-Red-Blend-750-Cc-1-466356.jpg?v=637215672696300000",
      stock: 300,
    },
    {
      paisDeOrigen: "Francia",
      bodega: "Unanime",
      precio: 5800,
      varietal: "Blend",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Mineral: es un término que despierta polémicas. Algunos lo usan con los vinos con aromas de asfalto húmedo, grafito o cemento fresco. Otros para describir la textura cuándo deja un efecto semisecante o polvoriento como al borrar un pizarrón, sensación de tiza.",
      img: "https://www.vinosyspirits.com/media/catalog/product/cache/f49669d1bf2df0010137a9ec5423343e/u/n/unanimegranvinotinto_54022.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Lagarde",
      precio: 4500,
      varietal: "Malbec Rose",
      color: "Rosado",
      ml: 750,
      descripcion:
        "Nervioso: no siempre la acidez es una virtud. Cuando se convierte en una molestia se puede recurrir a esta expresión.",
      img: "https://cdn.shopify.com/s/files/1/0393/3231/5303/products/bodega-lagarde-vino-rosado-organico-1_600x.jpg?v=1598628850",
      stock: 500,
    },
    {
      paisDeOrigen: "Italia",
      bodega: "Sperone",
      precio: 9000,
      varietal: "Pinot Grigio",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Piracina: más que un descriptor es un compuesto aromático. Sin embargo, se lo menciona a la hora de describir el perfil especiado de un vino, principalmente cuando este recuerda al pimiento verde fresco.",
      img: "https://http2.mlstatic.com/D_NQ_NP_736180-MLA46595652292_072021-V.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Mendel",
      precio: 2500,
      varietal: "Semillon",
      color: "Blanco",
      ml: 750,
      descripcion:
        "Profundo: este término se puede usar para describir el color de un vino cuando éste es concentrado y oscuro o bien para referirse a aromas penetrantes e intensos.",
      img: "http://d2r9epyceweg5n.cloudfront.net/stores/097/048/products/mendel-semillon1-6fa04cf8dd3a8f149e15698589079728-640-0.jpg",
      stock: 500,
    },
    {
      paisDeOrigen: "Argentina",
      bodega: "Nietos Senetiner",
      precio: 87100,
      varietal: "Bonarda",
      color: "Tinto",
      ml: 750,
      descripcion:
        "Versátil: ideal para hablar de vinos que pueden desempeñarse bien en diversas situaciones, por ejemplo, con carnes rojas o pastas, junto a un plato principal o durante la sobremesa, etc. Es un atributo siempre positivo.",
      img: "https://vinocular.files.wordpress.com/2016/04/1.jpg",
      stock: 5,
    },
  ]);
  await Promise.all(promises);
  console.log("SEED EXITOSO!!!");
  return;
})();
