import React, {Component} from 'react';
import {Layout} from 'antd';

import PageUtil from '../../common/utils/page-util';

import FilterBar from '../../components/filter-bar/filter-bar.jsx';


class HomeContainer extends Component {

  componentDidUpdate() {
    this.setTitle();
    PageUtil.setFaviconAsTT();
  }

  setTitle() {
    const {location} = this.props;
    const {formatMessage} = this.props.intl;

    PageUtil.setPageTitle(location, formatMessage);
  }


  render() {

    return (
      <Layout className="track-trace-container">
        <Layout>
          <FilterBar />
        </Layout>
      </Layout>
    );
  }
}

export default HomeContainer;
