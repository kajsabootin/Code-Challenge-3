import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const CommentForm = () => {

  const { showId } = useParams()
  const [comment, setComment] = useState("")

  const handelSubmit = () => {

  }

  return (
    <form /* onSubmit={handelSubmit} */>
      <textarea
        className="comment-message"
        placeholder="Comment this show"
        /* value={message} */
        /* onChange={(event) => setMessage(event.target.value)} */
      />

      <input
        className="comment"
        onClick={handelSubmit}
        /* disabled={message.length < 5 || message.length > 140 ? true : false} */
        type="button"
        value="❤️ ❤️"
      />      


    </form>
  )
}