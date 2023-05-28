import React from "react";
import Search from "./Search";

function Header({ onFilterListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterListings={onFilterListings} />
    </header>
  );
}

export default Header;
