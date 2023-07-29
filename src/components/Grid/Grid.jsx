import React, { useEffect, useState } from "react";
import "./Grid.css";


function Grid({ data, cantidadEnsambladores, cantidadHornos }) {

    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th rowSpan="3">N</th>
                        <th rowSpan="3">Evento</th>
                        <th rowSpan="3">Reloj</th>
                        <th colSpan={cantidadEnsambladores * 4}>Ensambladores</th>
                        <th colSpan={2 + cantidadHornos * 2}>Hornos</th>
                        <th rowSpan="2" colSpan="4">Estadisticos</th>
                    </tr>
                    <tr>
                        {Array.from({ length: cantidadEnsambladores }, (_, index) => (
                            <th colSpan="4" key={`ensamblador${index}`}>Ensamblador {index + 1}</th>
                        ))}
                        <th rowSpan="2">RND</th>
                        <th rowSpan="2">Cola</th>
                        {Array.from({ length: cantidadHornos }, (_, index) => (
                            <th colSpan="2" key={`horno${index}`}>Horno {index + 1}</th>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: cantidadEnsambladores }, (_, index) => (
                            <React.Fragment key={`ensamblador${index}`}>
                                <th key={`ensamblador${index}-estado`}>Estado</th>
                                <th key={`ensamblador${index}-rnd`}>RND</th>
                                <th key={`ensamblador${index}-fin-ensamblado`}>Fin Ensamblado</th>
                                <th key={`ensamblador${index}-llegada-a-cola`}>Llegada a cola</th>
                            </React.Fragment>
                        ))}
                        {Array.from({ length: cantidadHornos }, (_, index) => (
                            <React.Fragment key={`horno${index}`}>
                                <th key={`horno${index}-estado`}>Estado</th>
                                <th key={`horno${index}-fin-cuece`}>Fin Cuece</th>
                            </React.Fragment>
                        ))}
                        <th>Horas Trabajadas</th>
                        <th>Dias Trabajados</th>
                        <th>Moldes Terminados</th>
                        <th>Cantidad Trabjadores</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dato) => (
                        <tr key={dato.n}>
                            <td>{dato.n}</td>
                            <td>{dato.evento}</td>
                            <td>{dato.reloj}</td>
                            {Array.from({ length: cantidadEnsambladores }, (_, index) => (
                                <React.Fragment key={`ensamblador${index}`}>
                                    <td key={`ensamblador${index}-estado`}>{dato.ensambladores[index].estado}</td>
                                    <td key={`ensamblador${index}-rnd`}>{dato.ensambladores[index].rnd}</td>
                                    <td key={`ensamblador${index}-fin-ensamblado`}>{dato.ensambladores[index].finEnsamblado}</td>
                                    <td key={`ensamblador${index}-llegada-a-cola`}>{dato.ensambladores[index].llegadaACola}</td>
                                </React.Fragment>
                            ))}
                            <td>{dato.rnd}</td>
                            <td>{dato.cola}</td>
                            {Array.from({ length: cantidadHornos }, (_, index) => (
                                <React.Fragment key={`horno${index}`}>
                                    <td key={`horno${index}-estado`}>{dato.hornos[index].estado}</td>
                                    <td key={`horno${index}-fin-cuece`}>{dato.hornos[index].finCuece}</td>
                                </React.Fragment>
                            ))}
                            <td>{dato.horasTrabajadas}</td>
                            <td>{dato.diasTrabajados}</td>
                            <td>{dato.moldesTerminados}</td>
                            <td>{dato.cantidadTrabajadores}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Grid;