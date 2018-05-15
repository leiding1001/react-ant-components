import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'antd';
import _ from 'underscore';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';

import './common-modal.styl';

class CommonModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible || true
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleAfterClose = this.handleAfterClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {visible} = nextProps;
    const {visible: oldVisible} = this.props;

    if(visible !== oldVisible) {
      this.setState({visible});
    }
  }

  handleCancel() {
    const {onCancel} = this.props;

    if (onCancel && _.isFunction(onCancel)) {
      onCancel();
    }

    this.setState({
      visible: false
    });
  }

  handleAfterClose() {
    const {afterClose} = this.props;

    if (afterClose && _.isFunction(afterClose)) {
      afterClose();
    }
  }

  renderFooter() {
    const {okText, okType, cancelText, confirmLoading, isAbleSubmit, onOk, isGhost} = this.props;

    return (
      <div>
        <Button
          onClick={this.handleCancel}
        >
          {cancelText || <FormattedMessage id={'common.cancel'} />}
        </Button>
        <Button
          type={okType}
          ghost={isGhost}
          loading={confirmLoading}
          onClick={onOk}
          disabled={!isAbleSubmit}
        >
          {okText || <FormattedMessage id={'common.done'} />}
        </Button>
      </div>
    );
  }

  render() {
    const {
      children,
      verticalCenter,
      wrapClassName,
      footer,
      ...other
    } = this.props;
    const {visible} = this.state;

    let wrapClsName = classNames('modal--vc', wrapClassName);

    if(verticalCenter) {
      wrapClsName = classNames('vertical-center-modal', wrapClsName);
    }

    return (
      <Modal
        visible={visible}
        wrapClassName={wrapClsName}
        onCancel={this.handleCancel}
        afterClose={this.handleAfterClose}
        footer={footer || this.renderFooter()}
        {...other}
      >
        {children}
      </Modal>
    );
  }
}

CommonModal.protoTypes = {
  // Modal container
  getContainer: PropTypes.func,

  /*
  * Modal dom config
  */
  verticalCenter: PropTypes.bool,
  closable: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  zIndex: PropTypes.number,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  wrapClassName: PropTypes.string,
  isAbleSubmit: PropTypes.bool,
  okType: PropTypes.string,
  isGhost: PropTypes.bool,

  /*
  * Modal status config
  */
  visible: PropTypes.bool,
  confirmLoading: PropTypes.bool,

  /*
  * Modal handler
  */
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  afterClose: PropTypes.func
};

CommonModal.defaultProps = {
  closable: true,
  verticalCenter: true,
  title: '',
  zIndex: 2,
  okText: '',
  cancelText: '',
  wrapClassName: '',
  confirmLoading: false,
  isAbleSubmit: true,
  okType: 'primary',
  isGhost: false
};

export default CommonModal;