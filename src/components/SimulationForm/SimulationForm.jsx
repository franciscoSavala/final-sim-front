import React, { useState } from "react";
import "./SimulationForm.css";
import NumberImput from "../NumberImput/NumberImput";

function SimulationForm({onFormatSubmit}) {

    const [apiJsonReq, setApiJsonReq] = useState({
        "time": 1000,
        "iteraciones": 20,
        "desdeHora": 0.0,
        "limpieza": 5,
        "llegadaFutbolE": 30,
        "llegadaHandBallMedia": 20,
        "llegadaHandBallDesvi": 2,
        "llegadaBasketBallMedia": 10,
        "llegadaBasketBallDesvi": 2,
        "finJuegoFutbolMedia": 7,
        "finJuegoFutbolDesvi": 1,
        "finJuegoHandBallMedia": 30,
        "finJuegoHandBallDesvi": 1,
        "finJuegoBasketBallMedia": 20,
        "finJuegoBasketBallDesvi": 1
    });

    const [error, setError] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setApiJsonReq({
            ...apiJsonReq,
            [name]: value
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        for(const atributo in apiJsonReq){
            if(isNaN(apiJsonReq[atributo]) || parseFloat(apiJsonReq[atributo]) < 0){
                setError(true);
                return;
            }
        }

        if(!/^\d+$/.test(apiJsonReq.iteraciones.toString())){
            setError(true);
            return;
        }



        onFormatSubmit(
            {
                ...apiJsonReq,
                "llegadaFutbolE": apiJsonReq.llegadaFutbolE * 60,
                "llegadaHandBallMedia": apiJsonReq.llegadaHandBallMedia * 60,
                "llegadaHandBallDesvi": apiJsonReq.llegadaHandBallDesvi * 60,
                "llegadaBasketBallMedia": apiJsonReq.llegadaBasketBallMedia * 60,
                "llegadaBasketBallDesvi": apiJsonReq.llegadaBasketBallDesvi * 60,
            }
        );
        setError(false);
    }

    return (
        <div className="simulation">
            <form className="form" onSubmit={handleSubmit}>
                <div className="main-simulation-form">
                    <div className="general-parameters">
                        <span className="estadistico-title">PARAMETROS GENERALES</span>
                        <NumberImput
                            label="Tiempo a simular (min)"
                            name="time"
                            value={apiJsonReq.time}
                            onChange={handleInputChange}
                        />

                        <NumberImput
                            label="Iteraciones"
                            name="iteraciones"
                            value={apiJsonReq.iteraciones}
                            onChange={handleInputChange}
                        />

                        <NumberImput
                            label="Desde hora (min)"
                            name="desdeHora"
                            value={apiJsonReq.desdeHora}
                            onChange={handleInputChange}
                        />

                        <NumberImput
                            label="Tiempo de limpieza (min)"
                            name="limpieza"
                            value={apiJsonReq.limpieza}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="general-parameters">
                        <span className="estadistico-title">LLEGADA GRUPOS</span>
                        <div className="estadisticos-ensambladores">
                            FUTBOL Exp-1(media)
                            <NumberImput
                                label="Media (hs)"
                                name="llegadaFutbolE"
                                value={apiJsonReq.llegadaFutbolE}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="estadisticos-ensambladores">
                            HAND BALL Normal(media, desv)
                            <NumberImput
                                label="Media (hs)"
                                name="llegadaHandBallMedia"
                                value={apiJsonReq.llegadaHandBallMedia}
                                onChange={handleInputChange}
                            />
                            <NumberImput
                                label="Desviación (hs)"
                                name="llegadaHandBallDesvi"
                                value={apiJsonReq.llegadaHandBallDesvi}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="estadisticos-ensambladores">
                            BASKET BALL Normal(media, desv)
                            <NumberImput
                                label="Media (hs)"
                                name="llegadaBasketBallMedia"
                                value={apiJsonReq.llegadaBasketBallMedia}
                                onChange={handleInputChange}
                            />
                            <NumberImput
                                label="Desviación (hs)"
                                name="llegadaBasketBallDesvi"
                                value={apiJsonReq.llegadaBasketBallDesvi}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="general-parameters">
                        <span className="estadistico-title">FIN JUEGO GRUPOS</span>
                        <div className="estadisticos-ensambladores">
                            FUTBOL Normal(media, desv)
                            <NumberImput
                                label="Media (min)"
                                name="finJuegoFutbolMedia"
                                value={apiJsonReq.finJuegoFutbolMedia}
                                onChange={handleInputChange}
                            />
                            <NumberImput
                                label="Desviación (min)"
                                name="finJuegoFutbolDesvi"
                                value={apiJsonReq.finJuegoFutbolDesvi}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="estadisticos-ensambladores">
                            HAND BALL Normal(media, desv)
                            <NumberImput
                                label="Media (min)"
                                name="finJuegoHandBallMedia"
                                value={apiJsonReq.finJuegoHandBallMedia}
                                onChange={handleInputChange}
                            />
                            <NumberImput
                                label="Desviación (min)"
                                name="finJuegoHandBallDesvi"
                                value={apiJsonReq.finJuegoHandBallDesvi}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="estadisticos-ensambladores">
                            BASKET BALL Normal(media, desv)
                            <NumberImput
                                label="Media (min)"
                                name="finJuegoBasketBallMedia"
                                value={apiJsonReq.finJuegoBasketBallMedia}
                                onChange={handleInputChange}
                            />
                            <NumberImput
                                label="Desviación (min)"
                                name="finJuegoBasketBallDesvi"
                                value={apiJsonReq.finJuegoBasketBallDesvi}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="submit-simulation" name="submit-button" type="submit">SIMULAR</button>
                    {(error) ? <label className="error">ERROR!</label> : <span></span>}
                </div>
            </form>

        </div>
    )
}


export default SimulationForm;