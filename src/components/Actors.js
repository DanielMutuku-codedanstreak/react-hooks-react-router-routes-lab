import React from "react";
import { actors } from "../data";

function Actors() {
  //console.log(actors)
  const list = actors.map((actor, index) => {
    return(
      <div key={index}>
        <h2>Name: {actor.name}</h2>
        <ul>
          Movies:
          {
            actor.movies.map((movie,index2)=>(
              <li key={index2}>
                {movie}
              </li>
            ))
          }
        </ul>
      </div>
    )
  })
  
  return <div>
    <h1>Actors Page</h1>
    {list}
  </div>;
}

export default Actors;
