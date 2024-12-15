import { useState } from 'react';
import { IStudent } from '../../types/student';
import CoursesList from '../courses-list/courses-list.comp';
import './student.css';

const Student = (props :Iprops) => {
    const [absent, setAbsent] = useState(0);
    const addAbsent = () => {
        setAbsent(absent + 1);
    }
    const removeAbsent = () => {
        if(absent > 0)
        setAbsent(absent - 1);
    }
    return (
        <div className="student-wrapper">
            <h1>{props.name}</h1>
            <p>
                The age: {props.age}
                <br />
                ID: {props.id}
            </p>
            <button onClick= {addAbsent}>+</button>
            <button onClick= {removeAbsent}>-</button>
            <p>{absent}</p>
            <CoursesList list= {props.coursesList}/>
            <hr />
        </div>
    )
} 

interface Iprops extends IStudent {};








export default Student;