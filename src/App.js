/** @format */

import { Fragment, useState, useEffect } from "react";
import AdministrarCitas from "./components/AdministrarCitas";
import Formulario from "./components/Formulario";

function App() {
  // Citas desde localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Tomar citas actuales y sumar la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <AdministrarCitas citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
