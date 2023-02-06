export default function personReducer(person, action){
    switch (action.type){
    case 'update':{
        console.log('hello')
        const {name, title} = action
        return {
            ...person,
            mentors: person.mentors.map((mentor)=>{
                if(mentor.name === name){
                    return {...mentor, title: title}
                }
                return {...mentor}
            })
        }
    }
    case 'add':{
        return {
            ...person,
            mentors: [...person.mentors, action.mentor]
        }
    }

    case 'delete':{
        return {
            ...person,
            mentors: person.mentors.filter((mentor)=> mentor.name !== action.name)
        }
    }
    default:{
        throw Error(`action type is undefined : ${action.type}`)
    }
    }

}
