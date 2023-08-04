import logo from './logo.svg';
import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import Grid from './components/Grid/Grid';

function App() {

    const data = [
        {
            "n": 0,
            "evento": "INICIO",
            "reloj": 0.0,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 9.518121363251916,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "LIBRE"
            },
            "colaHF": 0,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": []
        },
        {
            "n": 1,
            "evento": "LLEGADA_BASKET",
            "reloj": 9.518121363251916,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 20.271603805755074,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 9.518121363251916,
                "rnd_fin_juego1": 0.8776360759891684,
                "rnd_fin_juego2": 0.27962760187353797,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 0,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 29.423557743577128,
                    "llego": true,
                    "estado": "JUGANDO"
                }
            ]
        },
        {
            "n": 2,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 18.9170206342181,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 20.271603805755074,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 9.518121363251916,
                "rnd_fin_juego1": 0.8776360759891684,
                "rnd_fin_juego2": 0.27962760187353797,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 29.423557743577128,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 3,
            "evento": "LLEGADA_BASKET",
            "reloj": 20.271603805755074,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.14981362086436079,
                "rnd_llegada2": 0.49725518309741623,
                "llegada": 26.375145199709976,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 9.518121363251916,
                "rnd_fin_juego1": 0.8776360759891684,
                "rnd_fin_juego2": 0.27962760187353797,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 1,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 29.423557743577128,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 4,
            "evento": "LLEGADA_BASKET",
            "reloj": 26.375145199709976,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.14981362086436079,
                "rnd_llegada2": 0.49725518309741623,
                "llegada": 36.44235094091483,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.9048438863216288,
                "rnd_llegada2": 0.3405565316942394,
                "llegada": 9.518121363251916,
                "rnd_fin_juego1": 0.8776360759891684,
                "rnd_fin_juego2": 0.27962760187353797,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 2,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 6.103541393954902,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 29.423557743577128,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 5,
            "evento": "FIN_JUEGO",
            "reloj": 29.423557743577128,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.14981362086436079,
                "rnd_llegada2": 0.49725518309741623,
                "llegada": 36.44235094091483,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 34.42355774357713,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 1,
            "colaB": 2,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 12.200366481689205,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 6,
            "evento": "FIN_LIMPIEZA",
            "reloj": 34.42355774357713,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.14981362086436079,
                "rnd_llegada2": 0.49725518309741623,
                "llegada": 36.44235094091483,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 0,
            "colaB": 2,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 22.200366481689205,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 62.438019678497966,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 7,
            "evento": "LLEGADA_BASKET",
            "reloj": 36.44235094091483,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.07490768702791006,
                "rnd_llegada2": 0.16705051543882699,
                "llegada": 48.70945385483255,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 0,
            "colaB": 3,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 26.237952876364606,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 62.438019678497966,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 8,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 40.99077001405989,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 55.83403522754,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.07490768702791006,
                "rnd_llegada2": 0.16705051543882699,
                "llegada": 48.70945385483255,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 3,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 39.88321009579979,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 62.438019678497966,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 9,
            "evento": "LLEGADA_BASKET",
            "reloj": 48.70945385483255,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 55.83403522754,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.07490768702791006,
                "rnd_llegada2": 0.16705051543882699,
                "llegada": 62.658154208510595,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 4,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 63.03926161811778,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 62.438019678497966,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 10,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 55.83403522754,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 78.13605866301222,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.07490768702791006,
                "rnd_llegada2": 0.16705051543882699,
                "llegada": 62.658154208510595,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 18.9170206342181,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 2,
            "colaB": 4,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 91.53758710894755,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 62.438019678497966,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 11,
            "evento": "FIN_JUEGO",
            "reloj": 62.438019678497966,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 78.13605866301222,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.07490768702791006,
                "rnd_llegada2": 0.16705051543882699,
                "llegada": 62.658154208510595,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 67.43801967849797,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 2,
            "colaB": 4,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 117.95352491277941,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 12,
            "evento": "LLEGADA_BASKET",
            "reloj": 62.658154208510595,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 78.13605866301222,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.18581412916927498,
                "rnd_llegada2": 0.8397947193362126,
                "llegada": 74.62028807146753,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 67.43801967849797,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 2,
            "colaB": 5,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 118.83406303282996,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 13,
            "evento": "FIN_LIMPIEZA",
            "reloj": 67.43801967849797,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 78.13605866301222,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.18581412916927498,
                "rnd_llegada2": 0.8397947193362126,
                "llegada": 74.62028807146753,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 5,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 142.7333903827668,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 14,
            "evento": "LLEGADA_BASKET",
            "reloj": 74.62028807146753,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.018566373802480718,
                "rnd_llegada2": 0.4331763533774441,
                "llegada": 78.13605866301222,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.18581412916927498,
                "rnd_llegada2": 0.8397947193362126,
                "llegada": 81.51962717620168,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 6,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 178.64473234761462,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 15,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 78.13605866301222,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.2852744789431729,
                "rnd_llegada2": 0.41184091541352486,
                "llegada": 95.4420136167973,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.18581412916927498,
                "rnd_llegada2": 0.8397947193362126,
                "llegada": 81.51962717620168,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 2,
            "colaB": 6,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 199.73935589688278,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 78.13605866301222,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 16,
            "evento": "LLEGADA_BASKET",
            "reloj": 81.51962717620168,
            "futbolALlegar": {
                "rnd_llegada": 0.9473691969955245,
                "llegada": 88.33361166570249,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.2852744789431729,
                "rnd_llegada2": 0.41184091541352486,
                "llegada": 95.4420136167973,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.6555447603590974,
                "rnd_llegada2": 0.7258593610696394,
                "llegada": 91.24190422056589,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 2,
            "colaB": 7,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 220.04076697601954,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 78.13605866301222,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 81.51962717620168,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 17,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 88.33361166570249,
            "futbolALlegar": {
                "rnd_llegada": 0.5938361335639118,
                "llegada": 115.36356933264955,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.2852744789431729,
                "rnd_llegada2": 0.41184091541352486,
                "llegada": 95.4420136167973,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.6555447603590974,
                "rnd_llegada2": 0.7258593610696394,
                "llegada": 91.24190422056589,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 3,
            "colaB": 7,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 267.7386584025252,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 78.13605866301222,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 81.51962717620168,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada": 0.9473691969955245,
                    "llegada": 88.33361166570249,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 18,
            "evento": "LLEGADA_BASKET",
            "reloj": 91.24190422056589,
            "futbolALlegar": {
                "rnd_llegada": 0.5938361335639118,
                "llegada": 115.36356933264955,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.2852744789431729,
                "rnd_llegada2": 0.41184091541352486,
                "llegada": 95.4420136167973,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.6555447603590974,
                "rnd_llegada2": 0.7258593610696394,
                "llegada": 99.42498938756334,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 3,
            "colaB": 8,
            "acumuladorEsperaFutbol": 2.9082925548633938,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 288.096706286569,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 78.13605866301222,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 81.51962717620168,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada": 0.9473691969955245,
                    "llegada": 88.33361166570249,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.6555447603590974,
                    "rnd_llegada2": 0.7258593610696394,
                    "llegada": 91.24190422056589,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 19,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 95.4420136167973,
            "futbolALlegar": {
                "rnd_llegada": 0.5938361335639118,
                "llegada": 115.36356933264955,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "rnd_llegada1": 0.2852744789431729,
                "rnd_llegada2": 0.41184091541352486,
                "llegada": 117.10831164365999,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "rnd_llegada1": 0.6555447603590974,
                "rnd_llegada2": 0.7258593610696394,
                "llegada": 99.42498938756334,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "llego": false,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "rnd_llegada1": 0.5045137929917881,
                "rnd_llegada2": 0.3265972988237069,
                "llegada": 40.99077001405989,
                "rnd_fin_juego1": 0.11762907392937505,
                "rnd_fin_juego2": 0.45466081707232275,
                "fin_juego": 1.7976931348623157E308,
                "llego": true,
                "estado": "FIN_JUEGO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 4,
            "colaB": 8,
            "acumuladorEsperaFutbol": 7.108401951094805,
            "acumuladorEsperaHandBall": 0.0,
            "acumuladorEsperaBasketBall": 321.69758145642027,
            "acumuladorCantidadFutbolLlegaron": 0,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaron": [
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 9.518121363251916,
                    "rnd_fin_juego1": 0.8776360759891684,
                    "rnd_fin_juego2": 0.27962760187353797,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 18.9170206342181,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 1.7976931348623157E308,
                    "llego": true,
                    "estado": "FIN_JUEGO"
                },
                {
                    "rnd_llegada1": 0.9048438863216288,
                    "rnd_llegada2": 0.3405565316942394,
                    "llegada": 20.271603805755074,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 26.375145199709976,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.14981362086436079,
                    "rnd_llegada2": 0.49725518309741623,
                    "llegada": 36.44235094091483,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.5045137929917881,
                    "rnd_llegada2": 0.3265972988237069,
                    "llegada": 40.99077001405989,
                    "rnd_fin_juego1": 0.11762907392937505,
                    "rnd_fin_juego2": 0.45466081707232275,
                    "fin_juego": 98.01946330060332,
                    "llego": true,
                    "estado": "JUGANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 48.70945385483255,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 55.83403522754,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.07490768702791006,
                    "rnd_llegada2": 0.16705051543882699,
                    "llegada": 62.658154208510595,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 74.62028807146753,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.018566373802480718,
                    "rnd_llegada2": 0.4331763533774441,
                    "llegada": 78.13605866301222,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.18581412916927498,
                    "rnd_llegada2": 0.8397947193362126,
                    "llegada": 81.51962717620168,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada": 0.9473691969955245,
                    "llegada": 88.33361166570249,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.6555447603590974,
                    "rnd_llegada2": 0.7258593610696394,
                    "llegada": 91.24190422056589,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                },
                {
                    "rnd_llegada1": 0.2852744789431729,
                    "rnd_llegada2": 0.41184091541352486,
                    "llegada": 95.4420136167973,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "llego": true,
                    "estado": "ESPERANDO"
                }
            ]
        }
    ];

  const filterSimulationData = (objeto, leaf) => {
    const newObjeto = { ...objeto }; // Create a shallow copy of the original object

    if(!leaf){
      newObjeto.ensambladores = objeto.ensambladores.map(obj => filterSimulationData(obj, true));
      newObjeto.hornos = objeto.hornos.map(obj => filterSimulationData(obj, true));
    }

    for (const atributo in objeto) {
      if (typeof newObjeto[atributo] === "number") {
        if(newObjeto[atributo] >= Number.MAX_VALUE){
          newObjeto[atributo] = "";
          continue;
        }
        newObjeto[atributo] = Number(newObjeto[atributo].toFixed(4));
      }
    }
    return newObjeto;
  }

  return (
    <div className="App">
      <SimulationForm></SimulationForm>
    </div>
  );
}

export default App;
