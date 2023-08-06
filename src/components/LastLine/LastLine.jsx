import React from "react";
import "../Grid/Grid.css";


function LastLine({ response }) {

    const data = response.data;

    return (
        <div>
            <span className="titulo-tabla">Ultima Linea</span>
            <table>
                <thead>
                    <tr>
                        <th rowSpan="3">N</th>
                        <th rowSpan="3">Evento</th>
                        <th rowSpan="3">Reloj</th>
                        <th colSpan={2 + 3 * 2} rowSpan="1">Llegada Grupo</th>
                        <th colSpan={2 * 3}>Fin Juego</th>
                        <th colSpan="1" rowSpan="3">Fin Limpieza</th>
                        <th rowSpan="2" colSpan="3">Predio</th>
                        <th rowSpan="1" colSpan="6">Acumuladores</th>
                        <th rowSpan="1" colSpan="3">PROMEDIOS</th>

                    </tr>
                    <tr>
                        <th rowSpan="1" colSpan={2}>Futbol</th>
                        <th rowSpan="1" colSpan={3}>HandBall</th>
                        <th rowSpan="1" colSpan={3}>BasketBall</th>

                        <th rowSpan="1" colSpan={3}>Jugando 1</th>
                        <th rowSpan="1" colSpan={3}>Jugando 2</th>

                        <th rowSpan="1" colSpan={3}>Espera</th>
                        <th rowSpan="1" colSpan={3}>Llegada</th>

                        <th rowSpan="2" colSpan={1}>Espera Futbol</th>
                        <th rowSpan="2" colSpan={1}>Espera HandBall</th>
                        <th rowSpan="2" colSpan={1}>Espera BasketBall</th>


                    </tr>
                    <tr>
                        <th>RND</th>
                        <th>Prox</th>
                        <th>RND 1</th>
                        <th>RND 2</th>
                        <th>Prox</th>
                        <th>RND 1</th>
                        <th>RND 2</th>
                        <th>Prox</th>
                        <th>RND 1</th>
                        <th>RND 2</th>
                        <th>Prox</th>
                        <th>RND 1</th>
                        <th>RND 2</th>
                        <th>Prox</th>

                        <th>Estado</th>
                        <th>Cola HF</th>
                        <th>Cola B</th>

                        <th>F</th>
                        <th>H</th>
                        <th>B</th>
                        <th>F</th>
                        <th>H</th>
                        <th>B</th>

                    </tr>
                </thead>
                <tbody>
                    {console.log(data)}
                    {data.map((dato) => (
                        <tr key={dato.n}>
                            <td>{dato.n}</td>
                            <td>{dato.evento}</td>
                            <td>{dato.reloj}</td>

                            <td>{dato.futbolALlegar.rnd_llegada}</td>
                            <td>{dato.futbolALlegar.llegada}</td>
                            <td>{dato.handBallALlegar.rnd_llegada1}</td>
                            <td>{dato.handBallALlegar.rnd_llegada2}</td>
                            <td>{dato.handBallALlegar.llegada}</td>
                            <td>{dato.basketBallALlegar.rnd_llegada1}</td>
                            <td>{dato.basketBallALlegar.rnd_llegada2}</td>
                            <td>{dato.basketBallALlegar.llegada}</td>

                            <td>{(dato.jugando1 != null) ? dato.jugando1.rnd_fin_juego1 : null}</td>
                            <td>{(dato.jugando1 != null) ? dato.jugando1.rnd_fin_juego2 : null}</td>
                            <td>{(dato.jugando1 != null) ? dato.jugando1.fin_juego : null}</td>
                            <td>{(dato.jugando2 != null) ? dato.jugando2.rnd_fin_juego1 : null}</td>
                            <td>{(dato.jugando2 != null) ? dato.jugando2.rnd_fin_juego2 : null}</td>
                            <td>{(dato.jugando2 != null) ? dato.jugando2.fin_juego : null}</td>

                            <td>{dato.finLimpieza}</td>

                            <td>{dato.cancha.estado}</td>
                            <td>{dato.colaHF}</td>
                            <td>{dato.colaB}</td>

                            <td>{dato.acumuladorEsperaFutbol}</td>
                            <td>{dato.acumuladorEsperaHandBall}</td>
                            <td>{dato.acumuladorEsperaBasketBall}</td>
                            <td>{dato.acumuladorCantidadFutbolLlegaron}</td>
                            <td>{dato.acumuladorCantidadHandBallLlegaron}</td>
                            <td>{dato.acumuladorCantidadBasketBallLlegaron}</td>

                            <td className="promedios">{response.promedioEsperaFutbol}</td>
                            <td className="promedios">{response.promedioEsperaHandBall}</td>
                            <td className="promedios">{response.promedioEsperaBasketBall}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LastLine;