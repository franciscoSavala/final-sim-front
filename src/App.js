import './App.css';
import SimulationForm from './components/SimulationForm/SimulationForm';
import Grid from './components/Grid/Grid';
import { useState } from 'react';

function App() {
  const [table, setTable] = useState([]);

  const filterSimulationData = (objeto, leaf) => {
    const newObjeto = { ...objeto }; // Create a shallow copy of the original object

    if (!leaf) {
      newObjeto.ensambladores = objeto.ensambladores.map(obj => filterSimulationData(obj, true));
      newObjeto.hornos = objeto.hornos.map(obj => filterSimulationData(obj, true));
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
      <SimulationForm onFormatSubmit={handleFormSubmit}></SimulationForm>
      <Grid data={table.map(objeto => filterSimulationData(objeto, false))} cantidadEnsambladores={(table.length > 0) ? table[0].ensambladores.length : 1} cantidadHornos={(table.length > 0) ? table[0].hornos.length : 1}></Grid>
    </div>
  );
}

export default App;
