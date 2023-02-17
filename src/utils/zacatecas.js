/* import img from '../assets/' */
import logo from '../assets/zacatecas/zacatecas-logo.webp';
import zacatecasMapa from "../assets/zacatecas/zacatecas-mapa.png";
import cedron from '../assets/zacatecas/cedron.jpg'
import gobernadora from '../assets/zacatecas/gobernadora.jpeg'
import heno from '../assets/zacatecas/heno.jpeg'
import liebre from '../assets/zacatecas/liebre.jpg'
import pinoAzul from '../assets/zacatecas/pinoAzul.jpg'
import pirul from '../assets/zacatecas/pirul.jpg'
import puma from '../assets/zacatecas/puma.jpg'
import rata from '../assets/zacatecas/rata.png'
import vibora from '../assets/zacatecas/vibora.jpeg'
import zorra from '../assets/zacatecas/zorra.jpg'
import graficaZA from '../assets/zacatecas/graficaZA.jpg'
import collage from '../assets/zacatecas/zacatecas.jpg'
import galeria from '../assets/zacatecas/galeria.jpg'
import museo from '../assets/zacatecas/museo.jpg'
import camilo from '../assets/zacatecas/camilo.jpg'
import ashley from '../assets/zacatecas/ashley.jpg'
import donovan from '../assets/zacatecas/donovan.jpg'
import kendra from '../assets/zacatecas/kendra.jpg'
import jade from '../assets/zacatecas/jade.jpg'
import dan from '../assets/zacatecas/dan.jpg'
import teamzacatecas from '../assets/zacatecas/teamzacatecas.jpg'

export const infoZacatecas = {
    nombre: 'Zacatecas',
    name: 'zacatecas',
    sobre: ' zacateca ses un lugar bellisimo don de que sas ermosas don ases mochas actibidas',
    municipios: {
        1: 'aposol', 
        2: 'apulco ',
        3: 'atoninga ',
        4: 'benito juares ',
        5: 'selela ',
    },
    mapa: zacatecasMapa,
    poblacion: {
        numero: '',
        nombre: '',
    },
    grafica: graficaZA,
    fauna: [
        {
            nombre: 'vibora',
            img: vibora,
        },
        {
            nombre: 'liebre',
            img: liebre,
        },
        {
            nombre: 'zorra',
            img: zorra,
        },
        {
            nombre: 'puma',
            img: puma,
        },
        {
            nombre: 'rata',
            img: rata,
        },
    ],
    flora: [
        {
            nombre: 'pirul',
            img: pirul,
        },
        {
            nombre: 'cedron',
            img: cedron,
        },
        {
            nombre: 'pino azul',
            img: pinoAzul,
        },
        {
            nombre: 'heno',
            img: heno,
        },
        {
            nombre: 'gobernadora',
            img: gobernadora,
        },
    ],
    turismo: [
        {
            nombre: 'galeria de nacimiento ',
            actividades: { 
                1: 'recorren el lugar',
                2: 'toman fotos',
                3: 'decoran algunos nacimientos',
            },
            img: galeria,
        },
        {
            nombre: 'pamo historia ',
            actividades: {
                1: 'recoren el museo',
                2: 'ver toda la historia de zacatecas durante el tiempo',
                3: '',
            },
            img: museo,
        },
    ],
    regionalismos: {
        1: ' trochle: embrabado',
        2: ' reborojo: mesclado ',
        3: ' embrabado: abrasar ',
        4: ' colorete: lavial',
        5: ' masmejor: algovueno',
        definicion: 'palabra expleccion ogilo o de lengua la velidad lengustica de una resion determinada',
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
            nombre: 'donovan',
            hobby: 'me gusta estudiar, leer y jugar minecraft o freefire',
            img: donovan,
        },
        {
            nombre: 'jade',
            hobby: 'me gusta pintar, jugar futbol y tambien me gusta leer',
            img: jade,
        },
        {
            nombre: 'dan',
            hobby: 'me gusta jugar futbol, dibujar y hablar con mi mama',
            img: dan,
        },
        {
            nombre: 'ashley',
            hobby: 'me gusta jugar futbol, tambien pintar y leer',
            img: ashley,
        },
        {
            nombre: 'camilo',
            hobby: 'me gusta jugar videojuegos, estudiar y comer tacos',
            img: camilo,
        },
        {
            nombre: 'kendra',
            hobby: 'me gusta jugar mango resbaloso, tambien dibujar y leer',
            img: kendra,
        },
    ],
    team: teamzacatecas,
    logo: logo,
}