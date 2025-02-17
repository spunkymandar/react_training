// import logo from './assets/logo.jpg';

import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted!');
  }
  // return (
  //   <>
  //     <header>
  //       {/* <img src={logo} alt="A lock" /> */}
  //       <h1>Authentication required</h1>
  //     </header>
  //     <form onSubmit={handleSubmit}>
  //       <p>
  //         <label htmlFor="email">Email</label>
  //         <input type="email" id="email" />
  //       </p>
  //       <p>
  //         <label htmlFor="password">Password</label>
  //         <input type="password" id="password" />
  //       </p>
  //       <p className="actions">
  //         <button>Login</button>
  //       </p>
  //     </form>
  //   </>
  // );

  return(
    <>
      {/* <App1></App1> */}
      {/* <App2></App2> */}
      {/* <App4></App4> */}
      <App3></App3>
     
    </>
  )
}

export default App;