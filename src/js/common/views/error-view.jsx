import React from 'react';

require( './style/error-view.styl' );

class ErrorView extends React.Component {

  render() {

    return (
      <div className="error-view">
        {/*
          <div className="error-view__header">
            <i className="error-view__logo otms otms-otmslogo"></i>
          </div>
        */}
        <div className="error-view__content">
          <div className="error-view__icon-wrapper">
            <span className="error-view__icon-bg">
            </span>
            <i className="error-view__icon otms otms-error"></i>
          </div>
          <p className="error-view__text">
            {this.props.errorMsg}
          </p>
        </div>
        <div className="error-view__footer">
          <p className="error-view__msg">www.otms.com | 400-821-9800 | 销售 : marketing@otms.cn</p>
          <div>
            <a className="error-view__link" href="http://mp.weixin.qq.com/s?__biz=MzA3ODA5MTUwMw==&mid=208875792&idx=1&sn=a8f65c004784abb3b26de94a9885181a#rd"><i className="error-view__link-icon error-view__wechat otms otms-wechat"></i></a>
            <a className="error-view__link" href="http://www.linkedin.com/company/opentrans"><i className="error-view__link-icon error-view__linkedin otms otms-linkedin"></i></a>
            <a className="error-view__link" href="http://weibo.com/iloveotms?is_hot=1"><i className="error-view__link-icon error-view__weibo otms otms-weibo"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorView;
