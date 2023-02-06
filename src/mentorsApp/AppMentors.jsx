import React, {useReducer} from 'react';
import personReducer from './reducer/person_reducer'

export default function AppMentors() {
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

    const [person, dispatch] = useReducer(personReducer, initialPerson)


    const updateMentor = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type: 'update', name: prev, title: current})
    }

    const addMentor = ()=>{
        const name = prompt('what is new mentor name?')
        const title = prompt('what is mentor title?')
        dispatch({type:'add', mentor:{name, title}})

    }
    
    const deleteMentor = ()=>{
        const name = prompt('what is new mentor name?')
        dispatch({type:'delete', name})
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
