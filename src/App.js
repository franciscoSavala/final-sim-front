import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import Grid from './components/Grid/Grid';
import { useState } from 'react';

function App() {

    const data = [
        {
            "n": 0,
            "evento": "INICIO",
            "reloj": 0.0,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.02695987577875969,
                "llegada": 0.8198988002678546,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
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
            "llegaronFutbolHandBall": [],
            "llegaronBasketBall": []
        },
        {
            "n": 1,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 0.8198988002678546,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.02695987577875969,
                "llegada": 0.8198988002678546,
                "rnd_fin_juego1": 0.3042802457279886,
                "rnd_fin_juego2": 0.9561709644841199,
                "fin_juego": 9.30437335603686,
                "estado": "JUGANDO"
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
            "acumuladorCantidadFutbolLlegaron": 1,
            "acumuladorCantidadHandBallLlegaron": 0,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 9.30437335603686,
                    "estado": "JUGANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 2,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 6.674071146675335,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.02695987577875969,
                "llegada": 0.8198988002678546,
                "rnd_fin_juego1": 0.3042802457279886,
                "rnd_fin_juego2": 0.9561709644841199,
                "fin_juego": 9.30437335603686,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": -5.85417234640748,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 1,
            "acumuladorCantidadHandBallLlegaron": 1,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 9.30437335603686,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 3,
            "evento": "FIN_JUEGO",
            "reloj": 9.30437335603686,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 14.30437335603686,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 1,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": -3.223870137045954,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 1,
            "acumuladorCantidadHandBallLlegaron": 1,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 4,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 11.78470520477506,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 14.30437335603686,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 2,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 2.0367342816770977,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 1,
            "acumuladorCantidadHandBallLlegaron": 2,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 5,
            "evento": "FIN_LIMPIEZA",
            "reloj": 14.30437335603686,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 1,
            "colaB": 0,
            "acumuladorEsperaFutbol": 0.0,
            "acumuladorEsperaHandBall": 4.556402432938898,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 1,
            "acumuladorCantidadHandBallLlegaron": 2,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 6,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 16.020822723829745,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5240823146731491,
                "llegada": 38.2961338145429,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 2,
            "colaB": 0,
            "acumuladorEsperaFutbol": -1.716449367792885,
            "acumuladorEsperaHandBall": 11.312188103255384,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 2,
            "acumuladorCantidadHandBallLlegaron": 2,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 7,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 19.686607896217385,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5240823146731491,
                "llegada": 38.2961338145429,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 24.49787354946574,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 3,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1.9493358045947549,
            "acumuladorEsperaHandBall": 19.784423141364755,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 2,
            "acumuladorCantidadHandBallLlegaron": 3,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 8,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 24.49787354946574,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5240823146731491,
                "llegada": 38.2961338145429,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.6255023943390324,
                "rnd_llegada2": 0.8192256791994855,
                "llegada": 30.31424880423367,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 4,
            "colaB": 0,
            "acumuladorEsperaFutbol": 14.09217180261839,
            "acumuladorEsperaHandBall": 40.39949417749776,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 2,
            "acumuladorCantidadHandBallLlegaron": 4,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 9,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 30.31424880423367,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5240823146731491,
                "llegada": 38.2961338145429,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.6255023943390324,
                "rnd_llegada2": 0.8192256791994855,
                "llegada": 33.55722506705156,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 5,
            "colaB": 0,
            "acumuladorEsperaFutbol": 36.86264870865831,
            "acumuladorEsperaHandBall": 87.0811126829117,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 2,
            "acumuladorCantidadHandBallLlegaron": 5,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 10,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 33.55722506705156,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5240823146731491,
                "llegada": 38.2961338145429,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3208265966347523,
                "rnd_llegada2": 0.9013464574573162,
                "llegada": 41.011938828182636,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 6,
            "colaB": 0,
            "acumuladorEsperaFutbol": 68.69247713228405,
            "acumuladorEsperaHandBall": 166.757160995851,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 2,
            "acumuladorCantidadHandBallLlegaron": 6,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 11,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 38.2961338145429,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.1760502695847802,
                "llegada": 44.10550654588191,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3208265966347523,
                "rnd_llegada2": 0.9013464574573162,
                "llegada": 41.011938828182636,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 7,
            "colaB": 0,
            "acumuladorEsperaFutbol": 103.76528181872769,
            "acumuladorEsperaHandBall": 286.34263436033643,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 3,
            "acumuladorCantidadHandBallLlegaron": 6,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 12,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 41.011938828182636,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.1760502695847802,
                "llegada": 44.10550654588191,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3208265966347523,
                "rnd_llegada2": 0.9013464574573162,
                "llegada": 44.260020923542015,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 8,
            "colaB": 0,
            "acumuladorEsperaFutbol": 153.74751402743345,
            "acumuladorEsperaHandBall": 440.4858715168375,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 3,
            "acumuladorCantidadHandBallLlegaron": 7,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 13,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 44.10550654588191,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3208265966347523,
                "rnd_llegada2": 0.9013464574573162,
                "llegada": 44.260020923542015,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 9,
            "colaB": 0,
            "acumuladorEsperaFutbol": 212.254923981118,
            "acumuladorEsperaHandBall": 629.4853450613726,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 7,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 14,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 44.260020923542015,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.012055628675436969,
                "rnd_llegada2": 0.42497816151400136,
                "llegada": 43.96315042293794,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 10,
            "colaB": 0,
            "acumuladorEsperaFutbol": 280.50658022088066,
            "acumuladorEsperaHandBall": 837.818796800404,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 8,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 15,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 43.96315042293794,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.012055628675436969,
                "rnd_llegada2": 0.42497816151400136,
                "llegada": 51.662956313132895,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 6.674071146675335,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 44.88198483208179,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 11,
            "colaB": 0,
            "acumuladorEsperaFutbol": 348.33116809181143,
            "acumuladorEsperaHandBall": 1045.4526261794317,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 9,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 44.88198483208179,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 16,
            "evento": "FIN_JUEGO",
            "reloj": 44.88198483208179,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.012055628675436969,
                "rnd_llegada2": 0.42497816151400136,
                "llegada": 51.662956313132895,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 49.88198483208179,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 11,
            "colaB": 0,
            "acumuladorEsperaFutbol": 418.02164768836155,
            "acumuladorEsperaHandBall": 1258.0621668267775,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 9,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 17,
            "evento": "FIN_LIMPIEZA",
            "reloj": 49.88198483208179,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.012055628675436969,
                "rnd_llegada2": 0.42497816151400136,
                "llegada": 51.662956313132895,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 10,
            "colaB": 0,
            "acumuladorEsperaFutbol": 505.4686305123432,
            "acumuladorEsperaHandBall": 1446.8278234926606,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 9,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 18,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 51.662956313132895,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.15339412795315688,
                "rnd_llegada2": 0.7326795375055358,
                "llegada": 56.24232866768771,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 11,
            "colaB": 0,
            "acumuladorEsperaFutbol": 613.2585277794782,
            "acumuladorEsperaHandBall": 1681.2793090448504,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 10,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 19,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 56.24232866768771,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.15339412795315688,
                "rnd_llegada2": 0.7326795375055358,
                "llegada": 57.39251961467529,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 12,
            "colaB": 0,
            "acumuladorEsperaFutbol": 740.1294565534308,
            "acumuladorEsperaHandBall": 1962.0341729273327,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 11,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 20,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 57.39251961467529,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.38711780026814413,
                "rnd_llegada2": 0.6093088773743592,
                "llegada": 60.26184326807422,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 13,
            "colaB": 0,
            "acumuladorEsperaFutbol": 884.1890752320107,
            "acumuladorEsperaHandBall": 2293.204915576709,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 12,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 21,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 60.26184326807422,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.38711780026814413,
                "rnd_llegada2": 0.6093088773743592,
                "llegada": 63.514723290357175,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 14,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1040.30723771175,
            "acumuladorEsperaHandBall": 2661.7014805765516,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 13,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 22,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 63.514723290357175,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5420080269546048,
                "llegada": 67.5326151795807,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8374633715952452,
                "rnd_llegada2": 0.71573583517982,
                "llegada": 68.26024277429671,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 15,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1214.7920112185352,
            "acumuladorEsperaHandBall": 3094.289405986612,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 4,
            "acumuladorCantidadHandBallLlegaron": 14,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 23,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 67.5326151795807,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8374633715952452,
                "rnd_llegada2": 0.71573583517982,
                "llegada": 68.26024277429671,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 16,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1407.0712085706161,
            "acumuladorEsperaHandBall": 3614.1265943347503,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 14,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 24,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 68.26024277429671,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8374633715952452,
                "rnd_llegada2": 0.71573583517982,
                "llegada": 72.09651528036629,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 17,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1618.3324838584554,
            "acumuladorEsperaHandBall": 4190.182388895447,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 15,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 25,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 72.09651528036629,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7205078319194993,
                "rnd_llegada2": 0.25546991370150973,
                "llegada": 77.04087060112117,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 18,
            "colaB": 0,
            "acumuladorEsperaFutbol": 1847.849359549437,
            "acumuladorEsperaHandBall": 4821.732612260286,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 16,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 26,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 77.04087060112117,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7205078319194993,
                "rnd_llegada2": 0.25546991370150973,
                "llegada": 83.65929440765227,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7033896576864981,
                "rnd_llegada2": 0.01050277352284179,
                "llegada": 11.78470520477506,
                "rnd_fin_juego1": 0.8110141838791199,
                "rnd_fin_juego2": 0.9254904335436582,
                "fin_juego": 79.58991556967919,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 19,
            "colaB": 0,
            "acumuladorEsperaFutbol": 2112.4887465477163,
            "acumuladorEsperaHandBall": 5571.267269879913,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 17,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 79.58991556967919,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 27,
            "evento": "FIN_JUEGO",
            "reloj": 79.58991556967919,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7205078319194993,
                "rnd_llegada2": 0.25546991370150973,
                "llegada": 83.65929440765227,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 84.58991556967919,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 19,
            "colaB": 0,
            "acumuladorEsperaFutbol": 2407.101734703247,
            "acumuladorEsperaHandBall": 6433.202931839234,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 17,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 28,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 83.65929440765227,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7825948246786069,
                "rnd_llegada2": 0.5550961586184593,
                "llegada": 87.34197138859382,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 84.58991556967919,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 20,
            "colaB": 0,
            "acumuladorEsperaFutbol": 2728.1884180849024,
            "acumuladorEsperaHandBall": 7390.345572058548,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 18,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 29,
            "evento": "FIN_LIMPIEZA",
            "reloj": 84.58991556967919,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7825948246786069,
                "rnd_llegada2": 0.5550961586184593,
                "llegada": 87.34197138859382,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.3042802457279886,
                "rnd_fin_juego2": 0.9561709644841199,
                "fin_juego": 91.17045451566194,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 19,
            "colaB": 0,
            "acumuladorEsperaFutbol": 2933.067536936886,
            "acumuladorEsperaHandBall": 8427.488212277862,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 18,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 91.17045451566194,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 30,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 87.34197138859382,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.5272504100509724,
                "llegada": 90.00829834411363,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7825948246786069,
                "rnd_llegada2": 0.5550961586184593,
                "llegada": 91.8668066580493,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.3042802457279886,
                "rnd_fin_juego2": 0.9561709644841199,
                "fin_juego": 91.17045451566194,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 20,
            "colaB": 0,
            "acumuladorEsperaFutbol": 3148.994686731694,
            "acumuladorEsperaHandBall": 9520.801628373327,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 5,
            "acumuladorCantidadHandBallLlegaron": 19,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 91.17045451566194,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 31,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 90.00829834411363,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7825948246786069,
                "rnd_llegada2": 0.5550961586184593,
                "llegada": 91.8668066580493,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.3975179846586683,
                "llegada": 16.020822723829745,
                "rnd_fin_juego1": 0.3042802457279886,
                "rnd_fin_juego2": 0.9561709644841199,
                "fin_juego": 91.17045451566194,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 21,
            "colaB": 0,
            "acumuladorEsperaFutbol": 3378.5106578942855,
            "acumuladorEsperaHandBall": 10706.227551634176,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 19,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 91.17045451566194,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 32,
            "evento": "FIN_JUEGO",
            "reloj": 91.17045451566194,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.7825948246786069,
                "rnd_llegada2": 0.5550961586184593,
                "llegada": 91.8668066580493,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 96.17045451566194,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 21,
            "colaB": 0,
            "acumuladorEsperaFutbol": 3623.3405615651495,
            "acumuladorEsperaHandBall": 11956.737688055184,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 19,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 33,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 91.8668066580493,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.18006427254848822,
                "rnd_llegada2": 0.46510466207709733,
                "llegada": 93.25201862195904,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 96.17045451566194,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 22,
            "colaB": 0,
            "acumuladorEsperaFutbol": 3875.604498491756,
            "acumuladorEsperaHandBall": 13238.146113670711,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 20,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 34,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 93.25201862195904,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.18006427254848822,
                "rnd_llegada2": 0.46510466207709733,
                "llegada": 99.05752394846985,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 96.17045451566194,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 23,
            "colaB": 0,
            "acumuladorEsperaFutbol": 4136.1946918435515,
            "acumuladorEsperaHandBall": 14555.637481235675,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 21,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 35,
            "evento": "FIN_LIMPIEZA",
            "reloj": 96.17045451566194,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.18006427254848822,
                "rnd_llegada2": 0.46510466207709733,
                "llegada": 99.05752394846985,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 22,
            "colaB": 0,
            "acumuladorEsperaFutbol": 4413.999476625797,
            "acumuladorEsperaHandBall": 15804.848900750094,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 21,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 36,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 99.05752394846985,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.36791780721079204,
                "rnd_llegada2": 0.5445109009390463,
                "llegada": 101.33913282152359,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 99.468766141539,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 23,
            "colaB": 0,
            "acumuladorEsperaFutbol": 4715.026282714086,
            "acumuladorEsperaHandBall": 17155.6723467089,
            "acumuladorEsperaBasketBall": 0.0,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 22,
            "acumuladorCantidadBasketBallLlegaron": 0,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": []
        },
        {
            "n": 37,
            "evento": "LLEGADA_BASKET",
            "reloj": 99.468766141539,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.36791780721079204,
                "rnd_llegada2": 0.5445109009390463,
                "llegada": 101.33913282152359,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 23,
            "colaB": 1,
            "acumuladorEsperaFutbol": 5029.246335305883,
            "acumuladorEsperaHandBall": 18569.16371355937,
            "acumuladorEsperaBasketBall": -0.41124219306915677,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 22,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 38,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 101.33913282152359,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.36791780721079204,
                "rnd_llegada2": 0.5445109009390463,
                "llegada": 105.55841814458877,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 24,
            "colaB": 1,
            "acumuladorEsperaFutbol": 5352.592823389895,
            "acumuladorEsperaHandBall": 20024.135282317875,
            "acumuladorEsperaBasketBall": 1.459124486915428,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 23,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 39,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 105.55841814458877,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.4863666649732119,
                "rnd_llegada2": 0.17671770812112564,
                "llegada": 111.62543983896833,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 25,
            "colaB": 1,
            "acumuladorEsperaFutbol": 5700.297919486106,
            "acumuladorEsperaHandBall": 21596.680605814312,
            "acumuladorEsperaBasketBall": 9.419143169949777,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 24,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 40,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 111.62543983896833,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.4863666649732119,
                "rnd_llegada2": 0.17671770812112564,
                "llegada": 118.776673109123,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 26,
            "colaB": 1,
            "acumuladorEsperaFutbol": 6089.148243652096,
            "acumuladorEsperaHandBall": 23379.171354982707,
            "acumuladorEsperaBasketBall": 27.665468870428867,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 25,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 41,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 118.776673109123,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.6727586416557959,
                "llegada": 123.52001678713316,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8473551529603218,
                "rnd_llegada2": 0.7795560864566701,
                "llegada": 123.98921728421556,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 27,
            "colaB": 1,
            "acumuladorEsperaFutbol": 6530.8715876762235,
            "acumuladorEsperaHandBall": 25445.3124801007,
            "acumuladorEsperaBasketBall": 59.13004953544218,
            "acumuladorCantidadFutbolLlegaron": 6,
            "acumuladorCantidadHandBallLlegaron": 26,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 42,
            "evento": "LLEGADA_FUTBOL",
            "reloj": 123.52001678713316,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8473551529603218,
                "rnd_llegada2": 0.7795560864566701,
                "llegada": 123.98921728421556,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 28,
            "colaB": 1,
            "acumuladorEsperaFutbol": 7015.429895814999,
            "acumuladorEsperaHandBall": 27785.028875026484,
            "acumuladorEsperaBasketBall": 102.48920714862032,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 26,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 43,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 123.98921728421556,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8473551529603218,
                "rnd_llegada2": 0.7795560864566701,
                "llegada": 127.85788713965111,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 19.686607896217385,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 126.57698825976254,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 29,
            "colaB": 1,
            "acumuladorEsperaFutbol": 7526.050924829238,
            "acumuladorEsperaHandBall": 30244.16458548232,
            "acumuladorEsperaBasketBall": 151.06090893689102,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 27,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 126.57698825976254,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 44,
            "evento": "FIN_JUEGO",
            "reloj": 126.57698825976254,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.8473551529603218,
                "rnd_llegada2": 0.7795560864566701,
                "llegada": 127.85788713965111,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 131.57698825976254,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 29,
            "colaB": 1,
            "acumuladorEsperaFutbol": 8051.9568112066245,
            "acumuladorEsperaHandBall": 32776.66761128126,
            "acumuladorEsperaBasketBall": 202.6895821977911,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 27,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 45,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 127.85788713965111,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.40104210515574135,
                "rnd_llegada2": 0.181825325262008,
                "llegada": 133.9808972336948,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": null,
            "jugando2": null,
            "finLimpieza": 131.57698825976254,
            "cancha": {
                "estado": "RECIBIENDO_LIMPIEZA"
            },
            "colaHF": 30,
            "colaB": 1,
            "acumuladorEsperaFutbol": 8597.206046861189,
            "acumuladorEsperaHandBall": 35400.73781473076,
            "acumuladorEsperaBasketBall": 258.18692531412677,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 28,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 127.85788713965111,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 46,
            "evento": "FIN_LIMPIEZA",
            "reloj": 131.57698825976254,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.40104210515574135,
                "rnd_llegada2": 0.181825325262008,
                "llegada": 133.9808972336948,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 24.49787354946574,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 159.8867200418578,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 29,
            "colaB": 1,
            "acumuladorEsperaFutbol": 9167.455282515752,
            "acumuladorEsperaHandBall": 37939.36888987978,
            "acumuladorEsperaBasketBall": 318.6842684304624,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 28,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 159.8867200418578,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 127.85788713965111,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 47,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 133.9808972336948,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.40104210515574135,
                "rnd_llegada2": 0.181825325262008,
                "llegada": 141.44023844285442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 24.49787354946574,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 159.8867200418578,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 30,
            "colaB": 1,
            "acumuladorEsperaFutbol": 9768.319568640534,
            "acumuladorEsperaHandBall": 40622.548298311915,
            "acumuladorEsperaBasketBall": 385.30462164084173,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 29,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 159.8867200418578,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 127.85788713965111,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.40104210515574135,
                    "rnd_llegada2": 0.181825325262008,
                    "llegada": 133.9808972336948,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 48,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 141.44023844285442,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.244611489792805,
                "rnd_llegada2": 0.9033898354559208,
                "llegada": 149.1969319579097,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 24.49787354946574,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 159.8867200418578,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 31,
            "colaB": 1,
            "acumuladorEsperaFutbol": 10418.500105680776,
            "acumuladorEsperaHandBall": 43544.84962011219,
            "acumuladorEsperaBasketBall": 461.788225034313,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 30,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 159.8867200418578,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 127.85788713965111,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.40104210515574135,
                    "rnd_llegada2": 0.181825325262008,
                    "llegada": 133.9808972336948,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.40104210515574135,
                    "rnd_llegada2": 0.181825325262008,
                    "llegada": 141.44023844285442,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        },
        {
            "n": 49,
            "evento": "LLEGADA_HANDBALL",
            "reloj": 149.1969319579097,
            "futbolALlegar": {
                "tipo": "FUTBOL",
                "rnd_llegada": 0.600046024746604,
                "llegada": 151.01219079795683,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "handBallALlegar": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.244611489792805,
                "rnd_llegada2": 0.9033898354559208,
                "llegada": 152.2824311017419,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "basketBallALlegar": {
                "tipo": "BASKET_BALL",
                "rnd_llegada1": 0.6587658230882725,
                "rnd_llegada2": 0.7030530054688803,
                "llegada": 197.7203703442442,
                "rnd_fin_juego1": 0.0,
                "rnd_fin_juego2": 0.0,
                "fin_juego": 0.0,
                "estado": "NO_LLEGO"
            },
            "jugando1": {
                "tipo": "HAND_BALL",
                "rnd_llegada1": 0.3474680761017319,
                "rnd_llegada2": 0.9896634169388657,
                "llegada": 24.49787354946574,
                "rnd_fin_juego1": 0.22065868859379267,
                "rnd_fin_juego2": 0.7875655403270695,
                "fin_juego": 159.8867200418578,
                "estado": "JUGANDO"
            },
            "jugando2": null,
            "finLimpieza": 1.7976931348623157E308,
            "cancha": {
                "estado": "OCUPADA_UN_GRUPO"
            },
            "colaHF": 32,
            "colaB": 1,
            "acumuladorEsperaFutbol": 11144.760816342092,
            "acumuladorEsperaHandBall": 46855.011151226994,
            "acumuladorEsperaBasketBall": 553.4878631519991,
            "acumuladorCantidadFutbolLlegaron": 7,
            "acumuladorCantidadHandBallLlegaron": 31,
            "acumuladorCantidadBasketBallLlegaron": 1,
            "llegaronFutbolHandBall": [
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.02695987577875969,
                    "llegada": 0.8198988002678546,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 6.674071146675335,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7033896576864981,
                    "rnd_llegada2": 0.01050277352284179,
                    "llegada": 11.78470520477506,
                    "rnd_fin_juego1": 0.8110141838791199,
                    "rnd_fin_juego2": 0.9254904335436582,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.3975179846586683,
                    "llegada": 16.020822723829745,
                    "rnd_fin_juego1": 0.3042802457279886,
                    "rnd_fin_juego2": 0.9561709644841199,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 19.686607896217385,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 1.7976931348623157E308,
                    "estado": "FIN_JUEGO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3474680761017319,
                    "rnd_llegada2": 0.9896634169388657,
                    "llegada": 24.49787354946574,
                    "rnd_fin_juego1": 0.22065868859379267,
                    "rnd_fin_juego2": 0.7875655403270695,
                    "fin_juego": 159.8867200418578,
                    "estado": "JUGANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 30.31424880423367,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6255023943390324,
                    "rnd_llegada2": 0.8192256791994855,
                    "llegada": 33.55722506705156,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5240823146731491,
                    "llegada": 38.2961338145429,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 41.011938828182636,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.1760502695847802,
                    "llegada": 44.10550654588191,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.3208265966347523,
                    "rnd_llegada2": 0.9013464574573162,
                    "llegada": 44.260020923542015,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 43.96315042293794,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.012055628675436969,
                    "rnd_llegada2": 0.42497816151400136,
                    "llegada": 51.662956313132895,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 56.24232866768771,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.15339412795315688,
                    "rnd_llegada2": 0.7326795375055358,
                    "llegada": 57.39251961467529,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 60.26184326807422,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.38711780026814413,
                    "rnd_llegada2": 0.6093088773743592,
                    "llegada": 63.514723290357175,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5420080269546048,
                    "llegada": 67.5326151795807,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 68.26024277429671,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8374633715952452,
                    "rnd_llegada2": 0.71573583517982,
                    "llegada": 72.09651528036629,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 77.04087060112117,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7205078319194993,
                    "rnd_llegada2": 0.25546991370150973,
                    "llegada": 83.65929440765227,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 87.34197138859382,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.5272504100509724,
                    "llegada": 90.00829834411363,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.7825948246786069,
                    "rnd_llegada2": 0.5550961586184593,
                    "llegada": 91.8668066580493,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 93.25201862195904,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.18006427254848822,
                    "rnd_llegada2": 0.46510466207709733,
                    "llegada": 99.05752394846985,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 101.33913282152359,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.36791780721079204,
                    "rnd_llegada2": 0.5445109009390463,
                    "llegada": 105.55841814458877,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 111.62543983896833,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.4863666649732119,
                    "rnd_llegada2": 0.17671770812112564,
                    "llegada": 118.776673109123,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.6727586416557959,
                    "llegada": 123.52001678713316,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 123.98921728421556,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.8473551529603218,
                    "rnd_llegada2": 0.7795560864566701,
                    "llegada": 127.85788713965111,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.40104210515574135,
                    "rnd_llegada2": 0.181825325262008,
                    "llegada": 133.9808972336948,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.40104210515574135,
                    "rnd_llegada2": 0.181825325262008,
                    "llegada": 141.44023844285442,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                },
                {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.244611489792805,
                    "rnd_llegada2": 0.9033898354559208,
                    "llegada": 149.1969319579097,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ],
            "llegaronBasketBall": [
                {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.6587658230882725,
                    "rnd_llegada2": 0.7030530054688803,
                    "llegada": 99.468766141539,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "ESPERANDO"
                }
            ]
        }
    ];

  const filterSimulationData = (objeto, leaf) => {
    const newObjeto = { ...objeto }; // Create a shallow copy of the original object

    if(!leaf){
      newObjeto.llegaronFutbolHandBall = objeto.llegaronFutbolHandBall.map(obj => filterSimulationData(obj, true));
      newObjeto.llegaronBasketBall = objeto.llegaronBasketBall.map(obj => filterSimulationData(obj, true));
    }

    for (const atributo in objeto) {
      if (typeof newObjeto[atributo] === "number") {
        if (newObjeto[atributo] >= Number.MAX_VALUE) {
          newObjeto[atributo] = "";
          continue;
        }
        newObjeto[atributo] = Number(newObjeto[atributo].toFixed(4));
      }
    }
    return newObjeto;
  }

  const handleFormSubmit = (formData) => {
    makeRequest(formData);
  };
  

  const makeRequest = async (formData) => {
    const apiUrl = 'http://localhost:8080/api/v1'; // Reemplaza esta URL con la URL real de tu API
    const username = 'fran-savala';
    const password = 'MichitoSantos23GalletitaDeamon';

    const base64Credentials = btoa(`${username}:${password}`);

    try {
      let res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Basic ${base64Credentials}`,
        },
        body: JSON.stringify({ ...formData })
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setTable(resJson.data);
      }
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div className="App">
      <SimulationForm></SimulationForm>
      <Grid data={data.map(objeto => filterSimulationData(objeto, false))} 
      cantidadBasketBall={data[data.length - 1].llegaronBasketBall.length}
      cantidadFutbolHandball={data[data.length - 1].llegaronFutbolHandBall.length}></Grid>
    </div>
  );
}

export default App;
