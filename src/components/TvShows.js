import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export const TvShows = () => {

  const URL = "https://api.themoviedb.org/3/tv/popular?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US&page=1"

  const [shows, setShows] = useState([])

  //By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), 
  //and call it later after performing the DOM updates.
  useEffect(() => {
    /* fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US&page=1"
    ) */
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      setShows(json.results)
      console.log(json.results)
    })
  }, [])

  return (
    <section className="tvshow-container">
      {shows.map((show => {
        return (
        <div className="tvshow-img" key={show.id}> 
          <Link to={`/shows/${show.id}`}>
            <img
            src={`https://image.tmdb.org/t/p/w1280${show.poster_path}`} 
            alt={show.original_name} 
            />
            <div className="tvshow-title">
              {" "}
              <h1>{show.original_name}</h1>
              <p> Betyg: {show.vote_average}</p>
            </div>
            </Link>
        </div>
      )
    }))}  
  </section>
  )
};