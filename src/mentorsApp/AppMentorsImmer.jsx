import React, {useReducer} from 'react';
import {useImmer} from 'use-immer'

export default function AppMentorsImmer() {
    const initialPerson = {
        name: '엘리',
        title: '개발자',
        mentors: [
            {
                name: '밥',
                title: '시니어개발자',
            },
            {
                name: '제임스',
                title: '시니어개발자',
            },
        ],
    }

    const [person, updatetPerson] = useImmer(initialPerson)


    const updateMentor = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updatetPerson((person)=>{
            const mentor = person.mentors.find(m=>m.name===prev)
            mentor.name = current
        })
    }

    const addMentor = ()=>{
        const name = prompt('what is new mentor name?')
        const title = prompt('what is mentor title?')
        updatetPerson((person)=>{
            person.mentors.push({
                name: name,
                title: title
            })
        })
    }
    
    const deleteMentor = ()=>{
        const name = prompt('what is new mentor name?')
        updatetPerson((person)=>{
            const index = person.mentors.findIndex(m=>m.name===name)
            person.mentors.splice(index, 1)
        })
    }

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={updateMentor}> 멘토의 이름을 바꾸기 </button>
            <button onClick={addMentor}>멘토 이름 추가 </button>
            <button onClick={deleteMentor}> 멘토 이름 삭제</button>
        </div>
    );
}
