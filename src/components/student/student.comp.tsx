import CoursesList from '../courses-list/courses-list.comp';
import './student.css';

const Student = (props :Iprops) => {
    return (
        <div className="student-wrapper">
            <h1>{props.name}</h1>
            <p>
                The age: {props.age}
                <br />
                ID: {props.id}
            </p>
            <CoursesList list= {props.coursesList}/>
            <hr />
        </div>
    )
} 

interface Iprops  {
    name: string,
    age: number,
    id: string,
    coursesList: string[],
}






export default Student;