import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteAListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDeleteAListing={onDeleteAListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
