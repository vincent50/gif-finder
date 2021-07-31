import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridGifCard } from './GridGifCard'

export const GridGif = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && 'cargando data' }
      <div className='card-grid'>
          { images.map( image => (
            <GridGifCard 
              key={image.id} 
              {...image} 
            />
          )) }
      </div>
    </>
  )
}
