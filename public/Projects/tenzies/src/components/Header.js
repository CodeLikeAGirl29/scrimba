import React from "react"
import Confetti from "react-confetti"

export default function Header () {
  return (
    <div>
        <Confetti />
          <h1 className="title">Lets Play Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. 
          Click each die to freeze it at its current value between rolls.</p>

    </div>
  )
}