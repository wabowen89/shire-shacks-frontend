import React from 'react'
import NotFoundGIF from '../assets/NotFoundGIF.gif'

const NotFound = () => {

  return (
    <>
      <h1>NotFound</h1>

      <img
        className="not-found-gif"
        src={NotFoundGIF}
        alt="aragorn lost in the forest"
        height="200"
      />

    </>
  );

}

export default NotFound