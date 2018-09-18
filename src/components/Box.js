import React from 'react';
import Header from './Header';
import HeaderAdd from './HeaderAdd';

class Box extends React.Component {
  render() {
    let categories = ["React", "Node", "WordPress", "CS", "Mongo", "Joomla", "Magento"];
    return (
      <div className="box">
        <div className="container">
        <div className="row">
          {categories.map(category => <Header name={category} key={category} count={categories}/>)}
          <HeaderAdd />
        </div>
        </div>
      </div>
    )
  }
}

export default Box;
