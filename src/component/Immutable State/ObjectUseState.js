import React, {useState} from 'react'

const intialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}


export const ObjectUseState = () => {

    const [person, setPerson] = useState(intialState)
    const changeName = () => {
        // person.fname = 'Clark'
        // person.lname = 'Kent'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Rendered')

  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}