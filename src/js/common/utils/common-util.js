import moment from 'moment';
import _ from 'underscore';
import I18NUtil from './i18n-util';

const TOKEN_COOKIE_NAME = 'JSESSIONID';

const ERROR_KEY = {
  NUMBER_VALUE: 'numberValue',
  NUMBER_FORMAT: 'numberFormat',
  REMARK_REQUIRE: 'remarkRequire'
};

class CommonUtil {
  static parseQueryString(queryString) {
    let params = {};
    let queries;
    let temp;
    let i;
    let l;

    if(queryString == null || queryString == undefined || queryString.length == 0) {
      return [];
    }
    if(queryString[0] == '?') {
      queryString = queryString.substr(1);
    }
    queries = queryString.split("&");
    for ( i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      params[temp[0]] = temp[1];
    }

    return params;
  }

  static setDocumentTitle (title) {
    const windowObj = this.getWindowObj();

    if (windowObj.document && title) {
      windowObj.document.title = title;
    }
  }

  static setFavicon(url) {
    const windowObj = this.getWindowObj();

    if (windowObj.document && url) {
      let logoIconLink = windowObj.document.getElementById("logoIcon");

      if (logoIconLink) {
        logoIconLink.href = url;
      }
    }
  }

  // Get locale param from url
  static getSearchLocale() {
    return CommonUtil.parseQueryString(document.location.search).loc;
  }

  static getLocale() {
    let localeSearch = CommonUtil.getSearchLocale();
    let browserLocale = navigator.language || navigator.browserLanguage;
    let bLocale = browserLocale ? browserLocale.split('-')[0] : null;

    // Set default locale as 'zh'
    return localeSearch || bLocale || I18NUtil.LOCALES.EN;
  }

  static getTokenId() {
    const windowObj = this.getWindowObj();
    let cookieString = windowObj.document.cookie;

    // This means current window is embedded in another frame
    if (CommonUtil.isParentWindowAccessible() && windowObj.parent !== window) {
      let parentLocation = windowObj.parent.location;

      // Parent frame is in a same domain
      if (parentLocation.host === windowObj.location.host && parentLocation.pathname !== windowObj.location.pathname) {
        cookieString = windowObj.parent.document.cookie;
      }
    }

    return this.getCookie(cookieString, TOKEN_COOKIE_NAME);
  }

  // Check if parent window is a cross domain page
  static isParentWindowAccessible() {
    let windowObj = this.getWindowObj();
    let parentDoc = null;

    try {
      parentDoc = windowObj.parent.document;
    } catch(e) {
      parentDoc = null;
    }

    return parentDoc !== null;
  }

  static getWindowObj () {
    return window;
  }

  static getCookie(cookieString, cookieName) {
    let cookieArray = cookieString.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let currentCookie = cookieArray[i].split('=');

      if(currentCookie[0].trim() == cookieName) {
        return currentCookie[1];
      }
    }
  }

  static formatDate(timestamp, formatString) {
    return moment(timestamp).format(formatString);
  }

  // TODO: 要求后台返回的要么是en/zh,要么是chineseValue/englishValue的固定格式；
  static chooseEnOrZhByLocale(data) { //data:{"en": "XXX","zh": "YYY"}; flag: return string || dom;
    let currentLang = CommonUtil.getLocale();

    if(currentLang === "zh"){
      return data.zh || data.chineseValue;
    }

    if(currentLang === "en"){
      return data.en || data.englishValue;
    }
  }

  static FormatColumns(columns) {
    let columnsString = JSON.stringify(columns);

    columnsString = columnsString.replace(/columnName/g, 'title');
    columnsString = columnsString.replace(/columnProperty/g, 'dataIndex');

    return JSON.parse(columnsString);
  }

  static isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  }

  //format integer number as 1,000 , decimals as 1,000.3333
  static toThousands(number, digits) {
    const reg = /(?=(?!\b)(\d{3})+$)/g;

    if (!number && number !== 0 || number.length === 0) {
      return '';
    }
    let str = String(number);

    if(digits && _.isNumber(digits)) {
      str = String(this.toFixed(number, digits));
    }else {
      str = String(number);
    }

    let integerPart = str;
    let decimalsPart = '';

    if (str.indexOf('.') !== -1) {
      integerPart = str.substring(0, str.indexOf('.'));
      decimalsPart = str.substring(str.indexOf('.'));
    }

    const formatedNum = String(Number(integerPart)).replace(reg, ',') + decimalsPart;

    return formatedNum;
  }

  static toFixed(number, digits) {
    if(!this.isNumber(number)) {
      return number;
    }
    const str = String(number);
    const dotIndex = str.indexOf('.');

    if(dotIndex === -1 || str.substring(dotIndex + 1).length <= digits) {
      return Number(number);
    }

    return Number(number).toFixed(digits);
  }

  static AddKeyForTable(data) {
    return data.map((item, index) => {
      item.key = index;

      return item;
    });
  }

  static getHeaderFilename(headers) {
    if(!headers || !headers.get('Content-Disposition')) {
      return '';
    }
    const contentDisposition = headers.get('Content-Disposition').split(";");

    if(!contentDisposition.length) {
      return '';
    }

    let filename = contentDisposition.map(it => it.trim()).find(it => it.startsWith(' filename=') || it.startsWith('filename='));

    if(!filename || filename.split('=').length !== 2) {
      return '';
    }

    return filename.replace(/"/g, '').split('=')[1];
  }

  static getTwoDecimalNumberErrorKey(value) {
    let chargeErrorKey = null;
    const valueLength = value.indexOf('.') !== -1 ? value.length - 1 : value.length;

    if (isNaN(value)) {
      chargeErrorKey = ERROR_KEY.NUMBER_FORMAT;
    } else if (valueLength > 10 || value < 0.01) {
      chargeErrorKey = ERROR_KEY.NUMBER_VALUE;
    } else if (value.indexOf('.') !== -1) {
      const dotIndex = value.indexOf('.') + 1;
      const decimal = value.length - dotIndex;

      if (decimal > 2) {
        chargeErrorKey = ERROR_KEY.NUMBER_VALUE;
      }
    }

    return chargeErrorKey;
  }
}

CommonUtil.ERROR_KEY = ERROR_KEY;

export default CommonUtil;