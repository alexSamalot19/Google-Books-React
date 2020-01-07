import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1>Google Books React</h1>
      <a className="navbar-brand" href="/">
        Search Books
      </a>
      <a className="navbar-brand" href="/books">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;
