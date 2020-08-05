import React, { useState, FormEvent } from 'react';
import TeacherItem, {Teacher} from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import './style.css'
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
 
  async function searchTeachers(e: FormEvent){
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    })
    
    setTeachers(response.data)
    
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>

        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e=> {setSubject(e.target.value)}}
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Matematica', label: 'Matematica'},
              { value: 'Ciências', label: 'Ciências'},
              { value: 'Geografia', label: 'Geografia'},
              { value: 'Historia', label: 'Historia'},
              { value: 'Portugues', label: 'Portugues'},
              { value: 'Quimica', label: 'Quimica'},
              

            ]}/>

            
        <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={e=> {setWeekDay(e.target.value)}}
            options={[
              { value: '0', label: 'Domingo'},
              { value: '1', label: 'Segunda'},
              { value: '2', label: 'Terça-Feira'},
              { value: '3', label: 'Quarta-Feira'},
              { value: '4', label: 'Quinta-Feira'},
              { value: '5', label: 'Sexta-Feira'},
              { value: '6', label: 'Sabado'},
   

            ]}/>
          <Input type="time" label="Hora" name="time"
          value={time}
          onChange={e=> {setTime(e.target.value)}}></Input>
          
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher:Teacher) => {
          return <TeacherItem key={teacher.id}
          id={teacher.id}
          subject={teacher.subject}
          cost={teacher.cost}
          name={teacher.name}
          user_id={teacher.user_id}
          avatar={teacher.avatar}
          whatsapp={teacher.whatsapp}
          bio={teacher.bio}
          /> 
        })}
        
        

      </main>
    </div>
  );
}

export default TeacherList;