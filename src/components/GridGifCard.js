import React from 'react'

export const GridGifCard = ({id, url, title}) => (
    <div className='card animate__animated animate__fadeIn'>
      <img key={id} src={url} alt={title} />
      <p>{title}</p>
    </div>
)
