import React, { useEffect, useState } from "react";
import EditMovieComponent from "./EditMovieComponent";

const ListMoviesComponent = ({ listMovieState, setListMovieState }) => {
  // const [listMovieState, setListMovieState] = useState([]);

  const [edit, setEdit] = useState(0);

  useEffect(() => {
    console.log("Componentes de listado de películas cargado!");
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setListMovieState(movies);
    return movies;
  };

  const deleteMovie = (id) => {
    // Get movies storaged
    let savedMovies = getMovies();
    // Filter movies by id
    let newListMovies = savedMovies.filter(
      (movie) => movie.id !== parseInt(id)
    );
    // Update List Movie state
    setListMovieState(newListMovies);

    // Updates the data to local storage
    localStorage.setItem("movies", JSON.stringify(newListMovies));
  };

  return (
    <>
      {listMovieState != null ? (
        listMovieState.map((movie) => {
          return (
            <article key={movie.id} className="peli-item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>

              <button className="edit" onClick={() => setEdit(movie.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => deleteMovie(movie.id)}>
                Borrar
              </button>

              {/* Form to edit */}
              {edit == movie.id && (
                <EditMovieComponent/>
              )}
            </article>
          );
        })
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default ListMoviesComponent;
