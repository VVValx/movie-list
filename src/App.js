import React from "react";
import { getMovies } from "./fakeMovies/fakeMovieService";
import { getGenres } from "./fakeMovies/fakeGenreService";
import "./App.css";
import Movies from "./components/Movies";

class App extends React.Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentPage: 1,
    pageSize: 4,
    sortColumn: { name: "title", order: "asc" }
  };

  delMovie = id => {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  };

  changePage = page => {
    this.setState({ currentPage: page });
  };

  sortMovies = name => {
    const sortColumn = { ...this.state.sortColumn };
    if (name === sortColumn.name) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.name = name;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  selectGenre = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  allMovies = () => {
    this.setState({ selectedGenre: null });
  };

  render() {
    const {
      movies,
      pageSize,
      currentPage,
      genres,
      sortColumn,
      selectedGenre
    } = this.state;
    return (
      <div className="App">
        <Movies
          movies={movies}
          genres={genres}
          delMovie={this.delMovie}
          pageSize={pageSize}
          changePage={this.changePage}
          currentPage={currentPage}
          sortMovies={this.sortMovies}
          sortColumn={sortColumn}
          selectGenre={this.selectGenre}
          selectedGenre={selectedGenre}
          allMovies={this.allMovies}
        />
      </div>
    );
  }
}

export default App;
