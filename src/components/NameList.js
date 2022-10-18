import React from 'react'
import PersonComp from './PersonComp';

function NameList() {
  const names = ["Alex", "Nelson", "Nilda", "Claud", "Mans"];
  // return (
  //   <div>
  //     {names.map(name =>
  //       <li key={name}>{name}</li>
  //     )}
  //   </div>
  // )

  // const nameList = names.map(name => <li key={name}>{name}</li>);
  const nameListIndex = names.map((name, index) => <li key={index}>{name}</li>);
  return nameListIndex
}

export const PeopleList = () => {
  const people = [
    { id: 1, name: 'Alex', age: 30, work: 'PM' },
    { id: 2, name: 'Nels', age: 26, work: 'Dev' },
    { id: 3, name: 'Nylde', age: 22, work: 'Styl' },
    { id: 4, name: 'Claud', age: 18, work: 'Eng' },
    { id: 5, name: 'Mans', age: 24, work: 'Cons' }
  ];

  const peopleList = people.map(personInfo =>
    <PersonComp key={personInfo.id} person={personInfo} />)
  return peopleList
}

export default NameList
