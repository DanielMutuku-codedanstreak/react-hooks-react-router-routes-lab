import React from "react";
import { directors } from "../data";

function Directors() {
  //console.log(directors)
  const list = directors.map((director,index)=>{
    return(
      <div key={index}>
        <h2>Name: {director.name}</h2>
        <ul>
          Movies:
          {
            director.movies.map((movie,index2)=>(
              <li key={index2}>{movie}</li>
            ))
          }
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {list}
  </div>;
}

export default Directors;
