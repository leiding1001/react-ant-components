import React, {Component} from 'react';

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="root-container">{this.props.children}</div>;
  }
}

RootContainer.propTypes = {};

RootContainer.defaultProps = {};

export default RootContainer;
