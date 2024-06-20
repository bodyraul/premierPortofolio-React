import React from 'react'
import "./competences.css"
import { useEffect } from 'react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Competences() {

    const { ref:refDivInvisible15,inView:visible15 } = useInView({threshold:0.1,triggerOnce:true});
    const titreCompetence =useRef();
    const titreCompetencePersonnelles = useRef();
    const travailEquipe =useRef();const communication =useRef();const creativite =useRef();const organisation =useRef();const rigueur =useRef();const fiabilite =useRef();const curiosite =useRef();const polyvalence =useRef();
    const refPetitTitreCompetence = useRef();
    const refContParaCss =useRef();const refContParaHtml =useRef();const refContParaJs =useRef();const refContParaMongo =useRef();const refContParaJava =useRef();
    const refParaCss =useRef();const refParaHtml =useRef();const refParaJs =useRef();const refParaMongo =useRef();const refParaJava =useRef();
    const refBordureCompetenceDev =useRef();

    useEffect(() => {
      if(visible15){
        console.log("oui");
        titreCompetence.current.classList.remove("invisible");   
        titreCompetence.current.classList.add("ApparitionTitreCompentence");
        setTimeout(() => {
            titreCompetencePersonnelles.current.classList.remove("invisible");
            refPetitTitreCompetence.current.classList.remove("invisible");
            titreCompetencePersonnelles.current.classList.add("ApparitionTitreCompentencePerso");
            refPetitTitreCompetence.current.classList.add("PetitTitreCompetenceVisible");
        }, 500);
        setTimeout(() => {
            travailEquipe.current.classList.remove("invisible");
            refContParaCss.current.classList.remove("invisible");
            travailEquipe.current.classList.add("CompentencePersoVisible");
            refContParaCss.current.classList.add("affichageContainerParaCompetence");
        }, 1000);
        setTimeout(() => {
            communication.current.classList.remove("invisible");
            refContParaHtml.current.classList.remove("invisible");
            communication.current.classList.add("CompentencePersoVisible");
            refContParaHtml.current.classList.add("affichageContainerParaCompetence");
        }, 1150);
        setTimeout(() => {
            organisation.current.classList.remove("invisible");
            refContParaJs.current.classList.remove("invisible");
            organisation.current.classList.add("CompentencePersoVisible");
            refContParaJs.current.classList.add("affichageContainerParaCompetence");
        }, 1300);
        setTimeout(() => {
            fiabilite.current.classList.remove("invisible");
            refContParaMongo.current.classList.remove("invisible");
            fiabilite.current.classList.add("CompentencePersoVisible");
            refContParaMongo.current.classList.add("affichageContainerParaCompetence");
        }, 1450);
        setTimeout(() => {
            polyvalence.current.classList.remove("invisible");
            refContParaJava.current.classList.remove("invisible");
            polyvalence.current.classList.add("CompentencePersoVisible");
            refContParaJava.current.classList.add("affichageContainerParaCompetence");
        }, 1600);
        setTimeout(() => {
            curiosite.current.classList.remove("invisible");
            curiosite.current.classList.add("CompentencePersoVisible");
            
        }, 1750);
        setTimeout(() => {
            rigueur.current.classList.remove("invisible");
            refParaCss.current.classList.remove("invisible");
            rigueur.current.classList.add("CompentencePersoVisible");
            refParaCss.current.classList.add("AffichageCompetenceCss");
        }, 1900);
        setTimeout(() => {
            creativite.current.classList.remove("invisible");
            refParaHtml.current.classList.remove("invisible");
            creativite.current.classList.add("CompentencePersoVisible");
            refParaHtml.current.classList.add("AffichageCompetenceHtml");
        }, 2050);
        
        setTimeout(() => {
            refParaJs.current.classList.remove("invisible");
            refParaJs.current.classList.add("AffichageCompetenceJs");
            
        }, 2200);
        setTimeout(() => {
            refParaMongo.current.classList.remove("invisible");
            refParaMongo.current.classList.add("AffichageCompetenceMongo");
        }, 2350);
        setTimeout(() => {
            refParaJava.current.classList.remove("invisible");
            refParaJava.current.classList.add("AffichageCompetenceJava");
        }, 2500);
        setTimeout(() => {
            refBordureCompetenceDev.current.classList.remove("invisible");
            refBordureCompetenceDev.current.classList.add("bordureContainerAllCompetenceDev");
        }, 3000);
        
       
       
      }
    }, [visible15])
    

  return (
    <div className='blocCompetence'>
        <h1 ref={titreCompetence} className='titreCompetence invisible'>Mes compétences</h1>
        <div className='competence'>
            <div ref={refDivInvisible15} className='competencePersonnelles'>
                <p ref={titreCompetencePersonnelles} className='titreCompetencePerso invisible'> Compétences personnelles</p>
                <div className='DivCompetence1'>
                    <div ref={travailEquipe} className='invisible DivUneCompetence1'>
                        <p>
                            <span>Travail d'équipe</span>
                        </p>
                    </div>
                    <div ref={communication} className='invisible DivUneCompetence1'>
                        <p>
                            <span>Précision</span>
                        </p>
                    </div>
                </div>
                <div className='DivCompetence2'>
                    <div ref={creativite} className='invisible DivDeuxCompetence1'>
                        <p>
                            <span>Créativité</span>
                        </p>
                    </div>
                    <div ref={organisation} className='invisible DivDeuxCompetence2'>
                        <p>
                            <span>Organisation</span>
                        </p>
                    </div>
                </div>
                <div className='DivCompetence3'>
                    <div ref={rigueur} className='invisible DivTroisCompetence1'>
                        <p>
                            <span>Rigueur</span>
                        </p>
                    </div>
                    <div ref={fiabilite} className='invisible DivTroisCompetence2'>
                        <p>
                            <span>Autonomie</span>
                        </p>
                    </div>
                </div>
                <div className='DivCompetence4'>
                    <div ref={curiosite} className='invisible DivQuatreCompetence1'>
                        <p>
                            <span>Curiosité</span>
                        </p>
                    </div>
                    <div ref={polyvalence} className='invisible DivQuatreCompetence2'>
                        <p>
                            <span>Polyvalence</span>
                        </p>
                    </div>
                </div>
            </div>

            <div  className='competenceDeveloppement'>
                <p ref={refPetitTitreCompetence} className='petitTitreCompetence invisible'> Compétences en développement</p>
                <div ref={refContParaCss} className='contParaCss invisible'>
                    <p ref={refParaCss} className='paraCss'><span>CSS/SCSS/Bootstrap</span></p>
                </div>
                <div ref={refContParaHtml} className='contParaHtml invisible'>
                    <p ref={refParaHtml} className='paraHtml'><span>html</span></p>
                </div>
                <div ref={refContParaJs}  className='contParaJs invisible'>
                    <p ref={refParaJs}  className='paraJs'><span>javaScript/React</span></p>
                </div>
                <div ref={refContParaMongo}  className='contParaMongo invisible'>
                     <p ref={refParaMongo}  className='paraMongo'><span>MongoDB</span></p>
                </div>
                <div ref={refContParaJava}  className='contParaJava invisible'>
                    <p ref={refParaJava}  className='paraJava'><span>java</span></p>
                </div>
                <p  className='cacherBordure'></p>
                <p ref={refBordureCompetenceDev} className='cacherBordure2'></p>
            </div>
        </div>
        <div className='divFond'></div>
    </div>
  )
}
