import PATH_LIST from '../constants/page-path';
import CommonUtil from './common-util';
import _ from 'underscore';

const FAVICON_URL = {
  rfi: "https://otms-public.oss-cn-hangzhou.aliyuncs.com/images/freight_partner.png",
  otms: "https://otms-public.oss-cn-hangzhou.aliyuncs.com/images/otms.png"
};

class PageTitleUtil {

  static setPageTitle(location, formatMsgFn) {
    if (!_.isObject(location) || !_.isFunction(formatMsgFn)) {
      return;
    }

    const defaultMsg = formatMsgFn({id: 'common.page.title.default'});
    let title = null;

    for (let key in PATH_LIST) {
      if (location.pathname.match(PATH_LIST[key])) {
        title = formatMsgFn({
          id:('common.page.title.' + key),
          defaultMessage: defaultMsg
        });
      }
    }

    if (title) {
      CommonUtil.setDocumentTitle(title);
    }
  }

  static get OTMS_FAVICON_URL () {
    return FAVICON_URL.otms;
  }

  static setFaviconAsTT () {
    this.setFavicon(this.OTMS_FAVICON_URL);
  }

  static setFavicon(url) {
    if (url) {
      CommonUtil.setFavicon(url);
    }
  }

}

export default PageTitleUtil;
