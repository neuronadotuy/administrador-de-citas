/** @format */

import React from "react";
import Emoji from "./Emoji";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <div className="mascota">
        <p>
          <Emoji symbol="🐶" />
          {cita.mascota}
        </p>
      </div>
      <div className="dueno">
        <p>
          <Emoji symbol="🧑" />
          {cita.propietario}
        </p>
      </div>
      <div className="fecha">
        <p>
          <Emoji symbol="📅" />
          {cita.fecha}
        </p>
        <p>
          <Emoji symbol="⏰" />
          {cita.hora}
        </p>
      </div>
      <p>
        <Emoji symbol="📝" /> {cita.consulta}
      </p>

      <button
        className="eliminar"
        onClick={() => {
          eliminarCita(cita.id);
        }}>
        &times; Eliminar
      </button>
    </div>
  );
};

export default Cita;
