import logo from './logo.svg';
import './App.css';
import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders';

import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

const myrouter = createBrowserRouter([
  {path:'/',element:<Dashboard/>},
  {path:'/orders',element:<Orders/>}
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={myrouter} />
      
    </div>
  );
}

export default App;
