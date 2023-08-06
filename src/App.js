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
              "rnd_llegada": 0.3749000040637288,
              "llegada": 46.98436485452964,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 76.2928624436653,
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
          "reloj": 46.98436485452964,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.4324989073372336,
              "llegada": 103.63562527767841,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 76.2928624436653,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.3749000040637288,
              "llegada": 46.98436485452964,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 140.1863257748554,
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
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 140.1863257748554,
                  "estado": "JUGANDO"
              }
          ],
          "llegaronBasketBall": []
      },
      {
          "n": 2,
          "evento": "LLEGADA_BASKET",
          "reloj": 76.2928624436653,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.4324989073372336,
              "llegada": 103.63562527767841,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 156.83600930153233,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.3749000040637288,
              "llegada": 46.98436485452964,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 140.1863257748554,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 0,
          "colaB": 1,
          "acumuladorEsperaFutbol": 0.0,
          "acumuladorEsperaHandBall": 0.0,
          "acumuladorEsperaBasketBall": 0.0,
          "acumuladorCantidadFutbolLlegaron": 1,
          "acumuladorCantidadHandBallLlegaron": 0,
          "acumuladorCantidadBasketBallLlegaron": 1,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 140.1863257748554,
                  "estado": "JUGANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 3,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 103.63562527767841,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 156.83600930153233,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.3749000040637288,
              "llegada": 46.98436485452964,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 140.1863257748554,
              "estado": "JUGANDO"
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
          "acumuladorEsperaBasketBall": 27.342762834013115,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 0,
          "acumuladorCantidadBasketBallLlegaron": 1,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 140.1863257748554,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 4,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 120.62487643315868,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 156.83600930153233,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.3749000040637288,
              "llegada": 46.98436485452964,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 140.1863257748554,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 1,
          "acumuladorEsperaFutbol": 16.98925115548026,
          "acumuladorEsperaHandBall": 0.0,
          "acumuladorEsperaBasketBall": 44.332013989493376,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 1,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 140.1863257748554,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 5,
          "evento": "FIN_JUEGO",
          "reloj": 140.1863257748554,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 156.83600930153233,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 150.1863257748554,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 1,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 19.561449341696715,
          "acumuladorEsperaBasketBall": 63.89346333119009,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 1,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 6,
          "evento": "FIN_LIMPIEZA",
          "reloj": 150.1863257748554,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.17295312562374354,
              "rnd_llegada2": 0.4768463390617208,
              "llegada": 156.83600930153233,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.4324989073372336,
              "llegada": 103.63562527767841,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 227.31448813859492,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 1,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 29.561449341696715,
          "acumuladorEsperaBasketBall": 73.89346333119009,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 1,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 227.31448813859492,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 7,
          "evento": "LLEGADA_BASKET",
          "reloj": 156.83600930153233,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 235.89745458810654,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.4324989073372336,
              "llegada": 103.63562527767841,
              "rnd_fin_juego1": 0.4149140911957231,
              "rnd_fin_juego2": 0.7888033322788509,
              "fin_juego": 227.31448813859492,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 2,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 36.21113286837365,
          "acumuladorEsperaBasketBall": 80.54314685786703,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 2,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 227.31448813859492,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 8,
          "evento": "FIN_JUEGO",
          "reloj": 227.31448813859492,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 235.89745458810654,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 237.31448813859492,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 1,
          "colaB": 2,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 106.68961170543625,
          "acumuladorEsperaBasketBall": 221.50010453199224,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 2,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 9,
          "evento": "LLEGADA_BASKET",
          "reloj": 235.89745458810654,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 317.11675552567135,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 237.31448813859492,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 1,
          "colaB": 3,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 115.27257815494787,
          "acumuladorEsperaBasketBall": 238.66603743101547,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 1,
          "acumuladorCantidadBasketBallLlegaron": 3,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 10,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 237.2358307564922,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 317.11675552567135,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 237.31448813859492,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 3,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 116.61095432333352,
          "acumuladorEsperaBasketBall": 242.68116593617242,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 3,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 11,
          "evento": "FIN_LIMPIEZA",
          "reloj": 237.31448813859492,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 317.11675552567135,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.9633920900769141,
              "rnd_fin_juego2": 0.5906374828344043,
              "fin_juego": 312.7143441663085,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 3,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 116.68961170543625,
          "acumuladorEsperaBasketBall": 242.91713808248062,
          "acumuladorCantidadFutbolLlegaron": 2,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 3,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 312.7143441663085,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 12,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 300.0764990385321,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 317.11675552567135,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 120.62487643315868,
              "rnd_fin_juego1": 0.9633920900769141,
              "rnd_fin_juego2": 0.5906374828344043,
              "fin_juego": 312.7143441663085,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 3,
          "acumuladorEsperaFutbol": 36.550700497176976,
          "acumuladorEsperaHandBall": 179.45162260537344,
          "acumuladorEsperaBasketBall": 431.2031707822922,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 3,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 312.7143441663085,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 13,
          "evento": "FIN_JUEGO",
          "reloj": 312.7143441663085,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.7438265033203307,
              "rnd_llegada2": 0.3544089257476095,
              "llegada": 317.11675552567135,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 322.7143441663085,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 3,
          "acumuladorEsperaFutbol": 49.188545624953335,
          "acumuladorEsperaHandBall": 192.0894677331498,
          "acumuladorEsperaBasketBall": 469.1167061656213,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 3,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 14,
          "evento": "LLEGADA_BASKET",
          "reloj": 317.11675552567135,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 398.85587145685577,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 322.7143441663085,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 4,
          "acumuladorEsperaFutbol": 53.59095698431621,
          "acumuladorEsperaHandBall": 196.49187909251268,
          "acumuladorEsperaBasketBall": 482.3239402437099,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 4,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 15,
          "evento": "FIN_LIMPIEZA",
          "reloj": 322.7143441663085,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 398.85587145685577,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.9633920900769141,
              "rnd_fin_juego2": 0.5906374828344043,
              "fin_juego": 399.7690917781902,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 4,
          "acumuladorEsperaFutbol": 59.188545624953335,
          "acumuladorEsperaHandBall": 196.49187909251268,
          "acumuladorEsperaBasketBall": 504.7142948062584,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 2,
          "acumuladorCantidadBasketBallLlegaron": 4,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 399.7690917781902,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 16,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 357.15919179528873,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 398.85587145685577,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.9633920900769141,
              "rnd_fin_juego2": 0.5906374828344043,
              "fin_juego": 399.7690917781902,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 4,
          "acumuladorEsperaFutbol": 93.63339325393359,
          "acumuladorEsperaHandBall": 196.49187909251268,
          "acumuladorEsperaBasketBall": 642.4936853221794,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 3,
          "acumuladorCantidadBasketBallLlegaron": 4,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 399.7690917781902,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 17,
          "evento": "LLEGADA_BASKET",
          "reloj": 398.85587145685577,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 479.01644428440534,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.2266127547624982,
              "rnd_llegada2": 0.7790192639962797,
              "llegada": 237.2358307564922,
              "rnd_fin_juego1": 0.9633920900769141,
              "rnd_fin_juego2": 0.5906374828344043,
              "fin_juego": 399.7690917781902,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 5,
          "acumuladorEsperaFutbol": 135.33007291550064,
          "acumuladorEsperaHandBall": 238.1885587540797,
          "acumuladorEsperaBasketBall": 809.2804039684476,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 3,
          "acumuladorCantidadBasketBallLlegaron": 5,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 399.7690917781902,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 18,
          "evento": "FIN_JUEGO",
          "reloj": 399.7690917781902,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 479.01644428440534,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 409.7690917781902,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 5,
          "acumuladorEsperaFutbol": 136.2432932368351,
          "acumuladorEsperaHandBall": 239.10177907541416,
          "acumuladorEsperaBasketBall": 813.8465055751199,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 3,
          "acumuladorCantidadBasketBallLlegaron": 5,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 19,
          "evento": "FIN_LIMPIEZA",
          "reloj": 409.7690917781902,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 479.01644428440534,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 488.786026900144,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 5,
          "acumuladorEsperaFutbol": 136.2432932368351,
          "acumuladorEsperaHandBall": 249.10177907541416,
          "acumuladorEsperaBasketBall": 863.8465055751199,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 3,
          "acumuladorCantidadBasketBallLlegaron": 5,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 488.786026900144,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 20,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 478.17777785211047,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.682980833602265,
              "rnd_llegada2": 0.014653254382897662,
              "llegada": 479.01644428440534,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 488.786026900144,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 5,
          "acumuladorEsperaFutbol": 136.2432932368351,
          "acumuladorEsperaHandBall": 317.51046514933444,
          "acumuladorEsperaBasketBall": 1205.8899359447212,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 5,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 488.786026900144,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 21,
          "evento": "LLEGADA_BASKET",
          "reloj": 479.01644428440534,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 556.6913341294355,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 488.786026900144,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 6,
          "acumuladorEsperaFutbol": 136.2432932368351,
          "acumuladorEsperaHandBall": 319.1877980139242,
          "acumuladorEsperaBasketBall": 1210.0832681061956,
          "acumuladorCantidadFutbolLlegaron": 3,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 6,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 488.786026900144,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 22,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 479.1656899777652,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 556.6913341294355,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8597612199760241,
              "llegada": 300.0764990385321,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 488.786026900144,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 3,
          "colaB": 6,
          "acumuladorEsperaFutbol": 136.2432932368351,
          "acumuladorEsperaHandBall": 319.48628940064395,
          "acumuladorEsperaBasketBall": 1210.9787422663549,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 6,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 488.786026900144,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 23,
          "evento": "FIN_JUEGO",
          "reloj": 488.786026900144,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 556.6913341294355,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 498.786026900144,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 3,
          "colaB": 6,
          "acumuladorEsperaFutbol": 145.86363015921387,
          "acumuladorEsperaHandBall": 338.7269632454015,
          "acumuladorEsperaBasketBall": 1268.7007638006276,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 6,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 24,
          "evento": "FIN_LIMPIEZA",
          "reloj": 498.786026900144,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 556.6913341294355,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.5673269990088275,
              "rnd_fin_juego2": 0.29419855043864873,
              "fin_juego": 572.9481009141988,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 6,
          "acumuladorEsperaFutbol": 155.86363015921387,
          "acumuladorEsperaHandBall": 348.7269632454015,
          "acumuladorEsperaBasketBall": 1328.7007638006276,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 6,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 572.9481009141988,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 25,
          "evento": "LLEGADA_BASKET",
          "reloj": 556.6913341294355,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 635.9675000604103,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 357.15919179528873,
              "rnd_fin_juego1": 0.5673269990088275,
              "rnd_fin_juego2": 0.29419855043864873,
              "fin_juego": 572.9481009141988,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 7,
          "acumuladorEsperaFutbol": 213.76893738850538,
          "acumuladorEsperaHandBall": 406.63227047469303,
          "acumuladorEsperaBasketBall": 1676.1326071763765,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 7,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 572.9481009141988,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 26,
          "evento": "FIN_JUEGO",
          "reloj": 572.9481009141988,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 635.9675000604103,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 582.9481009141988,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 7,
          "acumuladorEsperaFutbol": 230.02570417326865,
          "acumuladorEsperaHandBall": 422.8890372594563,
          "acumuladorEsperaBasketBall": 1789.9299746697193,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 7,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 27,
          "evento": "FIN_LIMPIEZA",
          "reloj": 582.9481009141988,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 635.9675000604103,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.5673269990088275,
              "rnd_fin_juego2": 0.29419855043864873,
              "fin_juego": 683.4267277996491,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 7,
          "acumuladorEsperaFutbol": 240.02570417326865,
          "acumuladorEsperaHandBall": 422.8890372594563,
          "acumuladorEsperaBasketBall": 1859.9299746697193,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 4,
          "acumuladorCantidadBasketBallLlegaron": 7,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 683.4267277996491,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 28,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 598.7555552483162,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.4765135479737648,
              "rnd_llegada2": 0.5480332725089624,
              "llegada": 635.9675000604103,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.5673269990088275,
              "rnd_fin_juego2": 0.29419855043864873,
              "fin_juego": 683.4267277996491,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 7,
          "acumuladorEsperaFutbol": 255.8331585073861,
          "acumuladorEsperaHandBall": 422.8890372594563,
          "acumuladorEsperaBasketBall": 1970.5821550085413,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 7,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 683.4267277996491,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 29,
          "evento": "LLEGADA_BASKET",
          "reloj": 635.9675000604103,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 717.730065504865,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8777232977088327,
              "rnd_llegada2": 0.2619523825281719,
              "llegada": 478.17777785211047,
              "rnd_fin_juego1": 0.5673269990088275,
              "rnd_fin_juego2": 0.29419855043864873,
              "fin_juego": 683.4267277996491,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 8,
          "acumuladorEsperaFutbol": 293.0451033194802,
          "acumuladorEsperaHandBall": 460.1009820715504,
          "acumuladorEsperaBasketBall": 2231.0657686932,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 8,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 683.4267277996491,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 30,
          "evento": "FIN_JUEGO",
          "reloj": 683.4267277996491,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 717.730065504865,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 693.4267277996491,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 2,
          "colaB": 8,
          "acumuladorEsperaFutbol": 340.504331058719,
          "acumuladorEsperaHandBall": 507.5602098107892,
          "acumuladorEsperaBasketBall": 2610.7395906071106,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 8,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
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
          "reloj": 693.4267277996491,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 717.730065504865,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 798.7758348599436,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 1,
          "colaB": 8,
          "acumuladorEsperaFutbol": 340.504331058719,
          "acumuladorEsperaHandBall": 517.5602098107893,
          "acumuladorEsperaBasketBall": 2690.7395906071106,
          "acumuladorCantidadFutbolLlegaron": 4,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 8,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 798.7758348599436,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 32,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 696.5492698468366,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 717.730065504865,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 798.7758348599436,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 8,
          "acumuladorEsperaFutbol": 340.504331058719,
          "acumuladorEsperaHandBall": 520.6827518579768,
          "acumuladorEsperaBasketBall": 2715.7199269846105,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 8,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 798.7758348599436,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
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
          "reloj": 717.730065504865,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 798.4598943139416,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 798.7758348599436,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 9,
          "acumuladorEsperaFutbol": 361.6851267167474,
          "acumuladorEsperaHandBall": 541.8635475160052,
          "acumuladorEsperaBasketBall": 2885.1662922488376,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 5,
          "acumuladorCantidadBasketBallLlegaron": 9,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 798.7758348599436,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
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
          "reloj": 719.3352049635225,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 835.306474915383,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.6345045127448183,
              "rnd_llegada2": 0.062480753562016544,
              "llegada": 798.4598943139416,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 798.7758348599436,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 3,
          "colaB": 9,
          "acumuladorEsperaFutbol": 363.2902661754049,
          "acumuladorEsperaHandBall": 543.4686869746627,
          "acumuladorEsperaBasketBall": 2899.612547376755,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 6,
          "acumuladorCantidadBasketBallLlegaron": 9,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 798.7758348599436,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 35,
          "evento": "LLEGADA_BASKET",
          "reloj": 798.4598943139416,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 835.306474915383,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 880.4704070305467,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8331886772875647,
              "llegada": 479.1656899777652,
              "rnd_fin_juego1": 0.16845038757202635,
              "rnd_fin_juego2": 0.3488490081211286,
              "fin_juego": 798.7758348599436,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 3,
          "colaB": 10,
          "acumuladorEsperaFutbol": 442.414955525824,
          "acumuladorEsperaHandBall": 701.7180656755008,
          "acumuladorEsperaBasketBall": 3611.734751530527,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 6,
          "acumuladorCantidadBasketBallLlegaron": 10,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 798.7758348599436,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 36,
          "evento": "FIN_JUEGO",
          "reloj": 798.7758348599436,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 835.306474915383,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 880.4704070305467,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 808.7758348599436,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 3,
          "colaB": 10,
          "acumuladorEsperaFutbol": 442.730896071826,
          "acumuladorEsperaHandBall": 702.3499467675049,
          "acumuladorEsperaBasketBall": 3614.8941569905473,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 6,
          "acumuladorCantidadBasketBallLlegaron": 10,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 37,
          "evento": "FIN_LIMPIEZA",
          "reloj": 808.7758348599436,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 835.306474915383,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 880.4704070305467,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 906.8693496850102,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 2,
          "colaB": 10,
          "acumuladorEsperaFutbol": 452.730896071826,
          "acumuladorEsperaHandBall": 712.3499467675049,
          "acumuladorEsperaBasketBall": 3714.8941569905473,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 6,
          "acumuladorCantidadBasketBallLlegaron": 10,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 906.8693496850102,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
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
          "reloj": 835.306474915383,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.7802140972970815,
              "llegada": 848.059407446724,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 880.4704070305467,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 906.8693496850102,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 3,
          "colaB": 10,
          "acumuladorEsperaFutbol": 479.26153612726534,
          "acumuladorEsperaHandBall": 738.8805868229442,
          "acumuladorEsperaBasketBall": 3980.2005575449407,
          "acumuladorCantidadFutbolLlegaron": 5,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 10,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 906.8693496850102,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 39,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 848.059407446724,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.6063186627413547,
              "llegada": 941.2807560081112,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 880.4704070305467,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 906.8693496850102,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 4,
          "colaB": 10,
          "acumuladorEsperaFutbol": 492.01446865860635,
          "acumuladorEsperaHandBall": 764.3864518856262,
          "acumuladorEsperaBasketBall": 4107.729882858351,
          "acumuladorCantidadFutbolLlegaron": 6,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 10,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 906.8693496850102,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 40,
          "evento": "LLEGADA_BASKET",
          "reloj": 880.4704070305467,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.6063186627413547,
              "llegada": 941.2807560081112,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 960.3626673711142,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 598.7555552483162,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 906.8693496850102,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 4,
          "colaB": 11,
          "acumuladorEsperaFutbol": 556.8364678262517,
          "acumuladorEsperaHandBall": 829.2084510532716,
          "acumuladorEsperaBasketBall": 4431.839878696577,
          "acumuladorCantidadFutbolLlegaron": 6,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 11,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 906.8693496850102,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 41,
          "evento": "FIN_JUEGO",
          "reloj": 906.8693496850102,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.6063186627413547,
              "llegada": 941.2807560081112,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 960.3626673711142,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 916.8693496850102,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 4,
          "colaB": 11,
          "acumuladorEsperaFutbol": 609.6343531351788,
          "acumuladorEsperaHandBall": 882.0063363621987,
          "acumuladorEsperaBasketBall": 4722.228247895677,
          "acumuladorCantidadFutbolLlegaron": 6,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 11,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 42,
          "evento": "FIN_LIMPIEZA",
          "reloj": 916.8693496850102,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.6063186627413547,
              "llegada": 941.2807560081112,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 960.3626673711142,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.7731354550820276,
              "rnd_fin_juego2": 0.45817498474284024,
              "fin_juego": 999.942057372156,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 3,
          "colaB": 11,
          "acumuladorEsperaFutbol": 619.6343531351788,
          "acumuladorEsperaHandBall": 902.0063363621987,
          "acumuladorEsperaBasketBall": 4832.228247895677,
          "acumuladorCantidadFutbolLlegaron": 6,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 11,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 999.942057372156,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 43,
          "evento": "LLEGADA_FUTBOL",
          "reloj": 941.2807560081112,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.12137219168448854,
              "rnd_llegada2": 0.4687903961387382,
              "llegada": 956.1067761839184,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 960.3626673711142,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.7731354550820276,
              "rnd_fin_juego2": 0.45817498474284024,
              "fin_juego": 999.942057372156,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 4,
          "colaB": 11,
          "acumuladorEsperaFutbol": 644.0457594582798,
          "acumuladorEsperaHandBall": 950.8291490084007,
          "acumuladorEsperaBasketBall": 5100.7537174497875,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 7,
          "acumuladorCantidadBasketBallLlegaron": 11,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 999.942057372156,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 44,
          "evento": "LLEGADA_HANDBALL",
          "reloj": 956.1067761839184,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1075.5300743103248,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.602467743848945,
              "rnd_llegada2": 0.9914793308499569,
              "llegada": 960.3626673711142,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.7731354550820276,
              "rnd_fin_juego2": 0.45817498474284024,
              "fin_juego": 999.942057372156,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 5,
          "colaB": 11,
          "acumuladorEsperaFutbol": 673.6977998098943,
          "acumuladorEsperaHandBall": 980.4811893600152,
          "acumuladorEsperaBasketBall": 5263.839939383667,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 8,
          "acumuladorCantidadBasketBallLlegaron": 11,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 999.942057372156,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 45,
          "evento": "LLEGADA_BASKET",
          "reloj": 960.3626673711142,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1075.5300743103248,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.0715790954069444,
              "rnd_llegada2": 0.4325303152989006,
              "llegada": 1036.1762352870915,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.8862595065478612,
              "llegada": 696.5492698468366,
              "rnd_fin_juego1": 0.7731354550820276,
              "rnd_fin_juego2": 0.45817498474284024,
              "fin_juego": 999.942057372156,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 5,
          "colaB": 12,
          "acumuladorEsperaFutbol": 682.2095821842858,
          "acumuladorEsperaHandBall": 993.2488629216024,
          "acumuladorEsperaBasketBall": 5310.65474244282,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 8,
          "acumuladorCantidadBasketBallLlegaron": 12,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 999.942057372156,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 960.3626673711142,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 46,
          "evento": "FIN_JUEGO",
          "reloj": 999.942057372156,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1075.5300743103248,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.0715790954069444,
              "rnd_llegada2": 0.4325303152989006,
              "llegada": 1036.1762352870915,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": null,
          "jugando2": null,
          "finLimpieza": 1009.942057372156,
          "cancha": {
              "estado": "RECIBIENDO_LIMPIEZA"
          },
          "colaHF": 5,
          "colaB": 12,
          "acumuladorEsperaFutbol": 761.3683621863694,
          "acumuladorEsperaHandBall": 1111.9870329247278,
          "acumuladorEsperaBasketBall": 5785.607422455321,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 8,
          "acumuladorCantidadBasketBallLlegaron": 12,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 960.3626673711142,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 47,
          "evento": "FIN_LIMPIEZA",
          "reloj": 1009.942057372156,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1075.5300743103248,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.0715790954069444,
              "rnd_llegada2": 0.4325303152989006,
              "llegada": 1036.1762352870915,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 1116.5952605586842,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 4,
          "colaB": 12,
          "acumuladorEsperaFutbol": 781.3683621863694,
          "acumuladorEsperaHandBall": 1131.9870329247278,
          "acumuladorEsperaBasketBall": 5905.607422455321,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 8,
          "acumuladorCantidadBasketBallLlegaron": 12,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1116.5952605586842,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 960.3626673711142,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ]
      },
      {
          "n": 48,
          "evento": "LLEGADA_BASKET",
          "reloj": 1036.1762352870915,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1075.5300743103248,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.0715790954069444,
              "rnd_llegada2": 0.4325303152989006,
              "llegada": 1118.065521950292,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 1116.5952605586842,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 4,
          "colaB": 13,
          "acumuladorEsperaFutbol": 833.8367180162403,
          "acumuladorEsperaHandBall": 1184.4553887545987,
          "acumuladorEsperaBasketBall": 6220.417557434546,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 8,
          "acumuladorCantidadBasketBallLlegaron": 13,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1116.5952605586842,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 960.3626673711142,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.0715790954069444,
                  "rnd_llegada2": 0.4325303152989006,
                  "llegada": 1036.1762352870915,
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
          "reloj": 1075.5300743103248,
          "futbolALlegar": {
              "tipo": "FUTBOL",
              "rnd_llegada": 0.9356035683393125,
              "llegada": 1215.550461648361,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "handBallALlegar": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.8077601783119831,
              "rnd_llegada2": 0.3227383099407938,
              "llegada": 1196.7028213151357,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "basketBallALlegar": {
              "tipo": "BASKET_BALL",
              "rnd_llegada1": 0.0715790954069444,
              "rnd_llegada2": 0.4325303152989006,
              "llegada": 1118.065521950292,
              "rnd_fin_juego1": 0.0,
              "rnd_fin_juego2": 0.0,
              "fin_juego": 0.0,
              "estado": "NO_LLEGO"
          },
          "jugando1": {
              "tipo": "HAND_BALL",
              "rnd_llegada1": 0.9196817764035549,
              "rnd_llegada2": 0.12525745773631258,
              "llegada": 719.3352049635225,
              "rnd_fin_juego1": 0.2732930411911798,
              "rnd_fin_juego2": 0.1550816556328779,
              "fin_juego": 1116.5952605586842,
              "estado": "JUGANDO"
          },
          "jugando2": null,
          "finLimpieza": 1.7976931348623157E308,
          "cancha": {
              "estado": "OCUPADA_UN_GRUPO"
          },
          "colaHF": 5,
          "colaB": 13,
          "acumuladorEsperaFutbol": 912.544396062707,
          "acumuladorEsperaHandBall": 1263.1630668010655,
          "acumuladorEsperaBasketBall": 6732.01746473658,
          "acumuladorCantidadFutbolLlegaron": 7,
          "acumuladorCantidadHandBallLlegaron": 9,
          "acumuladorCantidadBasketBallLlegaron": 13,
          "llegaronFutbolHandBall": [
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.3749000040637288,
                  "llegada": 46.98436485452964,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.4324989073372336,
                  "llegada": 103.63562527767841,
                  "rnd_fin_juego1": 0.4149140911957231,
                  "rnd_fin_juego2": 0.7888033322788509,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 120.62487643315868,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.2266127547624982,
                  "rnd_llegada2": 0.7790192639962797,
                  "llegada": 237.2358307564922,
                  "rnd_fin_juego1": 0.9633920900769141,
                  "rnd_fin_juego2": 0.5906374828344043,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8597612199760241,
                  "llegada": 300.0764990385321,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 357.15919179528873,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8777232977088327,
                  "rnd_llegada2": 0.2619523825281719,
                  "llegada": 478.17777785211047,
                  "rnd_fin_juego1": 0.5673269990088275,
                  "rnd_fin_juego2": 0.29419855043864873,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8331886772875647,
                  "llegada": 479.1656899777652,
                  "rnd_fin_juego1": 0.16845038757202635,
                  "rnd_fin_juego2": 0.3488490081211286,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 598.7555552483162,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.8862595065478612,
                  "llegada": 696.5492698468366,
                  "rnd_fin_juego1": 0.7731354550820276,
                  "rnd_fin_juego2": 0.45817498474284024,
                  "fin_juego": 1.7976931348623157E308,
                  "estado": "FIN_JUEGO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.9196817764035549,
                  "rnd_llegada2": 0.12525745773631258,
                  "llegada": 719.3352049635225,
                  "rnd_fin_juego1": 0.2732930411911798,
                  "rnd_fin_juego2": 0.1550816556328779,
                  "fin_juego": 1116.5952605586842,
                  "estado": "JUGANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 835.306474915383,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.7802140972970815,
                  "llegada": 848.059407446724,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "FUTBOL",
                  "rnd_llegada": 0.6063186627413547,
                  "llegada": 941.2807560081112,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.12137219168448854,
                  "rnd_llegada2": 0.4687903961387382,
                  "llegada": 956.1067761839184,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "HAND_BALL",
                  "rnd_llegada1": 0.8077601783119831,
                  "rnd_llegada2": 0.3227383099407938,
                  "llegada": 1075.5300743103248,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              }
          ],
          "llegaronBasketBall": [
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 76.2928624436653,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.17295312562374354,
                  "rnd_llegada2": 0.4768463390617208,
                  "llegada": 156.83600930153233,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 235.89745458810654,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.7438265033203307,
                  "rnd_llegada2": 0.3544089257476095,
                  "llegada": 317.11675552567135,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 398.85587145685577,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.682980833602265,
                  "rnd_llegada2": 0.014653254382897662,
                  "llegada": 479.01644428440534,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 556.6913341294355,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.4765135479737648,
                  "rnd_llegada2": 0.5480332725089624,
                  "llegada": 635.9675000604103,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 717.730065504865,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.6345045127448183,
                  "rnd_llegada2": 0.062480753562016544,
                  "llegada": 798.4598943139416,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 880.4704070305467,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.602467743848945,
                  "rnd_llegada2": 0.9914793308499569,
                  "llegada": 960.3626673711142,
                  "rnd_fin_juego1": 0.0,
                  "rnd_fin_juego2": 0.0,
                  "fin_juego": 0.0,
                  "estado": "ESPERANDO"
              },
              {
                  "tipo": "BASKET_BALL",
                  "rnd_llegada1": 0.0715790954069444,
                  "rnd_llegada2": 0.4325303152989006,
                  "llegada": 1036.1762352870915,
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
    //makeRequest(formData);
  };
  
/*
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
*/

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
