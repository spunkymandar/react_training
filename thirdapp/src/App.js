import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import SearchBar from './components/SearchBar';
import Overview from './components/Overview';
import { useState } from 'react';
import TermsOfUse from './components/TermsOfUse';
import LanguageSelector from './components/LanguageSelector';
import ProductList from './components/ProductList';

function App() {
  const[searchData, setSearchData]=useState('')
  const[productGroup, setProductGroup]=useState(
    [
      {id:'p1',title:'notebook',price:700},
      {id:'p2',title:'book',price:1500},
      {id:'p3',title:'laptop',price:17000}
    ]
  )
  // const productGroup=[
  //   {id:'p1',title:'notebook',price:700},
  //   {id:'p2',title:'book',price:1500},
  //   {id:'p3',title:'laptop',price:17000}
  // ]
  
  
  
  function updateSearch(event){
    // console.log("invoked")
    setSearchData(event.target.value)
  }
  function addProducts(){
    //productGroup.push({id:'p4',title:'laptop',price:17000})
    console.log(productGroup)
    setProductGroup([...productGroup,{id:'p4',title:'laptop',price:17000}])
  }
  return (
    <div className="App">
      <UserForm></UserForm>
    
    <br></br><br></br>
    <button onClick={addProducts}>Add</button>
    <SearchBar update={updateSearch}></SearchBar>
    <Overview data={searchData}></Overview>

    <TermsOfUse></TermsOfUse>
    <LanguageSelector country='us'></LanguageSelector>
    <ProductList products={productGroup}></ProductList>

    </div>
  );
}

export default App;
