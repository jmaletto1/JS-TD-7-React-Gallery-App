import React from 'react';
import {NavLink} from 'react-router-dom';

// The NavLink component displays links to 3 default search values. As NavLink is used, the active link will be displayed as "selected".
const Nav = () => {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/search/Cats">Cats</NavLink></li>
          <li><NavLink to="/search/Dogs">Dogs</NavLink></li>
          <li><NavLink to="/search/Gorillas">Gorillas</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;