import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { getAllPokemon, getPokemonbyName, getPokemonbyNumber } from '../../redux/actions/pokemonAction'
import PokemonCard from '../Card/PokemonCard'
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon.poke)
  const loading = useSelector(state => state.pokemon.isLoading)
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
 
  useEffect(()=>{
    dispatch(getAllPokemon())
  }, [])
  
  const searchName = (e) =>{
    e.preventDefault();
    dispatch (getPokemonbyName(name));

  }
  const searchNumber = (e) =>{
    e.preventDefault();
    dispatch (getPokemonbyNumber(number));

  }
  const handleSearchName = (e) =>{
    e.preventDefault();
    setName(e.target.value)
    }

    const handleSearchNumber = (e) =>{
      e.preventDefault();
      setNumber(e.target.value);
      }
return (
  <div className = "container"> 
					<div className="pokeball">
						<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ee4b875-457c-4f95-8dc5-0817243a235a/d8ogz4y-a89404b5-cbfe-43ae-af86-1f46f45687bc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlZTRiODc1LTQ1N2MtNGY5NS04ZGM1LTA4MTcyNDNhMjM1YVwvZDhvZ3o0eS1hODk0MDRiNS1jYmZlLTQzYWUtYWY4Ni0xZjQ2ZjQ1Njg3YmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WZnwNsqwI_04nmi8uhfnmmGtsJaFT3KBhiwVI6cx9ZI' alt='ball'/>
	        </div>
  <div className='pokeList'>
  <img src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w600" alt="pokemon go"  className="pokemonGo"/>
  <form onSubmit={searchName}>
  <input className="input" type="text" placeholder="Search by Name ..." onChange={handleSearchName}/>
  </form>
  <form onSubmit={searchNumber}>
  <input className="input" type="number" min="0" placeholder="Choose a Number ..." onChange={handleSearchNumber}/>
  </form>
  </div>
  <div className='pokemon-card'>
  {loading?
    <div>
      <img src='https://c.tenor.com/Hg2Mb_mQdhYAAAAi/pokemon-pokeball.gif' alt='pokemon loading'/>
    </div>:
    <div className='pokedexCard'>
    {pokemon.map((e=><PokemonCard pokedex={e} key={e._id}/>))}
    </div>}
  </div>
  </div>
)
}

export default Home