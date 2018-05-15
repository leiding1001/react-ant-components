import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {message, Modal} from 'antd';
import {clearMessage} from './feedback-action';
import {injectIntl} from 'react-intl';
import _ from 'underscore';
import FeedbackUtil from './feedback-util';

import './feedback.styl';

const {FB_STATUS} = FeedbackUtil;

const {SUCCESS, ERROR, WARNING, INFO} = FB_STATUS;

/**
 * 1. message
 * 2. modal
 * 3. notification
 */

// TODO: Add Notification

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.formatMessage = this.props.intl.formatMessage;
  }

  componentWillReceiveProps(nextProps) {
    const {messageInfo, modalInfo} = nextProps;

    if (this.props.modalInfo !== modalInfo && !!modalInfo) {
      this.showModal(modalInfo);
    } else if (this.props.messageInfo !== messageInfo && !!messageInfo) {
      this.showMessage(messageInfo);
    }
  }

  showMessage(messageInfo) {
    const {
      fbStatus,
      contentId,
      contentOptions,
      duration = 3,
      onCloseFunName
    } = messageInfo;
    const {onActions} = this.props;

    const content = this.formatMessage({id: contentId}, contentOptions);
    const onClose = () => {
      onCloseFunName
        && onActions[onCloseFunName]
        && _.isFunction(onActions[onCloseFunName])
        && onActions[onCloseFunName](this.props, messageInfo);
    };

    switch (fbStatus) {
      case ERROR:
        message.error(content, duration, onClose);
        break;
      case SUCCESS:
        message.success(content, duration, onClose);
        break;
      case WARNING:
        message.warning(content, duration, onClose);
        break;
    }
    this.props.clearMessage();
  }

  showModal(modalInfo) {

    const {
      fbStatus,
      titleId,
      titleOptions,
      contentId,
      contentOptions,
      okTextId = 'common.ok',
      cancelTextId = 'common.cancel',
      onOkFunName,
      onCancelFunName,
      ...others
    } = modalInfo;

    const {onActions} = this.props;

    const title = titleId && this.formatMessage({id: titleId}, titleOptions);
    const content
      = contentId
      && this.formatMessage({id: modalInfo.contentId}, contentOptions);

    const okText = this.formatMessage({id: okTextId});
    const cancelText = this.formatMessage({id: cancelTextId});

    let modalClass = [''];

    if(!title) {
      modalClass.push('feedback__modal-no-title');
    }

    const props = {
      ...others,
      title,
      className: modalClass.join(' '),
      content,
      okText,
      cancelText,
      onOk: () => {
        onOkFunName
          && onActions[onOkFunName]
          && _.isFunction(onActions[onOkFunName])
          && onActions[onOkFunName](this.props, modalInfo);
      },
      onCancel: () => {
        onCancelFunName
          && onActions[onCancelFunName]
          && _.isFunction(onActions[onCancelFunName])
          && onActions[onCancelFunName](this.props, modalInfo);
      }
    };

    if(this.modalInfo && this.modalInfo.ref && !this.modalInfo.autoDismiss) {
      return;
    } else if(this.modalInfo && this.modalInfo.ref) {
      this.modalInfo.ref.destroy();
    }
    this.modalInfo = modalInfo;

    switch (fbStatus) {
      case ERROR:
        this.modalInfo.ref = Modal.error(props);
        break;
      case SUCCESS:
        this.modalInfo.ref = Modal.success(props);
        break;
      case WARNING:
        this.modalInfo.ref = Modal.warning(props);
        break;
      case INFO:
        this.modalInfo.ref = Modal.info(props);
        break;
    }
  }

  render() {
    return null;
  }
}

Feedback.propTypes = {
  onActions: PropTypes.object,
  messageInfo: PropTypes.shape({
    fbStatus: PropTypes.oneOf([SUCCESS, ERROR, WARNING, INFO]).isRequired,
    contentId: PropTypes.string.isRequired,
    contentOptions: PropTypes.object,
    duration: PropTypes.number,
    onCloseFunName: PropTypes.string
  }),
  modalInfo: PropTypes.shape({
    fbStatus: PropTypes.oneOf([SUCCESS, ERROR, WARNING, INFO]).isRequired,
    titleId: PropTypes.string,
    titleOptions: PropTypes.object,
    contentId: PropTypes.string.isRequired,
    contentOptions: PropTypes.object,
    okTextId: PropTypes.string,
    cancelTextId: PropTypes.string,
    onOkFunName: PropTypes.string,
    onCancelFunName: PropTypes.string,

    //Modal.Method属性
    iconType: PropTypes.string,
    className: PropTypes.string,
    okType: PropTypes.string
  })
};

Feedback.defaultProps = {
  onActions: {},
  messageInfo: {
    contentId: '',
    duration: 3,
    onCloseFunName: ''
  },
  modalInfo: {
    titleId: '',
    titleOptions: null,
    contentId: '',
    contentOptions: null,
    okTextId: 'common.ok',
    cancelTextId: 'common.cancel',
    onOkFunName: '',
    onCancelFunName: '',
    iconType: null
  }
};

export default injectIntl(
  connect(
    state => {
      return {
        messageInfo: state.feedback.messageInfo,
        modalInfo: state.feedback.modalInfo
      };
    },
    {clearMessage}
  )(withRouter(Feedback))
);
