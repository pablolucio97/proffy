import React, {useState, FormEvent} from 'react'

import './styles/styles.css'
import PageHeader from '../../components/PageHeader/index'
import TeacherItem, {Teacher} from '../../components/TeacherItem/index'
import Input from '../../components/Input/index'
import Select from '../../components/Select/index'

import api from '../../services/api'



function TeacherList() {

  const[subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers ] = useState([])

  async function searchTeachers(e: FormEvent){
    e.preventDefault()

    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }

    return(
        <div id="page-teacher-list" className='container'>
            <PageHeader title='Estes sãos os proffys disponíveis.'>
            <form action="" id="search-teachers" onSubmit={searchTeachers}>
            <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "História", label: "História" },
              { value: "Português", label: "Português" },
              { value: "Inglês", label: "Inglês" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Biologia", label: "Biologia" },
              { value: "Filosofia", label: "Filosofia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeekDay(e.target.value)}
            id='fix'
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
              {teachers.map((teacher: Teacher) => (
                <TeacherItem key={teacher.id} teacher={teacher}/>
              ))}
            </main>
        </div>
    )
}

export default TeacherList