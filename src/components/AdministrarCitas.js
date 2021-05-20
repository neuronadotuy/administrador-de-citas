/** @format */

import React, { Fragment } from "react";
import Cita from "./Cita";

const AdministrarCitas = ({ citas, setCitas }) => {
  // Elimina una cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };
  return (
    <Fragment>
      <h3>{citas.length === 0 ? "No tiene citas" : "Citas"}</h3>
      {citas.map((cita) => {
        return <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />;
      })}
    </Fragment>
  );
};

export default AdministrarCitas;
