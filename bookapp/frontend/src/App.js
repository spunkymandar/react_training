import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
   <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddBook/>}></Route>
        <Route path="/edit/:id" element={<EditBook/>}></Route>
      </Routes>
   </Router>
  );
}

export default App;
