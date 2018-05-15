import pathToRegexp from 'path-to-regexp';
import _ from 'underscore';

class ApiUtil {
  static get COMMON_API_INFO() {
    return {
      mpUserInfo: {
        path: 'ws/userservice/getUser',
        moduleType: this.COMMON_MODULE_TYPES.mpUserInfo
      }
    };
  }

  static get COMMON_MODULE_TYPES() {
    return {
      mpUserInfo: '52330f66-f6c4-499e-be59-c3093317a3f5'
    };
  }

  static isHttpSuccess(status) {
    if (status && status === 200) {
      return true;
    }

    return false;
  }

  static getHttpErrorKey(status) {
    switch (status) {
      case 500:
      case 503:
    }

    return this.COMMON_KEY_ERRORS.generalError;
  }

  static get COMMON_RESPONSE_STATUS() {
    return {
      success: 1000,
      sysException: 2000,
      tokenExpired: 3000,
      noTokenFound: 3001
    };
  }

  static isSystemError(status) {
    if (!status) {
      return true;
    }

    return (
      status === this.COMMON_RESPONSE_STATUS.sysException
      || status === this.COMMON_RESPONSE_STATUS.tokenExpired
      || status === this.COMMON_RESPONSE_STATUS.noTokenFound
    );
  }

  static isResponseSuccess(status) {
    if (status && status === this.COMMON_RESPONSE_STATUS.success) {
      return true;
    }

    return false;
  }

  static get COMMON_KEY_ERRORS() {
    return {
      generalError: 'error.generalErrorMessage',
      sysException: 'error.sys.exception',
      tokenExpired: 'error.token.expired',
      sessionExpired: 'error.session.expired',
      noPrivilege: 'error.sys.noPrivilege'
    };
  }

  static getCommonErrorMsgKey(status) {
    if (!status) {
      return this.COMMON_KEY_ERRORS.generalError;
    }

    switch (status) {
      case this.COMMON_RESPONSE_STATUS.sysException:
        return this.COMMON_KEY_ERRORS.sysException;
      case this.COMMON_RESPONSE_STATUS.tokenExpired:
      case this.COMMON_RESPONSE_STATUS.noTokenFound:
      case this.COMMON_RESPONSE_STATUS.noModuleTypeFound:
        return this.COMMON_KEY_ERRORS.sessionExpired;
      case this.COMMON_RESPONSE_STATUS.noPrivilege:
        return this.COMMON_KEY_ERRORS.noPrivilege;
    }

    return '';
  }

  /**
   * example
   * pathInfo: {path: '/user/:id', moduleType: 'xx'}
   * keys: {id: '122'}
   * queryParams: {key: value}
   *
   * return {path: '/user/122?key=value', moduleType}
   *
   * @param {*} path
   * @param {*} keys
   * @param {*} queryParams
   */
  static assemblePath(pathInfo, keys, queryParams) {
    const {path, ...others} = pathInfo;

    let result = path;

    try {
      const toPath = pathToRegexp.compile(path);

      result = toPath(keys);

      if (queryParams && _.isObject(queryParams)) {
        let query = Object.keys(queryParams)
          .filter(key => queryParams[key])
          .map(key => `${key}=${queryParams[key]}`)
          .join('&');

        result = `${result}?${query}`;
      }
    } catch (error) {
      if (__DEV__) {
        /* eslint-disable */
        console.error(`path: '${path}'`, error);
        /* eslint-enable */
      }
    }

    return {
      path: result,
      ...others
    };
  }
}

export default ApiUtil;
