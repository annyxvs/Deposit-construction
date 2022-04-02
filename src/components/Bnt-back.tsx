import React from "react";
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from "react-router-dom";
import { ButtonBack } from '../styles/bnt-back'

export default function BntBack(){
  return(
    <>
      <div className="bnt-back">
        <ButtonBack><Link to= '/'><IoArrowBackOutline/></Link></ButtonBack>
      </div>
    </>
  )
}