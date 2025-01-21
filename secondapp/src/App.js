import logo from './logo.svg';
// import './App.css';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import ProjectList from './components/ProjectList';
// import First from './components/First';
import Counter from './components/MyComponent';
import UserForm from './components/UserForm';
import First from './components/First';
import MyCounter from './components/MyCounter';
import ButtonGroup from './components/ButtonGroup';
import Register from './components/Register';
import Calculator from './components/Calculator';
import CheckCounter from './components/CheckCounter';
import Persona from './components/Persona';
import UserProfile from './components/UserProfile';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const myfunction=()=>{
    alert("Button clicked!!")
  }
  return (
    <div>
      <h1 >My Demonstation</h1>
       
        <Calculator></Calculator><br></br>
        <CheckCounter></CheckCounter><br>
        </br><br></br><br></br>
        <Persona></Persona>
        <UserProfile></UserProfile>

        


     </div>
  );
}

export default App;
