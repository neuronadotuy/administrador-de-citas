/** @format */

import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";
import Emoji from "./Emoji";

const Formulario = ({ crearCita }) => {
  //
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    consulta: "",
  });

  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, consulta } = cita;

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      consulta.trim() === ""
    ) {
      showAlert();
      return;
    }
    // Asignar ID
    cita.id = uuidv4();
    crearCita(cita); // Pasamos la cita con el ID al state de todas las citas
    showSuccess(); // Mensaje de exito
    // Reset del formulario por el match del value de cada input
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      consulta: "",
    });
  };

  const showAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const showSuccess = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <Fragment>
      <h3>Crear Cita</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <Emoji symbol="🐶" />
          Mascota
        </label>
        <input
          type="text"
          name="mascota"
          value={mascota}
          className="u-full-width"
          placeholder="Nombre de la Mascota"
          onChange={handleChange}
        />

        <label htmlFor="">
          <Emoji symbol="🧑" />
          Dueño
        </label>
        <input
          type="text"
          name="propietario"
          value={propietario}
          className="u-full-width"
          placeholder="Dueño de la Mascota"
          onChange={handleChange}
        />

        <label htmlFor="">
          <Emoji symbol="📅" />
          Fecha
        </label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          className="u-full-width"
          onChange={handleChange}
        />

        <label htmlFor="">
          <Emoji symbol="⏰" />
          Hora
        </label>
        <input
          type="time"
          min="08:00:00"
          max="20:00:00"
          name="hora"
          value={hora}
          className="u-full-width"
          onChange={handleChange}
        />

        <label htmlFor="">
          <Emoji symbol="📝" />
          Consulta
        </label>
        <textarea
          name="consulta"
          value={consulta}
          className="u-full-width"
          onChange={handleChange}></textarea>

        {alert ? <Alert mensaje="Todos los campos son obligatorios" /> : null}
        {success ? (
          <Alert mensaje="Cita agregada con éxito" symbol="ok" cname="ok" />
        ) : null}

        <button type="submit" className="u-full-width">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
