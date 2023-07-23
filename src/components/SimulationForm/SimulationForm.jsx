import React, { useState } from "react";
import "./SimulationForm.css";
import NumberImput from "../NumberImput/NumberImput";

function SimulationForm() {

    const [apiJsonReq, setApiJsonReq] = useState({
        time: 500,
        iteraciones: 2000,
        desdeHora: 400,
        assemblers: 5,
        lowerLimitUniformAssembler: 25.0,
        upperLimitUniformAssembler: 35.0,
        furnaces: 1,
        lowerLimitUniformCook: 5.0,
        upperLimitUniformCook: 11.0,
        assemblersPayment: 3.75,
        furnaceCost: 80.0,
        moldProfit: 5.0,
        moldLimit: 275
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setApiJsonReq({
            ...apiJsonReq,
            [name]: Number(value)
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(apiJsonReq);
        try {
            let res = await fetch("http://localhost:8080/api/v1", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                body: JSON.stringify({...apiJsonReq})
            });
            let resJson = await res.json();
            if(res.status === 200){
                console.log(resJson);
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="simulation-form">
            <form onSubmit={handleSubmit}>
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
                    label="Ensambladores"
                    name="assemblers"
                    value={apiJsonReq.assemblers}
                    onChange={handleInputChange}
                />

                <div>
                    <NumberImput
                        label="Tiempo de ensamblado mínimo (min)"
                        name="lowerLimitUniformAssembler"
                        value={apiJsonReq.lowerLimitUniformAssembler}
                        onChange={handleInputChange}
                    />
                    <NumberImput
                        label="Tiempo de ensamblado máximo (min)"
                        name="upperLimitUniformAssembler"
                        value={apiJsonReq.upperLimitUniformAssembler}
                        onChange={handleInputChange}
                    />
                </div>


                <NumberImput
                    label="Hornos"
                    name="furnaces"
                    value={apiJsonReq.furnaces}
                    onChange={handleInputChange}
                />

                <div>
                    <NumberImput
                        label="Tiempo de cocción mínimo (min)"
                        name="lowerLimitUniformCook"
                        value={apiJsonReq.lowerLimitUniformCook}
                        onChange={handleInputChange}
                    />
                    <NumberImput
                        label="Tiempo de cocción máximo (min)"
                        name="upperLimitUniformCook"
                        value={apiJsonReq.upperLimitUniformCook}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <NumberImput
                        label="Pago a ensambladores ($)"
                        name="assamblerPayment"
                        value={apiJsonReq.assemblersPayment}
                        onChange={handleInputChange}
                    />

                    <NumberImput
                        label="Costo de hornos ($)"
                        name="furnaceCost"
                        value={apiJsonReq.furnaceCost}
                        onChange={handleInputChange}
                    />

                    <NumberImput
                        label="Ganancia por molde terminado ($)"
                        name="moldProfit"
                        value={apiJsonReq.moldProfit}
                        onChange={handleInputChange}
                    />

                    <NumberImput
                        label="Máximo de moldes diarios"
                        name="moldLimit"
                        value={apiJsonReq.moldLimit}
                        onChange={handleInputChange}
                    />
                </div>



                <button name="submit-button" type="submit">SUBMIT!!</button>
            </form>

        </div>
    )
}


export default SimulationForm;