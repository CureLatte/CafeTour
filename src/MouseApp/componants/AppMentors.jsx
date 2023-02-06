import React, { useState } from 'react';

export default function() {
    const [person, setPerson] = useState({
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
    });

    const updateMentor = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson((prev_person)=>({...prev_person, mentors: prev_person.mentors.map((mentor)=>{
            if(mentor.name === prev){
                return {...mentor, name:current}
            }
            return {...mentor}
        })}))
    }

    const addMentor = ()=>{
        const name = prompt('what is new mentor name?')
        const title = prompt('what is mentor title?')

        setPerson((prev)=>({...prev, mentors: [...prev.mentors, {name: name, title:title}]}))

    }
    
    const deleteMentor = ()=>{
        const name = prompt('what is new mentor name?')
        
        setPerson((prev)=>({...prev, mentors: prev.mentors.filter(mentor=>mentor.name !== name)}))
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
