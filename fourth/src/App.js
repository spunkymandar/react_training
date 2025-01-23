import logo from './logo.svg';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import ProductList from './components/ProductList';
import Todos from './components/Todos';
import List from './components/Home';
import Todos1 from './components/Todos1';

function App() {
  return (
    <div>
     What is your country : <input type="text"></input><br></br>
     <LanguageSelector country='uk'></LanguageSelector>
     <ProductList></ProductList>
     {/* <Todos></Todos> */}
     <Todos1></Todos1>
    
    </div>
  );
}

export default App;
