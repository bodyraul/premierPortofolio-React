import React from 'react'
import { Fragment } from 'react'
import "../informations/information.css"
import Loader from '../loader/Loader'
export default function Information() {
  return (
   <Fragment>
      
      <p className='nom'>
            Aurélien Péria
      </p>
      <p className='projet'>
            Portfolio 2022
      </p>
      <p className='download'>
            <span>c</span> <span>h</span> <span>a</span> <span>r</span> <span>g</span> <span>e</span> <span>m</span> <span>e</span> <span>n</span> <span >t</span> <strong id='noway'>-- <br/></strong> <span>r</span> <span>é</span> <span>u</span> <span>s</span> <span>s</span> <span>i</span>
      </p>
      <Loader/>
   </Fragment>
  )
}
