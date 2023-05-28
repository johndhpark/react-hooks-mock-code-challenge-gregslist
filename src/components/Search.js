import React, { useState } from "react";

function Search({ onListingFilter }) {
  const [term, setTerm] = useState("");

  function handleInputChange(e) {
    // body...
    setTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onListingFilter(term);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={term}
        onChange={handleInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
