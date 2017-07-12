import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const giphys = this.props.giphys;
    const giphysIndexItems = giphys.map(giphy => {
      return <GiphysIndexItem giphy={giphy} key={giphy.id}/>;
    });

    return (
      <div>
        <ul className="puppy-list">
          { giphysIndexItems }
        </ul>
      </div>
    );
  }
}

export default GiphysIndex;
