import React from 'react';

class GiphysIndexItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let giphy = this.props.giphy;
    // let url = this.props.giphy.embed_url;
    return (
      <li>
        <img src={giphy.images.fixed_height.url} />
      </li>
    );
  }
}


export default GiphysIndexItem;
