import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((listings) => {
        setAllListings(listings);
        setFilteredListings(listings);
      });
  }, []);

  function onListingDelete(id) {
    // body...
    setFilteredListings((prevListings) =>
      prevListings.filter((listing) => listing.id != id)
    );
  }

  function onListingFilter(term) {
    // body...
    setFilteredListings(
      allListings.filter((listing) =>
        listing.description.toLowerCase().includes(term.toLowerCase().trim())
      )
    );
  }

  return (
    <div className="app">
      <Header onListingFilter={onListingFilter} />
      <ListingsContainer
        listings={filteredListings}
        onListingDelete={onListingDelete}
      />
    </div>
  );
}

export default App;
