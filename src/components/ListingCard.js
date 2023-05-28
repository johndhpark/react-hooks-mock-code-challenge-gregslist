import React, { useState } from "react";

function ListingCard({ listing, onDeleteAListing }) {
  const [favorited, setFavorited] = useState(false);

  const { id, description, image, location } = listing;

  function handleFavoritedBtnClick(e) {
    // body...
    setFavorited((prevStatus) => !prevStatus);
  }

  function handleDelBtnClick() {
    // body...
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.status) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then(() => {
        onDeleteAListing(id);
      });
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            className="emoji-button favorite active"
            onClick={handleFavoritedBtnClick}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={handleFavoritedBtnClick}
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelBtnClick}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
