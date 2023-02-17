/* import img from '../assets/'; */
import logo from "../assets/michoacan/michoacan-logo.png";
import michoacanMapa from "../assets/michoacan/michoacan-mapa.png";
import graficaMI from "../assets/michoacan/graficaMI.jpg";
import collage from "../assets/michoacan/michoacan.jpg";
import fernanda from "../assets/michoacan/fernanda.jpg";
import yuri from "../assets/michoacan/yuri.jpg";
import uriel from "../assets/michoacan/uriel.jpg";
import kenia from "../assets/michoacan/kenia.jpg";
import hector from "../assets/michoacan/hector.jpg";
import pino from "../assets/michoacan/pino.jpg";
import girasol from "../assets/michoacan/girasol.jpg";
import rosas from "../assets/michoacan/rosas.jpeg";
import acuario from "../assets/michoacan/acuario.jpg";
import patzcuaro from "../assets/michoacan/patzcuaro.jpg";
import perro from "../assets/michoacan/perro.jpg";
import pajaro from "../assets/michoacan/pajaro.jpg";
import cotorro from "../assets/michoacan/cotorro.jpg";
import cactus from "../assets/michoacan/cactus.jpg";
import guayabo from "../assets/michoacan/guayabo.jpeg";
import mariposa from "../assets/michoacan/mariposa.webp";
import teammichoacan from "../assets/michoacan/teammichoacan.jpg";

export const infoMichoacan = {
  nombre: "Michoacán",
  name: "michoacan",
  sobre: "el estado de michoacan ",
  municipios: {
    1: "bribeñas",
    2: "aguila",
    3: "juares",
    4: "madero",
    5: "morelia",
  },
  mapa: michoacanMapa,
  grafica: graficaMI,
  poblacion: {
    numero: 4749000,
    nombre: "cuatro millones setecientos cuarenta y nueve mil",
  },
  fauna: [
    {
      nombre: "mariposa monarca",
      img: mariposa,
    },
    {
      nombre: "perros",
      img: perro,
    },
    {
      nombre: "cralos",
      img: "",
    },
    {
      nombre: "pajaros amarillo",

      img: pajaro,
    },
    {
      nombre: "cotorros",
      img: cotorro,
    },
  ],
  flora: [
    {
      nombre: "captus",
      img: cactus,
    },
    {
      nombre: "arboles de guallaba",
      img: guayabo,
    },
    {
      nombre: "pinos",
      img: pino,
    },
    {
      nombre: "girasoles",
      img: girasol,
    },
    {
      nombre: "rosas",
      img: rosas,
    },
  ],
  turismo: [
    {
      nombre: "acuario",
      actividades: {
        1: "ver peses",
        2: "ver todo",
        3: "ver los delfines",
      },
      img: acuario,
    },
    {
      nombre: "lago de pazcuaro",
      actividades: {
        1: "ver lo que hay",
        2: "divertirse",
        3: "ver el lago",
      },
      img: patzcuaro,
    },
  ],
  regionalismos: {
    1: "bidon : barril",
    2: "bujar :bufar ",
    3: "cabecera :almuada ",
    4: "capear :cachar ",
    5: "copetona :mujer rica ",
    definicion:
      "como rejionalismo se conoce la jendencia o movimiento que se adeseje a las condiciones neoecidades y caracteristicas espesificas de cada region",
  },
  collage: collage,
  monumentos: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  },
  integrantes: [
    {
      nombre: "hector",
      hobby:
      "me gusta jugar videojuegos como freefire, salir con mis amigos al parque y tambien leer",
      img: hector,
    },
    {
      nombre: "fernanda",
      hobby:
      "Hago y veo tiktoks, tambien veo la tele y salir con mis hermanas y papas a la calle",
      img: fernanda,
    },
    {
      nombre: "uriel",
      hobby:
      "me gusta jugar con mi hermano, ver videos en youtube de cuyalquier cosa y estudiar",
      img: uriel,
    },
    {
      nombre: "kenia",
      hobby:
      "ver series en netflix, jugar con mis hermanos y hermanas, y hacer dibujos",
      img: kenia,
    },
    {
      nombre: "Victoria",
      hobby: "me gusta dibujar, salir a pasear con mis papas y dormir",
      img: '',
    },
    {
      nombre: "yuri",
      hobby: "",
      img: yuri,
    },
  ],
  team: teammichoacan,
  logo: logo,
};
