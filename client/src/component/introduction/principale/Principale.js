import React from 'react'
import "../principale/principale.css"
import Menu from './menu/Menu'
import Englobphototitres from './englobphototitres/Englobphototitres'
import Passion from './passion/Passion'
import Contact from './contact/Contact' 
import Projet from './projet/Projet'
import Competences from './competences/Competences'

export default function Principale() {
  

  return (
    <div  className='principale'>
      
      <Menu/>
      <Englobphototitres/>
      <Competences/>
      <Passion/>
      <Projet/>
      <Contact/>
    </div>
  )
}
