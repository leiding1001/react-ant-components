import fetch from 'isomorphic-fetch';
import _ from 'underscore';
import BaseApiUtil from './api-util';
import CommonUtil from './common-util';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export function convertOptions(options) {
  const {payload, headers, ...others} = options;
  const composeHeaders = {
    ...defaultHeaders,
    ...headers
  };
  let body = payload;

  if (
    composeHeaders['Content-Type'] === 'application/json'
    && _.isObject(payload)
    && !_.isEmpty(payload)
  ) {
    body = JSON.stringify(payload);
  }

  return {
    body: body,
    ...others,
    headers: composeHeaders
  };
}

function _fetch(url, options) {
  const opts = convertOptions(options);

  return fetch(url, opts).then(response => {
    return new Promise(function(resolve, reject) {
      if (BaseApiUtil.isHttpSuccess(response.status)) {

        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')) {
          resolve(response.json());
        } else {
          resolve(response);
        }

      } else {
        reject({status: response.status});
      }
    });
  }).then((data) => {
    return new Promise(function(resolve, reject) {

      if (!data.status || data.status === 200 || BaseApiUtil.isResponseSuccess(data.status)) {
        resolve(data);
      } else {
        reject({status: data.status});
      }
    });
  });
}

function _get(url, options) {
  return _fetch(url, {
    ...options,
    method: 'GET'
  });
}

function _post(url, options) {
  return _fetch(url, {
    ...options,
    method: 'POST'
  });
}

function _put(url, options) {
  return _fetch(url, {
    ...options,
    method: 'PUT'
  });
}

function _delete(url, options) {
  return _fetch(url, {
    ...options,
    method: 'DELETE'
  });
}

/**
 * @param {*} pathInfo
 * @param {*} tempOptions : {payload:{}, headers:{}}
 */
function configParams({path, moduleType}, tempOptions) {
  const {headers, ...others} = tempOptions;

  const url = [apiRootUrl || '/', path].join('');
  const options = {
    ...others,
    headers: {
      token: CommonUtil.getTokenId(),
      moduleType: moduleType,
      locale: CommonUtil.getLocale(),
      ...headers
    }
  };

  return {
    url,
    options
  };
}

export class ApiFetch {

  static get(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _get(url, options);
  }

  static post(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _post(url, options);
  }

  static put(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _put(url, options);
  }
  static delete (apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _delete(url, options);
  }
}

export default ApiFetch;
