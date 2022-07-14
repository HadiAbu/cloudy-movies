import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Movies.css";

const Movies = ({ searchKey, year }) => {
  const [movies, setMovies] = useState([]);
  const [currPage, setPage] = useState(1);
  let API = `https://www.omdbapi.com/?s=${searchKey}${
    year !== "" ? "&y=" + year : ""
  }&page=${currPage}&apikey=157f34ed`;
  const [totalpages, setTotalPages] = useState(0);

  useEffect(() => {
    const callFetchApi = async () => {
      const { data } = await axios.get(API);

      setTotalPages(data.totalResults);

      setMovies(data.Search);
    };
    callFetchApi();
  }, [API]);

  return (
    <div className="movies-container">
      {Array.isArray(movies) && movies.length !== 0 ? (
        <div>
          <div className="movies-container">
            {movies.map((movie) => {
              return <Movie key={movie.imdbID} movie={movie} />;
            })}
          </div>
          <div className="pagination">
            <button
              disabled={currPage === 1}
              onClick={() => setPage(currPage - 1)}
            >
              Prev
            </button>
            <span style={{ color: "rgb(61, 64, 79)" }}>- {currPage} -</span>
            <button
              disabled={Math.floor(totalpages / 10) === currPage}
              onClick={() => setPage(currPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="not-found">No results found!</div>
      )}
    </div>
  );
};

const Movie = ({ movie }) => {
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.Poster} alt="poster" />
      <span className="movie-title">{movie.Title}</span>
      <span className="movie-year">{movie.Year}</span>
    </div>
  );
};

export default Movies;
