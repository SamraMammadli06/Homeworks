import React from 'react';
import Result from '../Result/Result';

function Results({ searchResults }) {
  return (
    <>
      {searchResults.map((result) => (
        <Result text={result} />
      ))}
    </>
  );
}

export default Results;