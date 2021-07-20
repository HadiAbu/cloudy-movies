import React, {useState} from 'react';
import './App.css';
import Movies from './components/Movies/Movies';
import SearchInput from './components/SearchInput/SearchInput';

function App() { 
  const[searchKey, setSearch] = useState('');
  const[year, setYear] = useState('');

  return (
    <div className="App">
      <p className={`${searchKey!==''? 'hidden':'welcome-msg'}`}>Hello World,<br/> Search for your favorite movies</p>
      <SearchInput onKeyChange={setSearch} onYearChange={setYear}/>
      {searchKey !== '' ? <Movies searchKey={searchKey} year={year}/>: null}
    </div>
  );
}

export default App;
