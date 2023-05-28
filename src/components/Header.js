import React from "react";
import Search from "./Search";

function Header({ onListingFilter }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onListingFilter={onListingFilter} />
    </header>
  );
}

export default Header;
