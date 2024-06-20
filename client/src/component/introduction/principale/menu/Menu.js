import React from 'react'
import '../menu/menu.css'
import { useRef } from 'react'

export default function Menu() {

  const refcontact=useRef();
 

  const animliencontactenter=(e)=>{
    refcontact.current.classList.add('contactanimenter');
   
  }
  const animliencontactleave=(e)=>{
    refcontact.current.classList.add('contactanimleave');
    setTimeout(() => {
      refcontact.current.classList.remove('contactanimleave');
      refcontact.current.classList.remove('contactanimenter');
    }, 200);
  }

  const refprojet=useRef();

  const animlienprojetenter=(e)=>{
    refprojet.current.classList.add('projetanimenter');
   
  }
  const animlienprojetleave=(e)=>{
    refprojet.current.classList.add('projetanimleave');
    setTimeout(() => {
      refprojet.current.classList.remove('projetanimenter');
      refprojet.current.classList.remove('projetanimleave');
    }, 200);
  }

  const scrollContact = ()=>{
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const scrollProjet = ()=>{
    document.querySelector('#projet').scrollIntoView({
      behavior: 'smooth'
    });

  }



  return (
    <div  className='menu'>
          <p>aurélien péria </p>
          <p>Réside à Sannois</p>
          <p>
            <a onClick={scrollContact} onMouseLeave={animliencontactleave} onMouseEnter={animliencontactenter} id='liencontact'>Contact<div ref={refcontact}></div></a> 
            
            <a onClick={scrollProjet} onMouseEnter={animlienprojetenter} onMouseLeave={animlienprojetleave} id='lienprojet'>Projet<div ref={refprojet}></div></a>
          
          </p>
      </div>
  )
}
