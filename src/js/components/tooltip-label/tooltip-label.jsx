import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Tooltip} from 'antd';
import Highlight from 'react-highlighter';

import './tooltip-label.styl';

/**
 * This component is used to do the following things:
 * 1. Display text as a static label
 * 2. Highlight some words if `searchKeyword` prop is specified
 * 3. Enable a tooltip If current label is overflown
 */
class TooltipLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTextOverflown: false
    };
    this.tooltipTarget = null;
  }

  isElementWidthOverflown(el) {
    if (!el) {
      return false;
    }

    return el.clientWidth < el.scrollWidth;
  }

  updateTooltip() {
    const {isTooltipEnabled} = this.props;

    if (!isTooltipEnabled) {
      return;
    }

    let tooltipTarget = ReactDOM.findDOMNode(this.tooltipTarget);

    if (!tooltipTarget) {
      return;
    }

    let isTextOverflown = this.isElementWidthOverflown(tooltipTarget);

    if (isTextOverflown === this.state.isTextOverflown) {
      return;
    }

    this.setState({
      isTextOverflown
    });
  }

  componentDidMount() {
    this.updateTooltip();
  }

  componentDidUpdate() {
    this.updateTooltip();
  }

  renderLabel() {
    const {text, searchKeyword, width} = this.props;

    if (!searchKeyword) {
      return (
        <span
          ref={el => (this.tooltipTarget = el)}
          style={{width}}
          className="tooltip-label__text"
          onMouseOver={() => this.updateTooltip()}
        >
          {text}
        </span>
      );
    }

    return (
      <Highlight
        ref={el => (this.tooltipTarget = el)}
        style={{width}}
        className="tooltip-label__text"
        search={searchKeyword}
        matchElement="span"
        matchClass={'tooltip-label__highlight'}
        onMouseOver={() => this.updateTooltip()}
      >
        {text}
      </Highlight>
    );
  }

  render() {
    const {isTextOverflown} = this.state;
    const {isTooltipEnabled, placement, text} = this.props;

    if (isTooltipEnabled && isTextOverflown) {
      return (
        <Tooltip
          placement={placement}
          title={text}
          overlayClassName="tooltip-label__overlay"
          mouseEnterDelay={0.3}
          trigger={'hover'}
          destroyTooltipOnHide={true}
        >
          {this.renderLabel()}
        </Tooltip>
      );
    }

    return this.renderLabel();
  }
}

TooltipLabel.propTypes = {
  searchKeyword: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isTooltipEnabled: PropTypes.bool
};

TooltipLabel.defaultProps = {
  isTooltipEnabled: true,
  placement: 'top'
};

export default TooltipLabel;
