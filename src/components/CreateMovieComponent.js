import React, { useState } from "react";
import SaveLocalStorage from "../helpers/SaveLocalStorage";

const CreateMovieComponent = ({ setListMovieState }) => {
  const titleComponent = "Añadir película";
  const [movieState, setMovieState] = useState({
    title: "",
    description: "",
  });

  const { title, description } = movieState;

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    // Guardar estado
    setMovieState(movie);

    // Actualizar el estado del listado principal
    setListMovieState((elements) => {
      return [...elements, movie];
    });

    // Guardar en almacenamiento local
    SaveLocalStorage(movie);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {title && description && `Has creado la película: ${title}`}
      </strong>
      <form onSubmit={handlerSubmitForm}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default CreateMovieComponent;
