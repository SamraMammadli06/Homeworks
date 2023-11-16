import './App.css';
import { useState } from 'react';
import Results from './components/Results/Results';
import SearchInput from './components/SearchInput/SearchInput';

const arr = ['hello','world','water','something'];

function App() {
  const [searchResults, setSearchResults] = useState(arr);

  const onSearch = (searchText) => {
    const trimmedText = searchText.trim();
    if (trimmedText === '') {
      setSearchResults(arr);
    }  
    else{
      const filteredResults = arr.filter((result) =>
        result.includes(trimmedText)
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div>
      <SearchInput onSearch={onSearch} />
      <Results searchResults={searchResults} />
    </div>
  );
}

export default App;
