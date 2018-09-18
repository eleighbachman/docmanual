import React from 'react';
import Subheader from './Subheader';

class Header extends React.Component {

  render() {
    return (
      <div className="category col-sm-6 col-md-3 col-lg-3">
        <h2>{this.props.name}</h2>
        <ul>
          {this.props.count.map((item, index) => <Subheader key={index}/>)}
          <div className="addSub"><input type="text" maxlength="30" placeholder="Add New"/></div>
        </ul>
      </div>
    )
  }
}

export default Header;
