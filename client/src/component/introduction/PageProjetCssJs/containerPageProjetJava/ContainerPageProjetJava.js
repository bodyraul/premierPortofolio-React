import React from 'react'
import '../containerPageProjetCssJs/containerPageProjetCssJs.css'
import videoAppliJava from '../../../../video/appliJava.mp4'
import videoAppliJavaAndroid from '../../../../video/AppliJavaMobil.mp4'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContainerPageProjetJava() {
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
                Mes projets Java.
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
                  <span>Java</span>
                  <span>Spring </span>
                  <span>Html</span>
                  <span>Css</span>
                  <span>Bootstrap</span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                  Ma première application JAVA est un formulaire dans lequel je peux créer et supprimer un utilisateur de la base de données. Si celà vous intéresse, je vous explique tout dans la vidéo ci-dessous. Bon visionnage !
                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
          <video controls  src={videoAppliJava}>

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
                  <span>Java</span>
                  <span>Android studio</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                  Ma première application android réalisée en JAVA sur Android studio est un  QUIZZ. Si celà vous interesse, je vous explique tout dans la vidéo ci-dessous. Bon visionnage !
                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span>Indisponible</span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
          <video controls  src={videoAppliJavaAndroid}>

          </video>
        </div>
   </Fragment>
  )
}
