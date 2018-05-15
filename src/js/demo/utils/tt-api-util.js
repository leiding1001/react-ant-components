import BaseApiUtil from '../../common/utils/api-util';
import {FeedbackAction, FeedbackUtil} from '../../components/feedback';
import RouteUtil from './tt-route-util';

export const TT_MODULE_TYPE = 'a9743ed6-d4fb-4d10-8d54-85bdfc3b7b2e';

const {handleApiError} = FeedbackAction;

class TtAPIUtil {
  static get API_INFO() {
    return {
      getOrderData: {
        path: 'ws/trackTrace/order/list',
        moduleType: TT_MODULE_TYPE
      },
      getFilterBarInfo: {
        path: 'ws/trackTrace/filter/info',
        moduleType: TT_MODULE_TYPE
      },
      getFilterOptions: {
        path: 'ws/trackTrace/filters',
        moduleType: TT_MODULE_TYPE
      },
      getFilterList: {
        path: 'ws/trackTrace/filter/list',
        moduleType: TT_MODULE_TYPE
      },
      createFilter: {
        path: 'ws/trackTrace/filter/new',
        moduleType: TT_MODULE_TYPE
      },
      updateFilterName: {
        path: 'ws/trackTrace/filter/name',
        moduleType: TT_MODULE_TYPE
      },
      deleteFilter: {
        path: 'ws/trackTrace/filter/delete/:id',
        moduleType: TT_MODULE_TYPE
      },
      getOrderColumns: {
        path: 'ws/trackTrace/filter/columns/:id',
        moduleType: TT_MODULE_TYPE
      },
      uploadFile: {
        path: 'ws/share/order/file/upload',
        moduleType: TT_MODULE_TYPE
      },
      uploadEpod: {
        path: 'ws/share/order/epod',
        moduleType: TT_MODULE_TYPE
      },
      getEpod: {
        path: 'ws/trackTrace/epods/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      acceptEpod: {
        path: 'ws/share/order/epod/accept/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      rejectEpod: {
        path: 'ws/share/order/epod/reject/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      downloadEpod: {
        path: '/ws/fileservice/download/epod/batch/{orderId}',
        moduleType: TT_MODULE_TYPE
      },
      registerDiscrepancy: {
        path: 'ws/discrepancyservice/discrepancy/register',
        moduleType: TT_MODULE_TYPE
      },
      getDiscrepancy: {
        path: 'ws/discrepancyservice/discrepancy/list',
        moduleType: TT_MODULE_TYPE
      },
      getTypeHeadList: {
        path: 'ws/trackTrace/zipcode',
        moduleType: TT_MODULE_TYPE
      },
      getOrderSummary: {
        path: 'ws/trackTrace/order/summary',
        moduleType: TT_MODULE_TYPE
      },
      fetchDelayReasonList: {
        path: 'ws/delayreasonservice/delayreason/getDelayReason/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      fetchBatchDelayReasonList: {
        path: 'ws/trackTrace/delayReason/list',
        moduleType: TT_MODULE_TYPE
      },
      updateOrderColumns: {
        path: 'ws/trackTrace/filter/columns',
        moduleType: TT_MODULE_TYPE
      },
      getOrderActions: {
        path: 'ws/trackTrace/actions/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      submitDelayReason: {
        path: 'ws/delayreasonservice/delayreason/registerOrderDelayReason',
        moduleType: TT_MODULE_TYPE
      },
      updateOrderMilestone: {
        path: 'ws/trackTrace/pickupDelivery',
        moduleType: TT_MODULE_TYPE
      },
      updateOrdersMilestone: {
        path: 'ws/trackTrace/batch/pickupDelivery',
        moduleType: TT_MODULE_TYPE
      },
      fetchSpecialChargeReasons: {
        path: 'ws/trackTrace/reason',
        moduleType: TT_MODULE_TYPE
      },
      fetchSpecialFeeInfoList: {
        path: 'ws/trackTrace/chargeFor',
        moduleType: TT_MODULE_TYPE
      },
      submitSpecialCharge: {
        path: 'ws/share/order/fee/special',
        moduleType: TT_MODULE_TYPE
      },
      exportOrders: {
        path: 'ws/trackTrace/export',
        moduleType: TT_MODULE_TYPE
      },
      getCompensation: {
        path: 'ws/compensationservice/compensation/list',
        moduleType: TT_MODULE_TYPE
      },
      registerCompensation: {
        path: 'ws/compensationservice/compensation/register',
        moduleType: TT_MODULE_TYPE
      },
      getRejection: {
        path: 'ws/rejectionservice/rejection/list',
        moduleType: TT_MODULE_TYPE
      },
      registerRejection: {
        path: 'ws/rejectionservice/rejection/register',
        moduleType: TT_MODULE_TYPE
      },
      ratingGetListData: {// get rating tags;
        path: 'ws/share/order/rating/tags/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      orderRating: {// order rating; api要求moduleType传固定的；
        path: 'ws/share/order/orderRating',
        moduleType: TT_MODULE_TYPE
      },
      getComplainTypes: {// get complain types;
        path: 'ws/share/order/complain/types/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      orderComplain: {// order complain;
        path: 'ws/share/order/complain',
        moduleType: TT_MODULE_TYPE
      },
      getInTransitEventReasons: {// order in transit event reasons;
        path: 'ws/share/order/inTransitEvent/reasons/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      orderInTransit: {// order in transit event reasons;
        path: 'ws/share/order/intransit',
        moduleType: TT_MODULE_TYPE
      },
      orderBatchInTransit: {
        path: 'ws/trackTrace/batch/intransitEvent/update',
        moduleType: TT_MODULE_TYPE
      },
      batchUploadEpod: {
        path: 'ws/trackTrace/batch/epod/upload',
        moduleType: TT_MODULE_TYPE
      },
      batchDownloadEpod: {
        path: 'ws/trackTrace/batch/epod/download',
        moduleType: TT_MODULE_TYPE
      },
      batchUpdateEpod: {
        path: 'ws/trackTrace/batch/epod/update',
        moduleType: TT_MODULE_TYPE
      },
      getMultipleTruckListData: {
        path: 'ws/trackTrace/order/multipleTruck/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      orderMultipleTruckData: {
        path: 'ws/trackTrace/update/milestone/multipleTruck/:orderId',
        moduleType: TT_MODULE_TYPE
      },
      attachmentPath: {
        path: 'ws/images/orderFile/:orderId/:fileId',
        moduleType: TT_MODULE_TYPE
      },
      attachmentThumbnailPath: {
        path: 'ws/images/orderFile/:orderId/thumbnail/:fileId',
        moduleType: TT_MODULE_TYPE
      },
      submitBatchSpecialCharge: {
        path: 'ws/trackTrace/batch/exceptionG',
        moduleType: TT_MODULE_TYPE
      },
      submitBatchDelayReason: {
        path: 'ws/trackTrace/delayReason',
        moduleType: TT_MODULE_TYPE
      }
    };
  }

  static get ModuleType() {
    return TT_MODULE_TYPE;
  }

  static isResponseSuccess(status) {
    return BaseApiUtil.isResponseSuccess(status);
  }

  static get RESPONSE_STATUS() {
    return {
      fetchOrderFailed: 3000,
      orderNotFound: 12001,
      filterNameExisted: 12003,
      removeFilterFail: 12005,
      overBatchLimit: 12007,
      orderInBilling: 12008,
      overEpodUploadLimit: 12009,
      batchDiffClient: 12010,
      batchOperateWithDifferentCarrier: 12011,
      batchOperateEmptyList: 12012,
      uploadEpodFailed: 12013,
      noOperationPermission: 12014,
      notSameClientOrVendor: 12015,
      batchInTransitNotSupportMultipleTruck: 12016,
      exceedMaximumLimit: 12017,
      shipperForbidVendorUpdate: 12018,
      updateOrderOnlyCurrentDay: 12019,
      onlineTruckUpdateBeforeSla: 12020,
      preOrderNotDelivered: 12021,
      filterNameExceedLimit: 12022,
      noIncubatorSelected: 12023
    };
  }

  static get KEY_ERRORS() {
    return {
      fetchOrderFailed: 'error.order.fetch.failed',
      batchInTransitNotSupportMultipleTruck: 'error.inTransit.notSupportMultipleTruck',
      batchOperateWithDifferentCarrier: 'error.inTransit.DifferentCarrier',
      noOperationPermission: 'error.sys.NoOperationPermission',
      filterNameExisted: 'error.saveFilter.sameNameError',
      filterNameExceedLimit: 'error.saveFilter.nameIsTooLong',
      exceedMaximumLimit: 'tt.error.exceedMaximumLimit',
      preOrderNotDelivered: 'tt.error.preOrderNotDelivered',
      shipperForbidVendorUpdate: 'tt.error.shipperForbidVendorUpdate',
      updateOrderOnlyCurrentDay: 'tt.error.updateOrderOnlyCurrentDay',
      onlineTruckUpdateBeforeSla: 'tt.error.onlineTruckUpdateBeforeSla',
      orderNotFound: 'tt.error.orderNotFound',
      orderInBilling: 'tt.error.orderInBilling',
      removeFilterFail: 'tt.error.removeFilterFail',
      overBatchLimit: 'tt.error.overBatchLimit',
      overEpodUploadLimit: 'tt.error.overEpodUploadLimit',
      batchDiffClient: 'tt.error.batchDiffClient',
      batchOperateEmptyList: 'tt.error.batchOperateEmptyList',
      uploadEpodFailed: 'tt.error.uploadEpodFailed',
      notSameClientOrVendor: 'tt.error.notSameClientOrVendor',
      noIncubatorSelected: 'tt.error.noIncubatorSelected'
    };
  }

  static isSystemError(status) {
    return BaseApiUtil.isSystemError(status);
  }

  static getErrorMsgKey(status) {
    const commonErrorMsgKey = BaseApiUtil.getCommonErrorMsgKey(status);

    if (commonErrorMsgKey) {
      return commonErrorMsgKey;
    }

    switch (status) {
      case this.RESPONSE_STATUS.fetchOrderFailed:
        return this.KEY_ERRORS.fetchOrderFailed;
      case this.RESPONSE_STATUS.batchInTransitNotSupportMultipleTruck:
        return this.KEY_ERRORS.batchInTransitNotSupportMultipleTruck;
      case this.RESPONSE_STATUS.batchOperateWithDifferentCarrier:
        return this.KEY_ERRORS.batchOperateWithDifferentCarrier;
      case this.RESPONSE_STATUS.noOperationPermission:
        return this.KEY_ERRORS.noOperationPermission;
      case this.RESPONSE_STATUS.filterNameExisted:
        return this.KEY_ERRORS.filterNameExisted;
      case this.RESPONSE_STATUS.filterNameExceedLimit:
        return this.KEY_ERRORS.filterNameExceedLimit;
      case this.RESPONSE_STATUS.exceedMaximumLimit:
        return this.KEY_ERRORS.exceedMaximumLimit;
      case this.RESPONSE_STATUS.preOrderNotDelivered:
        return this.KEY_ERRORS.preOrderNotDelivered;
      case this.RESPONSE_STATUS.shipperForbidVendorUpdate:
        return this.KEY_ERRORS.shipperForbidVendorUpdate;
      case this.RESPONSE_STATUS.updateOrderOnlyCurrentDay:
        return this.KEY_ERRORS.updateOrderOnlyCurrentDay;
      case this.RESPONSE_STATUS.onlineTruckUpdateBeforeSla:
        return this.KEY_ERRORS.onlineTruckUpdateBeforeSla;
      case this.RESPONSE_STATUS.orderNotFound:
        return this.KEY_ERRORS.orderNotFound;
      case this.RESPONSE_STATUS.orderInBilling:
        return this.KEY_ERRORS.orderInBilling;
      case this.RESPONSE_STATUS.removeFilterFail:
        return this.KEY_ERRORS.removeFilterFail;
      case this.RESPONSE_STATUS.overBatchLimit:
        return this.KEY_ERRORS.overBatchLimit;
      case this.RESPONSE_STATUS.overEpodUploadLimit:
        return this.KEY_ERRORS.overEpodUploadLimit;
      case this.RESPONSE_STATUS.batchDiffClient:
        return this.KEY_ERRORS.batchDiffClient;
      case this.RESPONSE_STATUS.batchOperateEmptyList:
        return this.KEY_ERRORS.batchOperateEmptyList;
      case this.RESPONSE_STATUS.uploadEpodFailed:
        return this.KEY_ERRORS.uploadEpodFailed;
      case this.RESPONSE_STATUS.notSameClientOrVendor:
        return this.KEY_ERRORS.notSameClientOrVendor;
      case this.RESPONSE_STATUS.noIncubatorSelected:
        return this.KEY_ERRORS.noIncubatorSelected;

    }

    return BaseApiUtil.COMMON_KEY_ERRORS.generalError;
  }
}

export const OnApiErrorAction = {
  onTokenExpired: () => {
    RouteUtil.gotoLoginPage();
  }
};

export function handleApiErrorAction(error) {
  if(!error) {
    return handleApiError();
  }

  const {status} = error;

  if (!status) {
    if (__DEV__) {
      /* eslint-disable */
      console.error(error);
      /* eslint-enable */
    }

    return handleApiError();
  }
  let data = {};

  switch (status) {
    case BaseApiUtil.COMMON_RESPONSE_STATUS.tokenExpired:
    case BaseApiUtil.COMMON_RESPONSE_STATUS.noTokenFound:
      data = {
        status,
        fbType: FeedbackUtil.FB_TYPE.MODAL,
        fbStatus: FeedbackUtil.FB_STATUS.ERROR,
        contentId: TtAPIUtil.getErrorMsgKey(status),
        onOkFunName: 'onTokenExpired',
        okTextId: 'common.login',
        iconType: 'warning',
        autoDismiss: false
      };
      break;
    default:
      data = {
        status,
        fbType: FeedbackUtil.FB_TYPE.MESSAGE,
        fbStatus: FeedbackUtil.FB_STATUS.ERROR,
        contentId: TtAPIUtil.getErrorMsgKey(status)
      };
      break;
  }

  return handleApiError(data);
}

export default TtAPIUtil;
