import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Speaking = () => {
  return (
    <ReactTypingEffect
      text={['     ', 'Welcome TRAINER! To the World of POKÉMON!', 'Choose your favourite POKÉMON by clicking the POKÉDEX','Good Luck!']}
      eraseDelay={1000}
      typingDelay={0}
    />
  )
}

export default Speaking