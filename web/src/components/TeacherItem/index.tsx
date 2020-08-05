import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api';

export interface Teacher{
  id: string,
  subject: string,
  cost: number,
  user_id?: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string,
}


const TeacherItem: React.FC<Teacher> = (props) => {
  function handleCreateConnection(){
    api.post('connections',
    {
     user_id: props.user_id 
    })
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt="avatar"/>
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>
      <p>{props.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.cost}</strong>
        </p>
        <a target="_blank"onClick={handleCreateConnection}href={`https://wa.me/${props.whatsapp} `}>
          <img src={whatsapp} alt="whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  
  );
}

export default TeacherItem;