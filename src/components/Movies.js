import React, { Component } from "react";
import Paginate from "./common/Paginate";
import Genres from "./Genres";
import { Pagination } from "../utils/Pagination";
import _ from "lodash";

class Movies extends Component {
  render() {
    const {
      movies,
      delMovie,
      pageSize,
      changePage,
      currentPage,
      genres,
      sortMovies,
      sortColumn,
      selectGenre,
      selectedGenre,
      allMovies
    } = this.props;

    const filtered = selectedGenre
      ? movies.filter(movie => movie.genre.name === selectedGenre)
      : movies;

    const sortedMovies = _.orderBy(
      filtered,
      [sortColumn.name],
      sortColumn.order
    );
    const newMovies = Pagination(sortedMovies, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="left-grid">
          <Genres
            genres={genres}
            selectGenre={selectGenre}
            allMovies={allMovies}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="right-grid">
          <header>
            {movies.length > 0 ? (
              <h2>There are {movies.length} movies</h2>
            ) : (
              <h2>There are no movies available</h2>
            )}
          </header>
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => sortMovies("title")}>Title</th>
                <th onClick={() => sortMovies("genre.name")}>Genre</th>
                <th onClick={() => sortMovies("numberInStock")}>Stock</th>
                <th onClick={() => sortMovies("dailyRentalRate")}>Rate</th>
                <th colSpan={2}>Likes</th>
              </tr>
            </thead>

            <tbody>
              {newMovies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <i className="fa fa-heart-o"></i>
                    {movie.likes}
                  </td>
                  <td>
                    <button onClick={() => delMovie(movie._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Paginate
            pageSize={pageSize}
            changePage={changePage}
            item={filtered}
            currentPage={currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
