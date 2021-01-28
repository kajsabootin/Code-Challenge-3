import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//import { CommentForm } from './CommentForm'
//import { CommentList } from './CommentList'

export const Details = () => {

  const { showId } = useParams();
  const [shows, setShows] = useState([])

  console.log('är du här?')

  const URL = `https://api.themoviedb.org/3/tv/${showId}?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US`

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setShows(json);
    })
  }, [showId])

  return (
    <section className="details-container">
      <a className="backLink" href="/">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
            d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
            fill="#fff"
            fill-rule="evenodd"
          >
        </path>
        </svg> */}
        Back
      </a>
      <section className="details-background"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
        url(https://image.tmdb.org/t/p/w1280${shows.backdrop_path})`,
      }}
      alt="shows.original_name"
      >
        <div className="details-summary">
          <img
            src={`https://image.tmdb.org/t/p/w342${shows.poster_path}`} 
            alt="shows.original_name"
          />
          <div className="detalis-div">
            <h1> {shows.original_name} 
              <span>{shows.vote_average}</span>
            </h1>
            <p> {shows.overview} </p>
          </div>
        </div>
      </section>
      <div className="comment-container">
        {/* <CommentForm /> */}
        {/* <CommentList /> */}
      </div>
    </section>
  )
}