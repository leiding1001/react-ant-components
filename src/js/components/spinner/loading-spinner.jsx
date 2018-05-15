import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';

import './loading-spinner.styl';

class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
  }

  renderSpin() {
    const {isLoading} = this.props;

    return (
      <div className="loading-spinner-loading">
        <Spin size="large" spinning={isLoading} />
      </div>
    );
  }

  render() {
    const {position, showMask, isLoading} = this.props;

    if (!isLoading) {
      return null;
    }

    const positionClassName
      = position && position === 'fixed'
        ? 'loading-spinner-fixed'
        : 'loading-spinner-relative';

    return (
      <div className={`loading-spinner-container ${positionClassName}`}>
        {showMask ? (
          <div className="loading-spinner-mask"> {this.renderSpin()}</div>
        ) : (
          this.renderSpin()
        )}
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool,
  position: PropTypes.oneOf(['fixed', 'relative']),
  showMask: PropTypes.bool
};

LoadingSpinner.defaultProps = {
  isLoading: false,
  showMask: false,
  position: 'relative'
};

export default LoadingSpinner;
