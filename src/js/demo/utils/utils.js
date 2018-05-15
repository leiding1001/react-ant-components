import CommonUtil from '../../common/utils/common-util';
import Util from '../../common/utils/api-util';
import APIUtil from './tt-api-util';

class Utils {
  static getFilePath(file = {}) {
    const {fileId, orderId, fileName} = file;

    if (!fileId) {
      return '';
    }

    const moduleType = APIUtil.API_INFO.attachmentPath.moduleType;
    const token = CommonUtil.getTokenId();
    const urlParameter = Util.assemblePath(
      APIUtil.API_INFO.attachmentPath,
      {
        fileId,
        orderId
      },
      {
        moduleType,
        token,
        fileName
      }
    );

    return [apiRootUrl, urlParameter.path].join('');
  }

  static getFileThumbnailPath(file = {}) {
    let {fileId, orderId, fileName} = file;

    if (!fileId) {
      return '';
    }

    const token = CommonUtil.getTokenId();
    const moduleType = APIUtil.API_INFO.attachmentThumbnailPath.moduleType;
    const urlParameter = Util.assemblePath(
      APIUtil.API_INFO.attachmentThumbnailPath,
      {
        fileId,
        orderId
      },
      {
        moduleType,
        token,
        fileName
      }
    );

    return [apiRootUrl, urlParameter.path].join('');
  }
}

export default Utils;
