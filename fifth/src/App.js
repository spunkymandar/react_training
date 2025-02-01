import logo from './logo.svg';
import './App.css';
import BlogPosts from './BlogPosts';
import ExampleComponent from './ExampleComponent';
import MultipleDependencyComponent from './MultipleDependencyComponent';
import DataFetcher from './DataFetcher';
// import DataFetcher from './DataFetcher';

function App() {
  return (
    <div className="App">
     {/* <BlogPosts></BlogPosts> */}
     {/* <ExampleComponent></ExampleComponent> */}
    
     {/* <MultipleDependencyComponent></MultipleDependencyComponent> */}
    <DataFetcher></DataFetcher>
    </div>
  );
}

export default App;
