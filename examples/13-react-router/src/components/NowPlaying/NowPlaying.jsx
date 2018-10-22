import React from "react";
import { Link } from "react-router-dom";
import movies from "../../movies/movies.js";

function NowPlaying() {
  return (
    <div>
      <h1>Now Playing</h1>
      <div className="row">
        {Object.entries(movies).map(entry => {
          const [movieKey, movie] = entry;
          const link = "/movie/" + movieKey;
          return (
            <div className="col" key={movieKey}>
              <h2>
                <Link to={link}>{movie.title}</Link>
              </h2>
              <Link to={link}>
                <img src={movie.poster} alt="" width="180" height="270" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NowPlaying;
