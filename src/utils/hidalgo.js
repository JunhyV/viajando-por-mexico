/* import img from '../assets/' */
import logo from '../assets/hidalgo/hidalgo-logo.png'
import hidalgoMapa from "../assets/hidalgo/hidalgo-mapa.png";
import abeto from "../assets/hidalgo/abeto.jpeg";
import conejo from "../assets/hidalgo/conejo.jpg";
import copal from "../assets/hidalgo/copal.jpg";
import dinoparque from "../assets/hidalgo/dinoparque.webp";
import encino from "../assets/hidalgo/encino.jpg";
import graficaHDL from "../assets/hidalgo/graficaHDL.jpg";
import collage from "../assets/hidalgo/hidalgo.jpg";
import lobo from "../assets/hidalgo/lobo.webp";
import mezquite from "../assets/hidalgo/mezquite.jpg";
import pino from "../assets/hidalgo/pino.jpg";
import soto from "../assets/hidalgo/soto.webp";
import tigrillo from "../assets/hidalgo/tigrillo.jpeg";
import victor from "../assets/hidalgo/victor.jpg";
import kevin from "../assets/hidalgo/kevin.jpg";
import ximena from "../assets/hidalgo/ximena.jpg";
import edwin from "../assets/hidalgo/edwin.jpg";
import estefany from "../assets/hidalgo/estefany.jpg";
import teamhidalgo from "../assets/hidalgo/teamhidalgo.jpg";
import venado from "../assets/hidalgo/venado.jpg";

export const infoHidalgo = {
    nombre: 'Hidalgo',
    name: 'hidalgo',
    sobre: 'el estado de hidalgo cuenta con una superficie de 20,813 km 2 seocaliza en y el centro oriente del pais el clima es seco, semiseco y templado subhumedo. ',
    municipios: {
        1: 'cha pulhuacan',
        2: 'orzatlan',
        3: 'huejutla de reyrs',
        4: 'jacala',
        5: 'tlanchinol',
    },
    mapa: hidalgoMapa,
    poblacion: {
        numero: '',
        nombre: 'tres  millones  ochenta  y   dos mil  ochocientos    cuarenta      y  uno  ',
    },
    grafica: graficaHDL,
    fauna: [
        {
            nombre: 'tigrillo',
            img: tigrillo,
        },
        {
            nombre: 'lobo',
            img: lobo,
        },
        {
            nombre: 'venado',
            img: venado,
        },
        {
            nombre: 'armadillo',
            img: '',
        },
        {
            nombre: 'conejo',
            img: conejo,
        },
    ],
    flora: [
        {
            nombre: 'abeto',
            img: abeto,
        },
        {
            nombre: 'pino',
            img: pino,
        },
        {
            nombre: 'mezquite',
            img: mezquite,
        },
        {
            nombre: 'copal',
            img: copal,
        },
        {
            nombre: 'encino',
            img: encino,
        },
    ],
    turismo: [
        {
            nombre: 'dino parque en el museo de rehilete',
            actividades: {                                                                                                                                         1: 'exposiciones temporales',
                2: 'luz y optical',
                3: 'agua con ciencias',
            },
            img: dinoparque,
        },
        {
            nombre: 'pachuco soto',
            actividades: {
                1: 'conoser el museo interactivo mundo de futbol',
                2: 'conoser el monumento decristo rey',
                3: 'parque david ben gurian',
            },
            img: soto,
        },
    ],
    regionalismos: {
        1:  ' abitachar : alertar',
        2:  "aposcua : echar a perder",
        3: ' afufadd : enojada',
        4: 'chafa  : malo',
        5: ' pana:  amigo',
        definicion: '',
    },
    collage: collage,
    monumentos: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
    },
    integrantes: [
        {
            nombre: 'kevin',
            hobby: 'me gusta jugar con mis amigos, salir de paseo y jugar en el celular roblox',
            img: kevin,
        },
        {
            nombre: 'edwin',
            hobby: 'Me gustan las matematicas, jugar en el telefono free fire y brincar la soga',
            img: edwin,
        },
        {
            nombre: 'victor',
            hobby: 'me gusta jugar con mis amigos, dibujar y ver videos en youtube',
            img: victor,
        },
        {
            nombre: 'estefany',
            hobby: 'me gusta jugar con mi hermana, brincar en el trampolin y pasear con mis primos en la bicicleta',
            img: estefany,
        },
        {
            nombre: 'ximena',
            hobby: '',
            img: ximena,
        },
    ], 
    team: teamhidalgo,
    logo: logo,
}