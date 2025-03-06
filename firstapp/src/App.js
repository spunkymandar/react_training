// import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import User from './components/User';
import First from './First';
import axios from "axios"
// import AnotherComponent from './components/AnotherComponent';


  function App() {
    
    return (
      <div className="App">
        <h1>Welcome to React Application!!</h1>
        <header>
        <img src={`${process.env.PUBLIC_URL}/MJ_1.jpg`}  alt="logo" />
        <h1>Mandar Jog</h1>
        <p>Web developer, online course instructor & book author</p>
      </header>
      <main>
        <p>Right now, I am 35 years old and I live in Munich.</p>
        <p>
          My full name is Mandar Jog and I am a web developer as
          well as top-rated, bestselling online course instructor.
        </p>
      </main>

        <MyButton></MyButton>
        <User></User>
        <First data="Tutorial"></First>
        {/* <AnotherComponent data="somedata"></AnotherComponent> */}
      </div>
    );
  }

export default App;
