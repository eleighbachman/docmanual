import React from 'react';

class Menu extends React.Component {
  render() {
    return(
      <div className="navBar">
        <h1><strong>Doc</strong>Manual</h1>
        <ul>
          <li className="search"><input placeholder="Search DocManual" type="text" /></li>
          <li className="navItem">React</li>
          <li className="navItem">Node</li>
          <li className="navItem">WordPress</li>
          <li className="navItem">CS</li>
          <li className="navItem"><strong>About</strong></li>
        </ul>
      </div>
    )
  }
}

export default Menu;
