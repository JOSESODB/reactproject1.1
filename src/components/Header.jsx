import React from 'react'
const reactDescription = ["Fundamental", "Core", "Crucial"]
import logo from '../assets/react-core-concepts.png' 
function generateRandomIndex(maxLength) {
  return Math.floor(Math.random() * maxLength)
}
const description = reactDescription[generateRandomIndex(reactDescription.length)]
const Header= () => {
  return (
    <header>
      <img src={logo}  alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>




  )
}

export default Header
