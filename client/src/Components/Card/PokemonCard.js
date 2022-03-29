import React from 'react'
import './PokemonCard.css'


const PokemonCard = ({pokedex}) => {
  
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-imgBx'>
          <img src={pokedex.url_image} alt={pokedex.name} className="pokemons-img"/>  
        </div>
        <div className='card-body'>
            <span className='bg'></span>
            <span className='bg'></span>  
            <span className='bg'></span>
            <div className='content'>
              <h2 className='name'>{pokedex.name}</h2>
              <h4 className='type'>{pokedex.type}</h4>
              <h5 className='details'>{pokedex.details}</h5>
            </div>
        </div>
        </div>
  </div>
   
  )
}

export default PokemonCard