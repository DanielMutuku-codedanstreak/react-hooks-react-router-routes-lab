import React from "react";
import { movies } from "../data";

function Movies() {
  //console.log(movies)
  const list = movies.map((movie,index)=>(
    <div key={index}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        Genres:
        {
          movie.genres.map((genre, index2)=>(
              <li key={index2}>{genre}</li>
          ))
        }
      </ul>
    </div>
  ))
  return <div>
    <h1>Movies Page</h1>
    {list}
  </div>;
}

export default Movies;
