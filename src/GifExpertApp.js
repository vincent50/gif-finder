import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GridGif } from './components/GridGif';

const GifExpertApp = () => {

  // const categories = ['One Punch Man', 'Samurai X', 'Hunter X']
  const [categories, setCategories] = useState(['Gintama'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'Gintama'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        { 
          categories.map((category) => (
              <GridGif
                key={category} 
                category={category} 
              />
          )) 
        }
      </ol>
    </>
  )
}

export default GifExpertApp