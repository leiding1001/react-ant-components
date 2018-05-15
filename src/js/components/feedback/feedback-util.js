

class FeedbackUtil {

  /**
   * Feedback Component Type
   * Components: message, modal, notification
   */
  static get FB_TYPE() {
    return {
      MESSAGE: "MESSAGE",
      MODAL: "MODAL",
      NOTIFICATION: "NOTIFICATION"
    };
  }

  /**
   * Feedback Status for Antd's message, modal, notification
   */
  static get FB_STATUS() {
    return {
      SUCCESS : 'SUCCESS',
      ERROR : 'ERROR',
      WARNING : 'WARNING',
      INFO : 'INFO'
    };
  }
}


export default FeedbackUtil;