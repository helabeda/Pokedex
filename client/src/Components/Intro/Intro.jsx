import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Song from '../../assets/audio/Pokemon Song.mp3'
import Speaking from '../Speaking/Speaking'
import pokemonLogo from '../../assets/img/pokemon-logo.png'
import sacha from '../../assets/img/prof-oak.png'
import pokedex from '../../assets/img/pokedex.png'
import './Intro.css'

const Intro = () => {
    const audio = new Audio(Song)
    audio.volume = 0.5

    const [music, setMusic] = useState(audio)
    const [startGame, setStartGame] = useState(false)
    const [profOak, setProfOak] = useState(false)

    useEffect(() => {
        return function cleanup() {
          music.pause()
          music.currentTime = 0
          setMusic(audio)
        }
      }, [])

      function handleClick() {
        music.play()
        setStartGame(true)
        setTimeout(() => {
          setProfOak(Speaking)
        }, 2000)
      }
  
  return (
    <div id="welcome">

    <div className={`${startGame && profOak ? 'exit' : startGame ? 'start-game' : 'logo'}`}>
        <img src={pokemonLogo} alt="Pokemon logo" className='Pokemon-logo'/>
    </div>
    <div className={`${startGame ? 'logo' : 'click-to-start'}`} onClick={handleClick}>
        <div className="btn-bg Pokemon">
            <div className="btn-group">
                <div className="btn ball">
                <button>
                    <div className="pokemon-ball"></div>
                    <a>Pokémon
                    <span data-letters="Go!"></span>
                    <span data-letters="Go!"></span>
                    </a>
                </button>
                </div>
            </div>
       </div>
    </div>
    <div className={`${profOak ? 'prof-oak' : 'logo'}`}>
        <div className='oak-speaks'>
            {profOak}
        </div>
        <img src={sacha} alt="sacha" />
        <div className="pokedex-link">
            <Link exact to='/Home'> 
              <img src={pokedex} alt="ballPokedex" />  
            </Link>
            <p className='pokedex'>Click to the Ball to start</p> 
        </div>
    </div>
  </div>

  )
}

export default Intro