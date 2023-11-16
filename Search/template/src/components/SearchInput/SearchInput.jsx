import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [Text, setText] = useState();

  const InputChange = (e) => {
    const text = e.target.value;
    setText(text);
    onSearch(text);
  };

  return (
    <input
      type="text"
      value={Text}
      onChange={InputChange}
    />
  );
}

export default SearchInput;