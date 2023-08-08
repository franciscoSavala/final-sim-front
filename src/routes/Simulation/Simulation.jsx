import './Simulation.css';
import SimulationForm from '../../components/SimulationForm/SimulationForm';
import Grid from '../../components/Grid/Grid';
import LastLine from '../../components/LastLine/LastLine';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Simulation({apiUrl}) {
  const [res, setRes] = useState({
    "data": [
      {
        "n": 307,
        "evento": "LLEGADA_BASKET",
        "reloj": 2002.8943966686286,
        "futbolALlegar": {
          "tipo": "FUTBOL",
          "rnd_llegada": 0.7885166310019969,
          "llegada": 2247.3651261629016,
          "rnd_fin_juego1": 0.0,
          "rnd_fin_juego2": 0.0,
          "fin_juego": 0.0,
          "estado": "NO_LLEGO"
        },
        "handBallALlegar": {
          "tipo": "HAND_BALL",
          "rnd_llegada1": 0.925791388085905,
          "rnd_llegada2": 0.26594997313455193,
          "llegada": 2399.224529368749,
          "rnd_fin_juego1": 0.0,
          "rnd_fin_juego2": 0.0,
          "fin_juego": 0.0,
          "estado": "NO_LLEGO"
        },
        "basketBallALlegar": {
          "tipo": "BASKET_BALL",
          "rnd_llegada1": 0.3508828436906253,
          "rnd_llegada2": 0.8926259745134412,
          "llegada": 2009.0863887781557,
          "rnd_fin_juego1": 0.0,
          "rnd_fin_juego2": 0.0,
          "fin_juego": 0.0,
          "estado": "NO_LLEGO"
        },
        "jugando1": {
          "tipo": "FUTBOL",
          "rnd_llegada": 0.09394908343671826,
          "llegada": 1625.9215592961946,
          "rnd_fin_juego1": 0.021273288868288165,
          "rnd_fin_juego2": 0.13326773886151677,
          "fin_juego": 2007.554723393595,
          "estado": "JUGANDO"
        },
        "jugando2": null,
        "finLimpieza": 1.7976931348623157E308,
        "cancha": {
          "estado": "OCUPADO"
        },
        "colaHF": 1,
        "colaB": 244,
        "acumuladorEsperaFutbol": 894.2670095719179,
        "acumuladorEsperaHandBall": 466.90696515226983,
        "acumuladorEsperaBasketBall": 239774.4501946942,
        "acumuladorCantidadFutbolLlegaron": 8,
        "acumuladorCantidadHandBallLlegaron": 5,
        "acumuladorCantidadBasketBallLlegaron": 255,
        "llegaronFutbolHandBall": null,
        "llegaronBasketBall": null
      }
    ],
    "promedioEsperaFutbol": 111.78337619648974,
    "promedioEsperaBasketBall": 940.2919615478204,
    "promedioEsperaHandBall": 93.38139303045396
  });

  const [table, setTable] = useState([
    {
      "n": 0,
      "evento": "INICIO",
      "reloj": 0.0,
      "futbolALlegar": {
        "tipo": "FUTBOL",
        "rnd_llegada": 0.5418580883652798,
        "llegada": 312.2305168523784,
        "rnd_fin_juego1": 0.0,
        "rnd_fin_juego2": 0.0,
        "fin_juego": 0.0,
        "estado": "NO_LLEGO"
      },
      "handBallALlegar": {
        "tipo": "HAND_BALL",
        "rnd_llegada1": 0.9015989054544912,
        "rnd_llegada2": 0.7583797007254877,
        "llegada": 400.0479073604917,
        "rnd_fin_juego1": 0.0,
        "rnd_fin_juego2": 0.0,
        "fin_juego": 0.0,
        "estado": "NO_LLEGO"
      },
      "basketBallALlegar": {
        "tipo": "BASKET_BALL",
        "rnd_llegada1": 0.2680393451712295,
        "rnd_llegada2": 0.20540141955697278,
        "llegada": 8.897589302889127,
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
    }
  ]);

  const navigate = useNavigate();

  const [base64Credentials, setBase64Credentials] = useState("");

  useEffect(() => {
    const base64Data = sessionStorage.getItem('base64Data');
    setBase64Credentials(base64Data);
  }, []);

  const filterSimulationData = (objeto, leaf, d = true) => {
    const newObjeto = { ...objeto };

    if (!leaf) {
      if(d) newObjeto.llegaronFutbolHandBall = objeto.llegaronFutbolHandBall.map(obj => filterSimulationData(obj, true));
      if(d) newObjeto.llegaronBasketBall = objeto.llegaronBasketBall.map(obj => filterSimulationData(obj, true));
      newObjeto.futbolALlegar = filterSimulationData(objeto.futbolALlegar, true);
      newObjeto.handBallALlegar = filterSimulationData(objeto.handBallALlegar, true);
      newObjeto.basketBallALlegar = filterSimulationData(objeto.basketBallALlegar, true);

      if (newObjeto.jugando1 !== null) newObjeto.jugando1 = filterSimulationData(objeto.jugando1, true);
      if (newObjeto.jugando2 !== null) newObjeto.jugando2 = filterSimulationData(objeto.jugando2, true);
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

    try {
      let res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': `Basic ${base64Credentials}`,
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setRes(resJson);
      }
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <div>
      <SimulationForm onFormatSubmit={handleFormSubmit}></SimulationForm>
      <LastLine response={{...filterSimulationData(res, false, false), data: res.data.map(objeto => filterSimulationData(objeto, false, false))}}></LastLine>
      <Grid data={table.map(objeto => filterSimulationData(objeto, false))}
        cantidadBasketBall={table[table.length - 1].llegaronBasketBall.length}
        cantidadFutbolHandball={table[table.length - 1].llegaronFutbolHandBall.length}></Grid>
    </div>
  );
}

export default Simulation;
