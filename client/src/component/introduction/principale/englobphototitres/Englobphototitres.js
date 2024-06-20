import React from 'react'
import '../englobphototitres/englobphototitres.css'
import photoprofil from'../../../../../src/image/profil.jpg'
import { useRef } from 'react'
import { useEffect } from 'react'
export default function Englobphototitres() {
  const premierSoulignement =useRef();
  const deuxiemeSoulignement =useRef();
  const troisiemeSoulignement =useRef();
  const quatriemeSoulignement =useRef();
  const cinquiemeSoulignement =useRef();
  const siexiemeSoulignement =useRef();
  const refContainerAnim = useRef();
  
  useEffect(() => {
    refContainerAnim.current.classList.add('animContainerAnim');
    setTimeout(() => {
      premierSoulignement.current.classList.remove('avantPremierChargement');
      deuxiemeSoulignement.current.classList.remove('avantPremierChargement');
      troisiemeSoulignement.current.classList.remove('avantPremierChargement');
      quatriemeSoulignement.current.classList.remove('avantPremierChargement');
    }, 2900);
    setTimeout(() => {
      cinquiemeSoulignement.current.classList.add('avantPremierChargement');
      siexiemeSoulignement.current.classList.add('avantPremierChargement');
      
    }, 3200);
     

  }, [])

  return (
    <div className='englobphototitre'>
        <div className='containerAnim avantPremierChargement' ref={refContainerAnim} >
          <div id='containerphoto'>
            <p>Aurélien Péria</p>
            <p>développeur d'applications web</p>
          </div>
          <img src={photoprofil}></img>
        </div>
        <div   className='titremetier'>
            <p  id='premiertitre'>
            <span>D</span><span>é</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>p</span><span>e</span><span>u</span><span>r</span> <span> </span> <span>w</span><span>e</span><span>b</span> <span> </span><span> </span><span> </span> 
                <p className='avantPremierChargement' ref={premierSoulignement}></p>
                <p className='avantPremierChargement' ref={troisiemeSoulignement}></p>
                <p ref={cinquiemeSoulignement}></p>
            </p>
            <p  id='deuxiemetitre'>
                <span>P</span><span>a</span><span>s</span><span>s</span><span>i</span><span>o</span><span>n</span><span>n</span><span>é</span> <span>&</span> <span>c</span><span>r</span><span>é</span><span>a</span><span>t</span><span>i</span><span>f</span>
                <p className='avantPremierChargement' ref={deuxiemeSoulignement}></p>
                <p className='avantPremierChargement' ref={quatriemeSoulignement}></p>
                <p ref={siexiemeSoulignement}></p>
            </p>
        </div>
        <div></div>
      </div>
  )
}
