import React, {Component} from 'react';
import {Layout} from 'antd';

import PageUtil from '../../common/utils/page-util';


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
          {`Test`}
        </Layout>
      </Layout>
    );
  }
}

export default HomeContainer;
