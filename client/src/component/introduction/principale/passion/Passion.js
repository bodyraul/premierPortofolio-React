import React, { useEffect } from 'react'
import '../passion/passion.css'
import { useRef } from 'react'
import { useState } from 'react';
import echec from "../../../../../src/image/échec.jpg"
import ski from'../../../../../src/image/skie.jpeg'
import voyage from'../../../../../src/image/voyage.jpeg'
import flecheDroite from'../../../../../src/image/flecheDroiteSvg.svg'
import flecheGauche from'../../../../../src/image/flecheGaucheSVG.svg'
import { useInView } from 'react-intersection-observer';

export default function Passion() {
  const [btnGaucheDisabled, setbtnGaucheDisabled] = useState(false);
  const [btnDroiteDisabled, setbtnDroiteDisabled] = useState(true);
  const [decompte, setdecompte] = useState(-1);
  const refcontainerPassion = useRef();
  const btnGauche = useRef();
  const btnDroite = useRef();
  const titrePrincipalPassion =useRef();
  const refContainerImgPassion1 =useRef();
  const refTitreEtTexteContainerPassion1=useRef();
  const refContainerImgPassion2=useRef();
  const refAllBoutton=useRef();
  const { ref:btnvisible,inView:visible2 } = useInView({threshold:0.5,triggerOnce:true});

  useEffect(() => {
    if(visible2){
      titrePrincipalPassion.current.classList.add('titrePrincipalPassionVisible');
      setTimeout(() => {
        refContainerImgPassion2.current.classList.add('ContainerPassion1Visible');
        refContainerImgPassion1.current.classList.add('ContainerPassion1Visible');
      },100 );
      setTimeout(() => {
        refTitreEtTexteContainerPassion1.current.classList.add('afficherBoutton');
      },100 );
      setTimeout(() => {
        refAllBoutton.current.classList.add('afficherBoutton');  
      },100 );
      
    }
  }, [visible2])

  const mouvementGauche= ()=>{

    if(decompte==-1){
      refcontainerPassion.current.classList.add("animSurLaGauche");
      refcontainerPassion.current.classList.remove("animSurLaDroite");
      setTimeout(() => {
        setdecompte(decompte-1);
        setbtnDroiteDisabled(!btnDroiteDisabled);
        btnGauche.current.classList.remove('visibiliterBoutton');
      }, 600);
    }
    if(decompte==-2){
      refcontainerPassion.current.classList.add("animSurLaGauche2");
      refcontainerPassion.current.classList.remove("animSurLaGauche");
      refcontainerPassion.current.classList.remove("animSurLaDroite2");
      setTimeout(() => {
        btnDroite.current.classList.add('visibiliterBoutton');
      }, 300);
      setTimeout(() => {
        setdecompte(decompte-1);
        setbtnGaucheDisabled(!btnGaucheDisabled);
      }, 600);
      
    }
    if(decompte==-3){
      refcontainerPassion.current.classList.add("animSurLaGauche3");
      refcontainerPassion.current.classList.remove("animSurLaGauche2");
      refcontainerPassion.current.classList.remove("animSurLaDroite3");
    }

  }

  const mouvementDroite= ()=>{
    if(decompte==0){
      setdecompte (-1);
    }
    if(decompte==-2){
      refcontainerPassion.current.classList.add("animSurLaDroite");
      refcontainerPassion.current.classList.remove("animSurLaDroite2");
      refcontainerPassion.current.classList.remove("animSurLaGauche2");
      setTimeout(() => {
        btnGauche.current.classList.add('visibiliterBoutton');
      }, 300);
      setTimeout(() => {
        setdecompte(decompte+1);
        setbtnDroiteDisabled(!btnDroiteDisabled);
      }, 600);
    }
    if(decompte==-3){
      refcontainerPassion.current.classList.add("animSurLaDroite2");
      refcontainerPassion.current.classList.remove("animSurLaDroite3");
      setTimeout(() => {
        btnDroite.current.classList.remove('visibiliterBoutton');
      }, 550);
      setTimeout(() => {
        setdecompte(decompte+1);
        setbtnGaucheDisabled(!btnGaucheDisabled);
      }, 600);
    }
  }

  const deplacementPhotoMilieu =()=>{
    if(decompte==-1){
      refcontainerPassion.current.classList.add("animSurLaGauche");
      refcontainerPassion.current.classList.remove("animSurLaDroite");
      setTimeout(() => {
        setdecompte(decompte-1);
        setbtnDroiteDisabled(!btnDroiteDisabled);
        btnGauche.current.classList.remove('visibiliterBoutton');
      }, 600);
    }
  }

  const deplacementPhotoDroite =()=>{
    if(decompte==-2){
      refcontainerPassion.current.classList.add("animSurLaGauche2");
      refcontainerPassion.current.classList.remove("animSurLaGauche");
      refcontainerPassion.current.classList.remove("animSurLaDroite2");
      setTimeout(() => {
        btnDroite.current.classList.add('visibiliterBoutton');
      }, 300);
      setTimeout(() => {
        setdecompte(decompte-1);
        setbtnGaucheDisabled(!btnGaucheDisabled);
      }, 600);
    }
  }

  return (
    <section ref={btnvisible} id='passion'>
       <h1 ref={titrePrincipalPassion} className="divNotVisible" > Mes passions</h1>
       <div ref={refcontainerPassion} id='containerPassion'>
            <div  className='premierContainerPassion'>
              <p ref={refContainerImgPassion1} className='containerimgpassion1 divNotVisible'>
                  <img id='imgPassion1' src={echec}></img>
              </p>
              <div className='divNotVisible' ref={refTitreEtTexteContainerPassion1}>
                    <p className="titrecontainer1passion">
                        Les jeux
                    </p>
                    <p>
                    Depuis mon plus jeune âge, j'aime me retrouver en famille ou avec des amis autour d'un jeu. Que ce soit jeux de société ou jeux vidéo, 
                    j'aime cette convivialité et ces moments de partage. J'aime particulièrement les jeux de stratégie comme les échecs.

                    </p>
              </div>
            </div>
            <div className='deuxiemeContainerPassion'>
                <p ref={refContainerImgPassion2} className='containerimgpassion1 divNotVisible'>
                    <img onClick={deplacementPhotoMilieu} id='imgPassion2'   src={ski}></img>
                </p>
                <div>
                      <p className="titrecontainer1passion">
                          Le sport
                      </p>
                      <p>
                      Passionné de ski, je pratique depuis l'âge de deux ans. J'aime tout particulièrement la sensation de liberté et d'énergie que procure ce
                      sport.  Que ce soit ski, randonnée ou simplement contempler le paysage, il n'y a rien de tel qu'un petit séjour en montagne pour me 
                      redynamiser ! J'aime et je pratique également d'autre sports, tels que le badminton, la natation etc...


                      </p>
                </div>
            </div>
            <div className='troisiemeContainerPassion'>
                <p className='containerimgpassion1'>
                    <img onClick={deplacementPhotoDroite} id='imgPassion3'  src={voyage}></img>
                </p>
                <div>
                      <p className="titrecontainer1passion">
                          Les voyages
                      </p>
                      <p>
                        Les voyages sont pour moi des occasions de découvrir de nouvelles cultures, de voir de magnifiques paysages. J'ai
                         l'opportunité de prendre de belles photos et de garder de bons souvenirs. C'est également l'endroit rêver pour partager de bons moments avec ses amis ou sa famille.

                      </p>
                </div>
            </div>
       </div>
       <div ref={refAllBoutton}  className="divNotVisible"  id='divBouttonPassion' >
          <div id='divBtn1Passion' className='visibiliterBoutton'   ref={btnGauche}>
            <button   id='btn1Passion' disabled={btnDroiteDisabled} onClick={mouvementDroite}><img src={flecheGauche}/></button>
          </div>

          <div id='divBtn2Passion' ref={btnDroite} >
            <button id='btn2Passion'  disabled={btnGaucheDisabled}  onClick={mouvementGauche}><img src={flecheDroite}/></button>  
          </div>
       </div>
    </section>
  )
}