import { useState } from "react";
import CreateMovieComponent from "./components/CreateMovieComponent";
import ListMoviesComponent from "./components/ListMoviesComponent";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [listMovieState, setListMovieState] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">
        <ListMoviesComponent listMovieState={listMovieState} setListMovieState={setListMovieState}/>
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <SearchComponent />

        <CreateMovieComponent setListMovieState={setListMovieState}/>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Máster en React -{" "}
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
  );
}

export default App;
