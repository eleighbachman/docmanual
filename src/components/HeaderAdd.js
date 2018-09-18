import React from 'react';

class HeaderAdd extends React.Component {
  render() {
    return (
      <div className="addHeader category col-sm-6 col-md-3 col-lg-3">
        <h2>Add New Topic</h2><br/>
        <p>Add your section title</p><br/>
        <input type="text" maxlength="30" placeholder="Subject Header" /><br/>
        <p>And at least one sub topic. <em>(You can add more later!)</em></p><br/>
        <input type="text" maxlength="30" placeholder="Subtopic" /><button>Add</button>
      </div>
    )
  }
}

export default HeaderAdd;
