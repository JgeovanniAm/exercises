import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parse: null,
    }
  }

  render() {
    const doc =  new DOMParser().parseFromString(this.props.description, "text/xml");
    const p = doc.firstChild;
    return (
      <React.Fragment>
        <p>{p.innerHTML}</p>
      </React.Fragment>
    )
  }
}

export default Description;