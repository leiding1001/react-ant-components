/**
 * ┌────────────────────── CommonTable -────────────────────────┐
 * │                                                            │
 * │                                                            │
 * │                                                            │
 * │                          Content                           │
 * │                                                            │
 * │                                                            │
 * │                                                            │
 * ├────────────────────────────────┬───────────────────────────┤
 * │ Total | Export                 │        pagination         │
 * └────────────────────────────────┴───────────────────────────┘
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';
import classNames from 'classnames';

import CommonPagination from '../pagination/common-pagination.jsx';

import './common-table.styl';

class CommonTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, pagination, ...others} = this.props;

    return (
      <div className={ classNames('common-table', className)}>
        <Table
          rowClassName="common-table-row"
          pagination={false}
          {...others}
        />
        {pagination ? <CommonPagination {...pagination}/> : null}
      </div>
    );
  }
}

CommonTable.propTypes = {
  className: PropTypes.string,
  rowClassName: PropTypes.func,
  scroll: PropTypes.shape({
    x: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]),
    y: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  }),
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  rowSelection: PropTypes.shape({
    selectedRowKeys: PropTypes.array,
    onChange: PropTypes.func
  })
};

CommonTable.defaultProps = {
  pagination: {
    fixedLeftTotal: false,
    onChange: () => null,
    onShowSizeChange: () => null
  }
};

export default CommonTable;
