import React, {Component} from 'react';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './common-pagination.styl';

class CommonPagination extends Component {
  constructor(props) {
    super(props);
  }

  renderTotal(total, showTotal, fixedLeftTotal) {

    if (!showTotal) {
      return null;
    }

    return (
      <div className={fixedLeftTotal ? 'total-fixed-left' : ''}>
        {showTotal(total)}
      </div>
    );
  }

  render() {
    const {
      className,
      total,
      showTotal,
      fixedLeftTotal,
      ...otherProps
    } = this.props;

    return (
      <div className={classNames('common-pagination', className)}>
        {this.renderTotal(total, showTotal, fixedLeftTotal)}
        <Pagination
          total={total}
          {...otherProps}
        />
      </div>
    );
  }
}

CommonPagination.propTypes = {
  className: PropTypes.string,
  fixedLeftTotal: PropTypes.bool,
  pageSize: PropTypes.number,
  current: PropTypes.number,
  showQuickJumper: PropTypes.bool,
  showSizeChanger: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
  total: PropTypes.number,
  showTotal: PropTypes.func,
  onChange: PropTypes.func
};

CommonPagination.defaultProps = {
  className: '',
  fixedLeftTotal: true,
  showQuickJumper: false,
  showSizeChanger: false,
  pageSizeOptions: ['20', '50', '100'],
  total: 0,
  showTotal: () => {},
  onChange: () => {}
};

export default CommonPagination;
