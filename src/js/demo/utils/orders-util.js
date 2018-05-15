import _ from 'underscore';

import Constants from '../utils/constants';
// import Utils from './utils';

const {
  ORDER_FILTER_TYPE,
  ORDER_EXPORT_PROMPT_KEY,
  ORDER_ACTIONS
} = Constants;

const {
  ALL,
  PICKUP,
  DELIVERY,
  UPLOAD_EPOD,
  EPOD_TO_VERIFY,
  UPDATE,
  DISCREPANCY,
  COMPENSATION,
  REJECTED
} = ORDER_FILTER_TYPE;

class OrdersUtil {
  static isDefaultTab(tabKey) {
    const isDefault
      = Object.keys(ORDER_FILTER_TYPE).findIndex(
        key => ORDER_FILTER_TYPE[key] === tabKey
      ) !== -1;

    return isDefault;
  }

  static getSelectTab(tabKey) {
    return this.isDefaultTab(tabKey) ? tabKey : ALL;
  }

  static getDefaultQueryParams(tab) {
    if(tab === UPDATE
      || tab === DISCREPANCY
      || tab === COMPENSATION
      || tab === REJECTED) {
      return Constants.DEFAULT_COMMON_ORDER_PAGE_PARAMS;
    }

    return Constants.DEFAULT_ORDER_PAGE_PARAMS;
  }

  static isTodoTab(tab) {
    if(tab === ALL
      || tab === PICKUP
      || tab === DELIVERY
      || tab === UPLOAD_EPOD
      || tab === EPOD_TO_VERIFY) {
      return true;
    }

    return false;
  }

  static isCommonTab(tab) {
    if(tab === UPDATE
      || tab === DISCREPANCY
      || tab === COMPENSATION
      || tab === REJECTED) {
      return true;
    }

    return false;
  }

  static isUpdateTab(tab) {
    if(tab === UPDATE) {
      return true;
    }

    return false;
  }

  static isExportPrompt() {

    return localStorage.getItem(ORDER_EXPORT_PROMPT_KEY) !== 'false';
  }

  static setExportPrompt(isPrompt) {
    return localStorage.setItem(ORDER_EXPORT_PROMPT_KEY, isPrompt);
  }

  static getFilterName(key) {
    if (!key) {
      return null;
    }

    const filterNames = {
      [ALL]: 'tt.order.all',
      [PICKUP]: 'tt.order.todo.pickup',
      [DELIVERY]: 'tt.order.todo.delivery',
      [UPLOAD_EPOD]: 'tt.order.todo.upload_epod',
      [EPOD_TO_VERIFY]: 'tt.order.todo.epod_verify',
      [DISCREPANCY]: 'tt.order.common.discrepancy',
      [COMPENSATION]: 'tt.order.common.compensation',
      [REJECTED]: 'tt.order.common.rejected',
      [UPDATE]: 'tt.order.common.update'
    };

    return filterNames[key];
  }

  static getSelectedOrders(orders, selectedOrderIds) {
    if(!_.isArray(orders) || !_.isArray(selectedOrderIds)) {
      return [];
    }

    return orders.filter((order) => selectedOrderIds.includes(order.orderId));
  }

  static getSelectedOrderIds(selectedOrders) {
    if(!_.isArray(selectedOrders)) {
      return [];
    }

    return selectedOrders.map(({orderId}) => orderId);
  }


  static composeDefaultAction(order) {
    if (!order) {
      return [];
    }
    let actions = [];

    if (order.enablePickup && !order.multipleTruckAssigned) {
      actions.push(ORDER_ACTIONS.PICKUP);
    }
    if (order.enablePickup && order.multipleTruckAssigned) {
      actions.push(ORDER_ACTIONS.MULTIPLE_TRUCK_PICKUP);
    }
    if (order.enableDelivery && !order.multipleTruckAssigned) {
      actions.push(ORDER_ACTIONS.DELIVERY);
    }
    if (order.enableDelivery && order.multipleTruckAssigned) {
      actions.push(ORDER_ACTIONS.MULTIPLE_TRUCK_DELIVERY);
    }
    if (order.enableUploadEpod) {
      actions.push(ORDER_ACTIONS.UPLOAD_EPOD);
    }
    if (order.enableCheckEpod) {
      actions.push(ORDER_ACTIONS.CHECK_EPOD);
    }

    return actions;
  }

  static composeMoreActions(orderActions) {
    if (!orderActions) {
      return null;
    }

    let actions = [];

    if (orderActions.enableTransitEvent) {
      actions.push(ORDER_ACTIONS.IN_TRANSIT_EVENT);
    }
    if (orderActions.enableSpecialCharge) {
      actions.push(ORDER_ACTIONS.SPECIAL_CHARGES);
    }
    if (orderActions.enableDelayReason) {
      actions.push(ORDER_ACTIONS.DELAY_REASON);
    }
    if (orderActions.enableRatingPickup || orderActions.enableRatingDelivery) {
      actions.push(ORDER_ACTIONS.RATING);
    }
    if (orderActions.enableLocation) {
      actions.push(ORDER_ACTIONS.LOCATION_REQUEST);
    }
    if (orderActions.enableComplain) {
      actions.push(ORDER_ACTIONS.COMPLAIN);
    }
    if (orderActions.enableDiscrepancy) {
      actions.push(ORDER_ACTIONS.DISCREPANCY);
    }
    if (orderActions.enableReject) {
      actions.push(ORDER_ACTIONS.REJECTION);
    }
    if (orderActions.enableCompensation) {
      actions.push(ORDER_ACTIONS.COMPENSATION);
    }

    return actions;
  }

  static composeBatchActions(orders) {

    let actions = [];
    let disablePickupCount = 0;
    let disableDeliveryCount = 0;
    let disableUploadEpodCount = 0;
    let disableCheckEpodCount = 0;
    let disableDownloadEpodCount = 0;
    let disableDelayReasonCount = 0;
    let disableIntransitEventCount = 0;
    let disableSpecialChargesCount = 0;

    orders.forEach(order => {
      if(order.multipleTruckAssigned || !order.enablePickup) {
        disablePickupCount += 1;
      }

      if(order.multipleTruckAssigned || !order.enableDelivery) {
        disableDeliveryCount += 1;
      }
      if(!order.enableUploadEpod) {
        disableUploadEpodCount += 1;
      }
      if(!order.enableCheckEpod) {
        disableCheckEpodCount += 1;
      }
      if(!order.enableDownloadEpod) {
        disableDownloadEpodCount += 1;
      }
      if(!order.enableDelayReason) {
        disableDelayReasonCount += 1;
      }
      if(!order.enableTransitEvent) {
        disableIntransitEventCount += 1;
      }
      if(!order.enableSpecialCharge) {
        disableSpecialChargesCount += 1;
      }
    });

    disablePickupCount === 0 && actions.push(ORDER_ACTIONS.PICKUP);
    disableDeliveryCount === 0 && actions.push(ORDER_ACTIONS.DELIVERY);
    disableUploadEpodCount === 0 && actions.push(ORDER_ACTIONS.BATCH_UPLOAD_EPOD);
    disableDownloadEpodCount === 0 && actions.push(ORDER_ACTIONS.DOWNLOAD_EPOD);
    disableCheckEpodCount === 0 && actions.push(ORDER_ACTIONS.ACCEPT_EPOD);
    disableCheckEpodCount === 0 && actions.push(ORDER_ACTIONS.REJECT_EPOD);
    disableDelayReasonCount === 0 && actions.push(ORDER_ACTIONS.DELAY_REASON);
    disableIntransitEventCount === 0 && actions.push(ORDER_ACTIONS.IN_TRANSIT_EVENT);
    disableSpecialChargesCount === 0 && actions.push(ORDER_ACTIONS.SPECIAL_CHARGES);

    return actions;
  }

  static isTheSameVendor(orders) {
    if(!_.isArray(orders)) {
      return true;
    }
    let vendorArr = orders.map(t=> {
      return t.vendor;
    });

    let newArr = Array.from(new Set(vendorArr));

    if(newArr.length === 1){
      return true;
    }

    return false;
  }

}

export default OrdersUtil;
