import React from 'react'
import "./projet.css"
import imgJava from'../../../../image/javasvg.svg'
import imgReact from'../../../../image/reactsvg.svg'
import imgJs from'../../../../image/jsSvg.svg'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Projet() {
  const navigate =useNavigate();

  const { ref:refBlocProjet,inView:visible6 } = useInView({threshold:0.1,triggerOnce:true});
  const refIntroProjet = useRef();
  const refSpanIntroProjet = useRef();
  const refTitreProjet = useRef();
  const refBlocAuDessus =useRef();
  const refBlocAuDessus2 =useRef();
  const refBlocAuDessus3 =useRef();
 
// test
  useEffect(() => {
    if(visible6){
      refTitreProjet.current.classList.add('visibleIntroTitreProjet');
      refBlocAuDessus.current.classList.add('blocIndividuelVisible');
      setTimeout(() => {
        refBlocAuDessus2.current.classList.add('blocIndividuelVisible');
      }, 100);
      setTimeout(() => {
        refBlocAuDessus3.current.classList.add('blocIndividuelVisible');
      }, 200);
      setTimeout(() => {
        refIntroProjet.current.classList.add('animIntroProjetChargement');
        refSpanIntroProjet.current.classList.add('visibleIntroTitreProjet');
      }, 700);

    }
  }, [visible6])
  
  
  return (
    <div id='projet' className='ContainerProjet'>
        <h1 ref={refTitreProjet} className='titreProjet invisible'>Mes projets</h1>
        <p ref={refIntroProjet} className='introProjet'>
          <span ref={refSpanIntroProjet}  className='invisible'>Passionné de web design, j'ai fait mes gammes avec du css et du javascript natif. Puis, j'ai utilisé quelques librairies telles que jQuery ou bootstrap. Enfin, grâce à ma formation, j'utilise désormais la librairie react pour le front et Node.js ou Java pour le backend.</span>
        </p>
        <div ref={refBlocProjet} className='blocProjet'>
              <div className='blocIndividuel'>
                  <p ref={refBlocAuDessus} className='paraDessusBlocIndividuel'></p>
                  <p className='paravide'></p>
                  <p className='paraPleine'>
                    <img  id='imgJs' src={imgJs}></img>
                    <span>Projet css-javascript</span>
                    <p>Je vous présente ci-dessous des projets d'animation de boutons, d'images, d'animations du système solaire et bien d'autres encore.</p>
                  </p>
                  <p onClick={()=>{navigate('/pageProjetCssJs')}} className='bouttonBlocProjet'><button>Détail</button></p>
              </div>
              <div className='blocIndividuel'>
                  <p ref={refBlocAuDessus2} className='paraDessusBlocIndividuel'></p>
                  <p className='paravide'></p>
                  <p className='paraPleine'>
                    <img id='imgJava'  src={imgJava}></img>
                    <span>Projet java</span>
                    <p>Je vous présente ci-dessous des projets d'animation de bouttons, d'image ,d'animation du système solaire et bien d'autres encore.</p>
                  </p>
                  <p onClick={()=>{navigate('/pageProjetJava')}}  className='bouttonBlocProjet'><button>Détail</button></p>
              </div>
              <div className='blocIndividuel'>
                 <p ref={refBlocAuDessus3} className='paraDessusBlocIndividuel'></p>
                  <p className='paravide'></p>
                  <p className='paraPleine'>
                    <img id='imgReact' src={imgReact}></img>
                    <span>Projet react</span>
                    <p>Je vous présente ci-dessous des projets d'animation de bouttons, d'image ,d'animation du système solaire et bien d'autres encore.</p>
                  </p>
                  <p onClick={()=>{navigate('/pageProjetReact')}} className='bouttonBlocProjet'><button>Détail</button></p>
              </div>
          </div>
    </div>
  )
}
