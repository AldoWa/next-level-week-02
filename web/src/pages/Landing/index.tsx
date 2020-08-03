import React from 'react';
import {Link} from 'react-router-dom'


import logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"/>
      <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudo"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
      </div>
      <span className="total-connections">
            Total de 200 conexões já realizadas 
            <img src={purpleHeart} alt="Coração roxo"/> 
      </span>
      </div>
    </div>
  );
}

export default Landing;