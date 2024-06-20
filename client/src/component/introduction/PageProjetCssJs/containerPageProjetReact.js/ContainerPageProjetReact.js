import React from 'react'
import '../containerPageProjetCssJs/containerPageProjetCssJs.css'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContainerPageProjetReact() {
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
                Mes projets React.
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
                  <span>React</span>
                  <span>Css</span>
                  <span>Node.js</span>
                  <span>MongoDb</span>
                </p>
                <div className='enfantDeuxDescription'>
                  <p>
                      Mon projet a été créé via React et Node.js. Il a été réalisé lors de mon projet de fin d'année pour ma formation de Concepteur Développeur D'applications Web à l'école Doranco. Ce projet est un forum qui comprend une partie administrateur dans laquelle ils peuvent gérer les signalements des utilisateurs, supprimer des Posts, des messages et bannir des utilisateurs.
                  </p>
                </div>
                <p className='enfantTroisDescription'>
                    <span><a id='lienForum' target="_blank" href='https://forum-poker.herokuapp.com/'>Visiter</a></span>
                </p>
            </div>
        </div>

        <div className='containerVideoSystemeSolaire'>
        </div>
   </Fragment>
  )
}
