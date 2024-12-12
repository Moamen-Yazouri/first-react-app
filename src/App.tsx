
import './App.css'
import Student from './components/student/student.comp'
function App() {
  return (
    <>
      <Student name="Moamen" age={20} id="120220426" coursesList={["React", "Angular", "Vue"]}/>
      <Student name="Khaled" age={20} id="120220717" coursesList={["React", "Angular", "Vue"]}/>
      <Student name="Fawzy" age={20} id="120220400" coursesList={["React", "Angular", "Vue"]}/>
      <Student name="Gehad" age={20} id="120220353" coursesList={["React", "Angular", "Vue"]}/>
    </>
  )
}

export default App
