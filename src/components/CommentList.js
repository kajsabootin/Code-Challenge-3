import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const CommentList = () => {

  const { showId } = useParams()
  const [comments, setComments] = useState([])
  
  return (
    <div> hej här kommer alla kommentarer</div>
  )
}