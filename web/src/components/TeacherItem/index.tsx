import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './style.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://api.adorable.io/avatars/113/abott@adorable.png" alt="avatar"/>
        <div>
          <strong>Diego Fernandes</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>Entusiasta das melhores tecnologias de química avançada.
        <br/><br/>
        Apaixonado por explodir coisas em laboratório e por mudar a 
        vida das pessoas através de experiencias. Mais de 200.000 pessoas 
        ja passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80.00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  
  );
}

export default TeacherItem;