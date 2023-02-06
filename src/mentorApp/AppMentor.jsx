import React, { useState } from 'react';

export default function AppMentor() {
    const x = useState({
        name: '엘리',
        title: '개발자',
        mentor: {
            name: '밥',
            title: '시니어개발자',
        },
    });
    return (
        <div>
            <h1>
                {x[0].name}는 {x[0].title}
            </h1>
            <p>
                {x[0].name}의 멘토는 {x[0].mentor.name} ({x[0].mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    x[1]((prev)=>({...prev, mentor: {...prev.mentor, name}}))
                }}
            >
        멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);

                    x[1]((prev)=>({...prev, mentor: { name: '밥', title: title,}}))
                }}
            >
        멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
