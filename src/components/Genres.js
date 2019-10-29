import React from "react";

export default function Genres({
  genres,
  selectGenre,
  allMovies,
  selectedGenre
}) {
  return (
    <React.Fragment>
      <nav className="genres">
        <ul>
          <li onClick={allMovies} className={selectedGenre ? null : "active"}>
            All genres
          </li>
          {genres.map(genre => (
            <li
              key={genre._id}
              onClick={() => selectGenre(genre.name)}
              className={selectedGenre === genre.name ? "active" : null}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}
