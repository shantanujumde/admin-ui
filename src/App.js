
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; import SearchBar from './components/SearchBar';
import Table from './components/Table';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="App container mt-3">
      <header className="App-header">
        <SearchBar setSearch={setSearch}/>
      </header>
      <main>
        <Table search={search}/>
      </main>
      
    </div>
  );
}

export default App;
