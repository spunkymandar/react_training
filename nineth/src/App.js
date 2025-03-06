import logo from './logo.svg';
import './App.css';
import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';

import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import { useState } from 'react';

const myrouter = createBrowserRouter([
  {path:'/',element:<Dashboard/>},
  {path:'/orders',element:<Orders/>}
]);

function App() {
  const[counter, setCounter]=useState(0)
  function handleIncCounter(){
    setCounter((prevCounter)=>prevCounter+1)
  }
  
  return (
    <div>
      <p>
        <button onClick={handleIncCounter}>Increase Counter</button>
      </p>
      <p>
        Current Counter:{counter}
      </p>
     
      <hr></hr>
      <RouterProvider router={myrouter} />
      <hr></hr>
      <p>
        This is footer
      </p>
      
    </div>
  );
}

export default App;
