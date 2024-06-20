import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import imgMessage from '../../../../image/imageMessage2.png'
import imgLinkedin from '../../../../image/imageLinkedin2.png'
import imgGithub from '../../../../image/imageGithub2.png'

export default function Contact() {

    const { ref:refDivInvisible,inView:visible5 } = useInView({threshold:0.8,triggerOnce:true});
    const [booleanTitre, setbooleanTitre] = useState(false);
    const refTitreContact =useRef();
    const refLogoContact1 =useRef();
    const refLogoContact2 =useRef();
    const refLogoContact3 =useRef();
    const refContainerContacts = useRef();

    useEffect(() => {
        if(visible5){

            refContainerContacts.current.classList.add('apparitionContainerContact');
            setTimeout(() => {
                refLogoContact1.current.classList.add('LogoContactVisible');
            }, 450);
            setTimeout(() => {
                refLogoContact2.current.classList.add('LogoContactVisible');
            }, 700);
            setTimeout(() => {
                refLogoContact3.current.classList.add('LogoContactVisible');
            }, 850);
            setTimeout(() => {
                refTitreContact.current.classList.add('afficherTitreContact');
            }, 1900);
            setTimeout(() => {
                refTitreContact.current.classList.add('cacherTitreContact');
            }, 3350);
            setTimeout(() => {
                refTitreContact.current.classList.remove('cacherTitreContact');
               setbooleanTitre(true);
            }, 4350);
            setTimeout(() => {
                refTitreContact.current.classList.add('afficherTitreContact2');
            }, 4650);
        }
    }, [visible5])


  return (
    <section >
        <div ref={refDivInvisible} id="contact" className='contactBasDePage '>
            <div ref={refContainerContacts} id="frereContactBasDePage"></div>
            <div className='invisibleContact' ref={refTitreContact} id='contactTitre1'> {booleanTitre==false? "Mon profil vous plaît ?" : "Contactez-moi"} </div>
            <div  id="logoContact">
                <div  className='invisibleContact' ref={refLogoContact1}>
                    <a target="blank"  href="mailto:aurelien.peria@gmail.com"><img src={imgMessage}/></a>
                </div>
                <div className='invisibleContact' ref={refLogoContact2}>
                    <a target="blank"  href="https://www.linkedin.com/in/aur%C3%A9lien-peria-424224187/"><img src={imgLinkedin}/></a>
                </div>
                <div className='invisibleContact' ref={refLogoContact3}>
                    <a target="blank"  href="https://github.com/bodyraul?tab=repositories"><img src={imgGithub}/></a>
                </div>
            </div>
        </div>
    </section>
  )
}
