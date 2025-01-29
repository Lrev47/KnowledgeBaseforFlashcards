import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/cards">Flashcard List</Link>
        </li>
        <li>
          <Link to="/topics">Topic Page</Link>
        </li>
        {/* Add more links here as you add more routes */}
      </ul>
    </nav>
  );
}

export default Header;
