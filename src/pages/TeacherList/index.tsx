import React, { useState, useEffect, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'

import TeacherItem, { Teacher }  from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

function TeacherList() {
    const [teachers, setTeachers] = useState()

    const [subject, setSubject] = useState();
    const [week_day, setWeek_day] = useState();
    const [time, setTime] = useState();

    useEffect(() => {
        api.get('classes').then((response) => {
            setTeachers(response.data)
        })
    },[])

    useEffect(() => {}, [searchTeachers])

    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis." >
                <form onSubmit={searchTeachers} id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Máteria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Lógica de programação', label: 'Lógica de programação' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Mátemática', label: 'Mátemática' }
                        ]}
                    />
                    <Select 
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeek_day(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' }
                        ]}/>
                    <Input 
                        name="time" 
                        label="Horário"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers && teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher}/>
                    )
                })}
            </main>
        </div>
    )
}

export default TeacherList;