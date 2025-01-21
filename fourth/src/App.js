import logo from './logo.svg';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import ProductList from './components/ProductList';
import Todos from './components/Todos';

function App() {
  return (
    <div>
     What is your country : <input type="text"></input><br></br>
     <LanguageSelector country='uk'></LanguageSelector>
     <ProductList></ProductList>
     <Todos></Todos>
    </div>
  );
}

export default App;
