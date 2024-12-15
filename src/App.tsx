import { useState } from 'react';
import './App.css'
import Student from './components/student/student.comp'
import { IStudent } from './types/student'
const INTIAL_LIST : IStudent[] = [];
const studentsList: IStudent[] = [
  {
    name: "Moamen",
    age: 20,
    id: 120220426,
    coursesList: ["React", "Angular"],
  },
  {
    name: "Khaled",
    age: 21,
    id: 120220427,
    coursesList: ["React", "Angular", "Vue"],
  },
  {
    name: "Fawzy",
    age: 22,
    id: 120220428,
    coursesList: ["React", "Angular", "Next"],
  },
  {
    name: "Ahmed",
    age: 23,
    id: 120220429,
    coursesList: ["React",  "JS"],
  }
]; 

function App() {
  const [students, setStudents] = useState<IStudent[]>(INTIAL_LIST);

  const showStudents = () => {
    const students = [...studentsList];
    setStudents(students);
  }
  
  const hideStudents = () => {
    setStudents([]);
  }
  return (
    <>
      <button className= "show" onClick= {showStudents} >Show Students</button>
      <button className= "hide" onClick= {hideStudents} >Hide Students</button>
      {
        students.map( std => (
          <Student
            key={std.id} 
            name= {std.name}
            age={std.age}
            id={std.id}
            coursesList={std.coursesList} 
          />
        ))
      }
    </>
  )
}

export default App
