import React, {Component} from 'react';
import {Icon} from 'antd';
import PropTypes from 'prop-types';
import _ from 'underscore';

class FilterWrapperItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const {onRemove, id} = this.props;

    if(onRemove && _.isFunction(onRemove)) {
      onRemove(id);
    }
  }

  renderRemoveButton() {
    return (
      <span className="filter-bar__item__close" onClick={this.handleRemove}>
        <Icon
          type="anticon anticon-cross-circle"
        />
      </span>
    );
  }

  render() {

    return(

      <li>
        <div className="filter-bar__item">
          {this.props.children}

          {/* <Icon
            className="filter-bar__item__dropdown-icon"
            type="caret-down"
          /> */}
          {this.props.removable ? this.renderRemoveButton() : null}
        </div>
      </li>
    );
  }
}

FilterWrapperItem.propTypes = {
  onRemove: PropTypes.func,
  removable: PropTypes.bool,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  data: PropTypes.object
};

FilterWrapperItem.defaultProps = {
  onRemove: () => {},
  removable: false,
  onChange: () => {},
  onSearch: () => {},
  data: {}
};

export default FilterWrapperItem;
