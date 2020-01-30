import React from "react";

const inputLeftMargin = { marginLeft: "20px" };

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1>Google Books React</h1>
      <a className="navbar-brand" style={inputLeftMargin} href="/">
        Search Books
      </a>
      <a className="navbar-brand" href="/books">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
