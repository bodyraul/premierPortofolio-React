import React from 'react'
import "../Container/container.css"


import { useEffect } from 'react';
import Information from '../informations/Information';
import { useNavigate } from 'react-router-dom';


export default function Element() {

  const navigate =useNavigate();

  useEffect(()=>{
    setTimeout(() => {
      navigate('/principale');
    }, 8000);
  },[])
  

  return (
    
          <div className='anim-intro'>
              <Information/>
          </div>
    
  )
}
