import React from 'react'

export const Hero = ({ heroName }) => {
    if (heroName === 'Joker') {
        throw new Error("Heroname not found")
    }
  return (
      <h1>{heroName}</h1>
  )
}
