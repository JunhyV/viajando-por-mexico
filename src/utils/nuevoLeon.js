/* import img from '../assets/' */
import logo from '../assets/nuevoLeon/nuevoLeon-logo.png';
import nuevoLeonMapa from "../assets/nuevoLeon/nuevoLeon-mapa.png";
import cacomixtle from "../assets/nuevoLeon/cacomixtle.jpg";
import casahuate from "../assets/nuevoLeon/casahuate.jpg";
import chilacayote from "../assets/nuevoLeon/chilacayote.jpeg";
import damiana from "../assets/nuevoLeon/damiana.jpg";
import estafiate from "../assets/nuevoLeon/estafiate.jpg";
import gatomontes from "../assets/nuevoLeon/gato-montes.webp";
import nopal from "../assets/nuevoLeon/nopal.jpg";
import pajarocarpintero from "../assets/nuevoLeon/pajaro-carpintero.jpg";
import ratacanguro from "../assets/nuevoLeon/rata-canguro.jpg";
import tortugadesierto from "../assets/nuevoLeon/tortuga-desierto.jpg";
import cascada from "../assets/nuevoLeon/cascada.webp";
import cerro from "../assets/nuevoLeon/cerro.jpg";
import collage from "../assets/nuevoLeon/nuevoLeon.jpg";
import alexander from "../assets/nuevoLeon/alexander.jpg";
import saul from "../assets/nuevoLeon/saul.jpg";
import yacob from "../assets/nuevoLeon/yacob.jpg";
import antonio from "../assets/nuevoLeon/antonio.jpg";
import iker from "../assets/nuevoLeon/iker.jpg";
import teamnuevoleon from "../assets/nuevoLeon/teamnuevoleon.jpg";
import graficaNL from "../assets/nuevoLeon/graficaNL.jpg";


export const infoNuevoLeon = {
    nombre: 'Nuevo León',
    name: 'nuevoLeon',
    sobre: 'nuevo leon es un estado que se destaca por sus habitantes personas trabajadoras emprendedoras sinceras y hospitalarias estaactitud ha creado un lugar cargado de oportuninades',
    municipios: {
        1: 'apocada',
        2: 'guadalupe',
        3: 'garcia',
        4: 'juarez',
        5: 'linares'
    },
    mapa: nuevoLeonMapa,
    poblacion: {
        numero: '5 784 000',
        nombre: 'cinco millones setecien cinco millones y cuatro mil ',
    },
    grafica: graficaNL,
    fauna: [
        {
            nombre: 'rata canguro',
            img: ratacanguro,
        },
        {
            nombre:'pajaro carpintero ',
            img: pajarocarpintero,
        },
        {
            nombre: 'gato montes',
            img: gatomontes,
        },
        {
            nombre: 'tortuga del desierto',
            img: tortugadesierto,
        },
        {
            nombre: 'caco mixtle',
            img: cacomixtle,
        },
    ],
    flora: [
        {
            nombre: 'casahuate prieto',
            img: casahuate,
        },
        {
            nombre: 'damiana',
            img: damiana,
        },
        {
            nombre: 'estafiate',
            img: estafiate,
        },
        {
            nombre: 'nopal',
            img: nopal,
        },
        {
            nombre: 'chilacayote',
            img: chilacayote,
        },
    ],
    turismo: [
        {
            nombre: 'cascada cola de caballo',
            actividades: {
                1: 'mirar la cascada',
                2: 'nadar ',
                3: 'ver el bonito lugar',
            },
            img: cascada,
        },
        {
            nombre: 'cerro de la silla',
            actividades: {
                1: 'subir a ver la vista',              
                2: 'tirarse del cerro',
                3: 'ver el cerro',
            },
            img: cerro,
        },
    ],
    regionalismos: {
        1: 'luki: rraspado',
        2: 'feria: dinero',
        3: 'jale: trabajo',
        4: 'te la bañasteÑ te pasaste',
        5: 'eres bien licha: bien chismoso',
        definicion: 'dependido de la sonde la que estas o parte de otros paises',
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
            nombre: 'Alexander',
            hobby: '',
            img: alexander,
        },
        {
            nombre: 'Iker',
            hobby: 'Jugar futbol con mi hermano, ver peliculas y escuchar musica',
            img: iker,
        },
        {
            nombre: 'Saúl',
            hobby: 'veo peliculas, escucho musica y juego free fire',
            img: saul,
        },
        {
            nombre: 'Yacob',
            hobby: 'me gusta jugar futbol, ver peliculas y jugar free fire',
            img: yacob,
        },
        {
            nombre: 'Antonio',
            hobby: 'ver peliculas, jugar con el celular y jugar futbol con mis amigos',
            img: antonio,
        },
        {
            nombre: 'Joshua',
            hobby: 'jugar futbol con mi tio o mi hermano en la play, escuchar musica y ver videos en youtube',
            img: '',
        },
    ],
    team: teamnuevoleon,
    logo: logo,
}