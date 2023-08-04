import logo from './logo.svg';
import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import Grid from './components/Grid/Grid';

function App() {

    const data = [
            {
                "n": 27,
                "evento": "LLEGADA_BASKET",
                "reloj": 100.54527210198407,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.03385290044914757,
                    "llegada": 100.55151695867244,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.3207198938364654,
                    "rnd_llegada2": 0.532589251786078,
                    "llegada": 109.93196769070977,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.5145573956081833,
                    "rnd_llegada2": 0.9387119274693267,
                    "llegada": 41.270659519071074,
                    "rnd_fin_juego1": 0.5791077633858823,
                    "rnd_fin_juego2": 0.007486808496297903,
                    "fin_juego": 104.9603239718115,
                    "estado": "JUGANDO"
                },
                "jugando2": null,
                "finLimpieza": 1.7976931348623157E308,
                "cancha": {
                    "estado": "OCUPADA_UN_GRUPO"
                },
                "colaHF": 7,
                "colaB": 10,
                "acumuladorEsperaFutbol": 104.31570341384413,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 411.5359063483902,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 104.9603239718115,
                        "estado": "JUGANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 28,
                "evento": "LLEGADA_FUTBOL",
                "reloj": 100.55151695867244,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.3207198938364654,
                    "rnd_llegada2": 0.532589251786078,
                    "llegada": 109.93196769070977,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.5145573956081833,
                    "rnd_llegada2": 0.9387119274693267,
                    "llegada": 41.270659519071074,
                    "rnd_fin_juego1": 0.5791077633858823,
                    "rnd_fin_juego2": 0.007486808496297903,
                    "fin_juego": 104.9603239718115,
                    "estado": "JUGANDO"
                },
                "jugando2": null,
                "finLimpieza": 1.7976931348623157E308,
                "cancha": {
                    "estado": "OCUPADA_UN_GRUPO"
                },
                "colaHF": 8,
                "colaB": 10,
                "acumuladorEsperaFutbol": 104.34068284059761,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 411.59835491527394,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 104.9603239718115,
                        "estado": "JUGANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 29,
                "evento": "FIN_JUEGO",
                "reloj": 104.9603239718115,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.3207198938364654,
                    "rnd_llegada2": 0.532589251786078,
                    "llegada": 109.93196769070977,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": null,
                "jugando2": null,
                "finLimpieza": 109.9603239718115,
                "cancha": {
                    "estado": "RECIBIENDO_LIMPIEZA"
                },
                "colaHF": 8,
                "colaB": 10,
                "acumuladorEsperaFutbol": 126.38471790629295,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 455.6864250466645,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 30,
                "evento": "LLEGADA_BASKET",
                "reloj": 109.93196769070977,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 117.56649182552746,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": null,
                "jugando2": null,
                "finLimpieza": 109.9603239718115,
                "cancha": {
                    "estado": "RECIBIENDO_LIMPIEZA"
                },
                "colaHF": 8,
                "colaB": 11,
                "acumuladorEsperaFutbol": 151.24293650078428,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 505.40286223564726,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 31,
                "evento": "FIN_LIMPIEZA",
                "reloj": 109.9603239718115,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 117.56649182552746,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.7397116102546244,
                    "llegada": 43.48364673125598,
                    "rnd_fin_juego1": 0.2099917012012431,
                    "rnd_fin_juego2": 0.4555433680190163,
                    "fin_juego": 117.44743389835769,
                    "estado": "JUGANDO"
                },
                "jugando2": null,
                "finLimpieza": 1.7976931348623157E308,
                "cancha": {
                    "estado": "OCUPADA_UN_GRUPO"
                },
                "colaHF": 7,
                "colaB": 11,
                "acumuladorEsperaFutbol": 84.90804066573743,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 505.7147813277662,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 117.44743389835769,
                        "estado": "JUGANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 32,
                "evento": "FIN_JUEGO",
                "reloj": 117.44743389835769,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 117.56649182552746,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": null,
                "jugando2": null,
                "finLimpieza": 122.44743389835769,
                "cancha": {
                    "estado": "RECIBIENDO_LIMPIEZA"
                },
                "colaHF": 7,
                "colaB": 11,
                "acumuladorEsperaFutbol": 114.85648037192216,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 588.0729905197743,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 33,
                "evento": "LLEGADA_BASKET",
                "reloj": 117.56649182552746,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.6037707380652982,
                    "rnd_llegada2": 0.37152004758658064,
                    "llegada": 117.57860528798045,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 125.28853827465578,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": null,
                "jugando2": null,
                "finLimpieza": 122.44743389835769,
                "cancha": {
                    "estado": "RECIBIENDO_LIMPIEZA"
                },
                "colaHF": 7,
                "colaB": 12,
                "acumuladorEsperaFutbol": 115.33271208060127,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 589.382627718642,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2597414525257453,
                        "rnd_llegada2": 0.6220005014696892,
                        "llegada": 117.56649182552746,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 34,
                "evento": "LLEGADA_HANDBALL",
                "reloj": 117.57860528798045,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.32875662897058766,
                    "rnd_llegada2": 0.867224675721282,
                    "llegada": 139.58251824613242,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 125.28853827465578,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": null,
                "jugando2": null,
                "finLimpieza": 122.44743389835769,
                "cancha": {
                    "estado": "RECIBIENDO_LIMPIEZA"
                },
                "colaHF": 8,
                "colaB": 12,
                "acumuladorEsperaFutbol": 115.38116593041322,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 589.5279892680778,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 117.57860528798045,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2597414525257453,
                        "rnd_llegada2": 0.6220005014696892,
                        "llegada": 117.56649182552746,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 35,
                "evento": "FIN_LIMPIEZA",
                "reloj": 122.44743389835769,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.32875662897058766,
                    "rnd_llegada2": 0.867224675721282,
                    "llegada": 139.58251824613242,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.2597414525257453,
                    "rnd_llegada2": 0.6220005014696892,
                    "llegada": 125.28853827465578,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.33713121387980505,
                    "rnd_llegada2": 0.6967523617704322,
                    "llegada": 60.30223884174352,
                    "rnd_fin_juego1": 0.1570959712160358,
                    "rnd_fin_juego2": 0.34456766429897867,
                    "fin_juego": 151.37030913180962,
                    "estado": "JUGANDO"
                },
                "jugando2": null,
                "finLimpieza": 1.7976931348623157E308,
                "cancha": {
                    "estado": "OCUPADA_UN_GRUPO"
                },
                "colaHF": 7,
                "colaB": 12,
                "acumuladorEsperaFutbol": 134.85648037192215,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 647.9539325926045,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.1570959712160358,
                        "rnd_fin_juego2": 0.34456766429897867,
                        "fin_juego": 151.37030913180962,
                        "estado": "JUGANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 117.57860528798045,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2597414525257453,
                        "rnd_llegada2": 0.6220005014696892,
                        "llegada": 117.56649182552746,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ]
            },
            {
                "n": 36,
                "evento": "LLEGADA_BASKET",
                "reloj": 125.28853827465578,
                "futbolALlegar": {
                    "tipo": "FUTBOL",
                    "rnd_llegada": 0.8044879576960828,
                    "llegada": 149.51551607841054,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "handBallALlegar": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.32875662897058766,
                    "rnd_llegada2": 0.867224675721282,
                    "llegada": 139.58251824613242,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "basketBallALlegar": {
                    "tipo": "BASKET_BALL",
                    "rnd_llegada1": 0.9970553571522703,
                    "rnd_llegada2": 0.5265527644102616,
                    "llegada": 135.13707440944412,
                    "rnd_fin_juego1": 0.0,
                    "rnd_fin_juego2": 0.0,
                    "fin_juego": 0.0,
                    "estado": "NO_LLEGO"
                },
                "jugando1": {
                    "tipo": "HAND_BALL",
                    "rnd_llegada1": 0.33713121387980505,
                    "rnd_llegada2": 0.6967523617704322,
                    "llegada": 60.30223884174352,
                    "rnd_fin_juego1": 0.1570959712160358,
                    "rnd_fin_juego2": 0.34456766429897867,
                    "fin_juego": 151.37030913180962,
                    "estado": "JUGANDO"
                },
                "jugando2": null,
                "finLimpieza": 1.7976931348623157E308,
                "cancha": {
                    "estado": "OCUPADA_UN_GRUPO"
                },
                "colaHF": 7,
                "colaB": 13,
                "acumuladorEsperaFutbol": 146.2208978771145,
                "acumuladorEsperaHandBall": 0.0,
                "acumuladorEsperaBasketBall": 682.0471851081818,
                "acumuladorCantidadFutbolLlegaron": 0,
                "acumuladorCantidadHandBallLlegaron": 0,
                "acumuladorCantidadBasketBallLlegaron": 0,
                "llegaronFutbolHandBall": [
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 22.13671205329328,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.5145573956081833,
                        "rnd_llegada2": 0.9387119274693267,
                        "llegada": 41.270659519071074,
                        "rnd_fin_juego1": 0.5791077633858823,
                        "rnd_fin_juego2": 0.007486808496297903,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.7397116102546244,
                        "llegada": 43.48364673125598,
                        "rnd_fin_juego1": 0.2099917012012431,
                        "rnd_fin_juego2": 0.4555433680190163,
                        "fin_juego": 1.7976931348623157E308,
                        "estado": "FIN_JUEGO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 60.30223884174352,
                        "rnd_fin_juego1": 0.1570959712160358,
                        "rnd_fin_juego2": 0.34456766429897867,
                        "fin_juego": 151.37030913180962,
                        "estado": "JUGANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.6757021877152599,
                        "llegada": 77.2664370808445,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.33713121387980505,
                        "rnd_llegada2": 0.6967523617704322,
                        "llegada": 77.51648473962757,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.010956948009574918,
                        "llegada": 77.59695960516392,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 96.12723583523072,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.5184343596826992,
                        "llegada": 99.51834157682774,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "FUTBOL",
                        "rnd_llegada": 0.03385290044914757,
                        "llegada": 100.55151695867244,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "HAND_BALL",
                        "rnd_llegada1": 0.6037707380652982,
                        "rnd_llegada2": 0.37152004758658064,
                        "llegada": 117.57860528798045,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    }
                ],
                "llegaronBasketBall": [
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2516439702199742,
                        "rnd_llegada2": 0.58806102614851,
                        "llegada": 15.427488351038564,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 27.511298899773863,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.5201807211071783,
                        "rnd_llegada2": 0.0675376378357575,
                        "llegada": 38.45276875831047,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 46.42002368434708,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.42429473296077513,
                        "rnd_llegada2": 0.6085763830381785,
                        "llegada": 54.768792935203145,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 61.801075309177605,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3167352495263638,
                        "rnd_llegada2": 0.4669837200025906,
                        "llegada": 72.42570666014014,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 83.06592186427865,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.9280949322809195,
                        "rnd_llegada2": 0.09456631374961555,
                        "llegada": 93.49846610719692,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 100.54527210198407,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.3207198938364654,
                        "rnd_llegada2": 0.532589251786078,
                        "llegada": 109.93196769070977,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2597414525257453,
                        "rnd_llegada2": 0.6220005014696892,
                        "llegada": 117.56649182552746,
                        "rnd_fin_juego1": 0.0,
                        "rnd_fin_juego2": 0.0,
                        "fin_juego": 0.0,
                        "estado": "ESPERANDO"
                    },
                    {
                        "tipo": "BASKET_BALL",
                        "rnd_llegada1": 0.2597414525257453,
                        "rnd_llegada2": 0.6220005014696892,
                        "llegada": 125.28853827465578,
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
      <Grid data={data.map(objeto => filterSimulationData(objeto, false))} 
      cantidadBasketBall={data[data.length - 1].llegaronBasketBall.length}
      cantidadFutbolHandball={data[data.length - 1].llegaronFutbolHandBall.length}></Grid>
    </div>
  );
}

export default App;
