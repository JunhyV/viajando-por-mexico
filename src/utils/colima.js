import ardilla from "../assets/colima/ardilla.jpg";
import armadillo from "../assets/colima/armadillo.webp";
import carrizalillos from "../assets/colima/carrizalillos.jpg";
import ciruelo from "../assets/colima/ciruelo.jpg";
import colimaMapa from "../assets/colima/colima-mapa.png";
import iguana from "../assets/colima/iguana.jpg";
import mango from "../assets/colima/mango.jpg";
import nance from "../assets/colima/nance.jpeg";
import ocelote from "../assets/colima/ocelote.jpg";
import palmera from "../assets/colima/palmera.jpg";
import pezEspada from "../assets/colima/pez-espada.jpeg";
import primavera from "../assets/colima/ardilla.jpg";
import rutaCafe from "../assets/colima/ruta-cafe.jpg";
import maestro from "../assets/colima/maestro.jpg";
import monumento from "../assets/colima/torito.jpeg";
import monumento1 from "../assets/colima/piedra-lisa.webp";
import monumento2 from "../assets/colima/pez.jpg";
import monumento3 from "../assets/colima/palma.jpg";
import monumento4 from "../assets/colima/figura.jpg";
import logo from "../assets/colima/colima-logo.jpeg";

export const infoColima = {
  nombre: "Colima",
  name: 'colima',
  sobre:
    "Colima, oficialmente Estado Libre y Soberano de Colima, es uno de los treinta y un estados que, junto con la Ciudad de México, forman México. Su capital es la ciudad homónima y la ciudad más poblada es Manzanillo. Está dividido territorialmente en diez municipios.",
  municipios: {
    1: "Colima",
    2: "Villa de Álvarez",
    3: "Manzanillo",
    4: "Comala",
    5: "Cuauhtémoc",
  },
  mapa: colimaMapa,
  poblacion: {
    numero: "731, 391",
    nombre: "Setecientos treinta y un mil trescientos noventa y uno",
  },
  fauna: [
    {
      nombre: "ardilla",
      img: ardilla,
    },
    {
      nombre: "pez espada",
      img: pezEspada,
    },
    {
      nombre: "ocelote",
      img: ocelote,
    },
    {
      nombre: "lagartija",
      img: iguana,
    },
    {
      nombre: "armadillo",
      img: armadillo,
    },
  ],
  flora: [
    {
      nombre: "primavera",
      img: primavera,
    },
    {
      nombre: "palmeras",
      img: palmera,
    },
    {
      nombre: "mango",
      img: mango,
    },
    {
      nombre: "cieruelo",
      img: ciruelo,
    },
    {
      nombre: "nance",
      img: nance,
    },
  ],
  turismo: [
    {
      nombre: "Ruta del café",
      actividades: {
        1: "Conocer la Ruta del Café",
        2: "Visitar la Zona Mágica",
        3: "Disfrutar de café",
      },
      img: rutaCafe,
    },
    {
      nombre: "Laguna Carrizalillos",
      actividades: {
        1: "Pasar un dia en familia",
        2: "Apreciar la naturaleza",
        3: "Dormir en cabañas",
      },
      img: carrizalillos,
    },
  ],
  regionalismos: {
    1: "Bombo: Cansado",
    2: "Guzguera: Comida chatarra",
    3: "A raiz: Descalzo",
    4: "Trambulicar: Confundir",
    5: "Aporreado: Con dolor muscular",
    definicion:
      "Son palabras o expresiones que caracterizan el lexico de una región",
  },
  monumentos: {
    1: monumento,
    2: monumento1,
    3: monumento2,
    4: monumento3,
    5: monumento4,
  },
  integrantes: [
    {
      nombre: "Jonathan",
      descripcion:
        "Maestro de primaria, le gusta dar clases, ver peliculas y dormir",
      img: maestro,
    },
  ],
  logo: logo,
};
