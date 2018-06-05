import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import CloneDeep from 'lodash.clonedeep';

import MulSelectItem from './items/mul-select.jsx';

import './style/index.styl';

class FilterBar extends Component {

  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      data: CloneDeep(props.data)
    };
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps === this.props) {
      return;
    }

    if(nextProps.data === this.props.data) {
      return;
    }

    this.setState({
      data: CloneDeep(nextProps.data)
    });

  }

  handleRemove(itemData) {
    this.setState({
      data: {
        ...this.state.data,
        ...itemData}
    });
  }

  handleChange(itemData) {
    this.setState({
      data: {
        ...this.state.data,
        ...itemData}
    });
  }

  handleSearch(itemData) {
    const {onSearch} = this.props;

    this.setState({itemData}, (state) => {
      if(onSearch && _.isFunction(onSearch)) {
        onSearch(state);
      }
    });
  }

  renderDefaultFilterItems() {
    return (
      <div className="filter-bar__list-container">
        <ul>
          <MulSelectItem
            data={{id: 'More'}}
            removable={false}
            onChange={this.handleChange}
          />
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="filter-bar__container">
        {this.renderDefaultFilterItems()}
      </div>
    );
  }
}

FilterBar.propTypes = {
  onSearch: PropTypes.func
};

FilterBar.defaultProps = {
  onSearch: () => {}
};

export default FilterBar;