import React from 'react'
import './containerPageProjetCssJs.css'
import videoSystemeSolaire from '../../../../video/animationSystemeSolaire.mp4'
import videoAnimCss from '../../../../video/animationCSS.mp4'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import videoSiteUnAwwward from '../../../../video/videoSiteUnAwwward.mp4'
import videoSiteDeuxAwwward from '../../../../video/videoSiteDeuxAwwward.mp4'

export default function ContainerPageProjetCssJs() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const retourPagePrincipale = ()=>{
    navigate("/principale");
  }
  
  return (
   <Fragment>
      <p className='paraLienRetour'>
        <a onClick={retourPagePrincipale} className='lienRetour'>retour</a>
      </p>
      <div id='test1' className='titreProjetCssEtJs'>
            <h1>
                Mes projets Css et Js.
            </h1>
        </div>

        <div className='descriptionDuProjet'>
            <div className='intituleDescriptionProjet'>
              <p>
                <span> Outils</span>
              </p>
              <p>
                <span> Projet</span>
              </p>
              <p>
                <span> Site</span>
              </p>
            </div>
            <div className='descriptionIntituleProjet'>
                <p className='enfantUnDescription'>
                  <span>Html</span>
                  <span>Css</span>
                  <span>Js</span>
                  <span>Jquery</span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                  Mon animation représente de manière plutôt réaliste la rotation des planêtes autour du soleil avec un compteur de tours en haut de la page. Si vous laissez votre souris sur un des compteurs, la rotation de la planête correspondante représentée par un cercle s'illuminera en blanc. La page est également parfaitement responsive. Il est difficile de se représenter cette animation à l'aide d'une simple description, alors qu'attendez-vous pour regarder la vidéo juste en dessous.
                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
          <video controls  src={videoSystemeSolaire}>

          </video>
        </div>

        <div className='descriptionDuProjet'>
            <div className='intituleDescriptionProjet'>
              <p>
                <span> Outils</span>
              </p>
              <p>
                <span> Projet</span>
              </p>
              <p>
                <span> Site</span>
              </p>
            </div>
            <div className='descriptionIntituleProjet'>
                <p className='enfantUnDescription'>
                  <span>Html</span>
                  <span>Css</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                   Ce projet est constitué de plusieurs animations réalisées en Css et Html uniquement. Ce sont des animations de boutons et de cards que j'ai créés à l'aide d'une de mes formations Udemy. Je vous en ai selectionné quelques-unes dans la vidéo ci-dessous.
                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
        
          <video controls  src={videoAnimCss}>

          </video>
        </div>

        <div className='descriptionDuProjet'>
            <div className='intituleDescriptionProjet'>
              <p>
                <span> Outils</span>
              </p>
              <p>
                <span> Projet</span>
              </p>
              <p>
                <span> Site</span>
              </p>
            </div>
            <div className='descriptionIntituleProjet'>
                <p className='enfantUnDescription'>
                  <span>Html</span>
                  <span>Css/scss</span>
                  <span>Javascript</span>
                  <span></span>
                  <span></span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                  Aimant par dessus tout me challenger et progresser, j'ai tenté de reproduire avec le plus de précision possible quelques sites nominés que j'ai trouvé sur le site Awwward et qui sont originaux ou qui utilisent certains méchanismes intéressants. 
                  Toutes les images que vous verrez proviennent du site que j'ai reproduit. Je vous conseille vivement de le visiter tant pour son originalité que pour sa réalisation.
                  Cliquez <a style={{textDecoration : "none",color:"red"}} target='_blank' href='https://thesupply.com/?fbclid=IwAR2Jmt8b-DnQkCZRBv3Y9KHW75YJgo8XelT5PAdD24_Fg1PvVBh3T5V5wuU'>"ici"</a>  pour y accéder et bon visionnage.

                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
          <video controls  src={videoSiteUnAwwward}>

          </video>
        </div>


        <div className='descriptionDuProjet'>
            <div className='intituleDescriptionProjet'>
              <p>
                <span> Outils</span>
              </p>
              <p>
                <span> Projet</span>
              </p>
              <p>
                <span> Site</span>
              </p>
            </div>
            <div className='descriptionIntituleProjet'>
                <p className='enfantUnDescription'>
                  <span>Html</span>
                  <span>Css/scss</span>
                  <span>Javascript</span>
                  <span></span>
                  <span></span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                  Voici le deuxième site que j'ai reproduit et que j'ai également découvert sur le site Awwward.
                  Toutes les images que vous verrez proviennent du site que j'ai reproduit. Je vous conseille vivement de le visiter tant pour son originalité que pour sa réalisation.
                  Cliquez <a style={{textDecoration : "none",color:"red"}} target='_blank' href='https://aurabora.com/	'>"ici"</a>  pour y accéder et bon visionnage.

                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
          <video controls  src={videoSiteDeuxAwwward}>

          </video>
        </div>
   </Fragment>
  )
}

