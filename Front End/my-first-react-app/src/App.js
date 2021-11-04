import React from 'react';
import './App.css';
import SearchForm from './Components/Search/SearchForm';
import BasicCard from './Components/Search/Item';
//import SearchForm from './Components/Search/SearchForm.js';
import './Style/Search/cards.css';
import Nav from './Components/Global/Nav';
import ItemsContext from './Components/Global/ItemsContext';
function App() {
  return (
    <div className="App">
      <ItemsContext>
        <Nav/>
      </ItemsContext>
      {/* <div className="cards-flex">
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      <BasicCard/>
      </div> */}
    </div>
  );
}

export default App;
