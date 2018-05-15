class Constants {
  static get CUSTOM_FILTER_TYPE() {
    return {
      TEXT: 'TEXT',
      NUMERIC: 'NUMERIC',
      ENUM: 'ENUM',
      DATE: 'DATE'
    };
  }

  static get FILTER_TYPE() {
    return {
      MULTI_SELECT: 'multiSelect',
      DATE_RANGE: 'dateRange',
      TIME_RANGE: 'timeRange',
      RANGE_PICKER: 'rangePicker',
      TEXT: 'text'
    };
  }

  static get FILTER_NAME_MAX_LENGTH() {
    return 255;
  }

  static get ORDER_ALL_COLUMNS_PROPERTY() {
    return {
      ORDER_ID: 'orderId', // Order Id
      ORDER_NUMBER: 'orderNumber', // Order#
      ERP_NUMBER: 'erpNumber', // ERP/ WMS #
      VENDOR_ORDER_NUMBER: 'vendorOrderNumber',
      VENDOR: 'vendor', // Vendor
      ORDER_STATUS: 'orderStatus', // OrderStatus
      PICKUP_SLA: 'pickupSla', // Pickup SLA
      DELIVERY_SLA: 'deliverySla', // Delivery SLA
      PICKUP: 'pickupDate', // Pickup Date
      DELIVERY: 'deliveryDate', // Delivery Date
      EPOD_STATUS: 'epod', // ePOD
      SHIP_FROM: 'shipFrom', // Ship from
      SHIP_TO: 'shipTo', // Ship to
      REMARK: 'remark', // Remark
      EXCEPTIONS: 'exceptions', // Exception
      CLIENT: 'client', // Client
      LOCATION_NAME: 'location', // Location
      CLIENT_LOCATION: 'clientLocation', // Client Location
      NEXT_STATUS: 'nextStatus', // Next Status
      UPDATE_MILESTONE: 'updateMilestone', // Update Milestone 待定
      ORIGIN: 'origin', // Origin
      SHIP_FROM_ADDRESS: 'shipFromAddress', // Ship from Address
      DESTINATION: 'destination', // Destination
      SHIP_TO_ADDRESS: 'shipToAddress', // Ship to Address
      CREATED_ON: 'createdAt', // Creation Time
      TOTAL_QTY: 'totalQuantity', // TU
      TOTAL_WEIGHT: 'totalWeight', // Total Weight
      TOTAL_VOLUME: 'totalVolume', // Total Volume
      TOTAL_INSURANCE: 'totalInsurance', // Insurance Value/ Cargo Value
      CARGO: 'cargoType', // Cargo Class
      HOURS_TILL_PICKUP_SLA: 'hoursTillPickupSLA', // Left Time to Pickup
      HOURS_TILL_DELIVERY_SLA: 'hoursTillDeliverySLA', // Left Time to Delivery
      DELIVERY_DELAY: 'deliveryDelay', // Delivery Delay
      POLICY_NUMBER: 'policyNumber', // Policy#
      LAST_UPDATE_SOURCE: 'lastUpdateSource', // Last Update Source
      LAST_UPDATED_BY: 'lastUpdatedBy', // Last Update By
      LAST_UPDATE_AT: 'lastUpdateAt', // Last Update at
      DISCREPANCY_REMARKS: 'discrepancyRemarks', // Discrepancy remarks
      UPDATE_STATUS: 'updateStatus', // update status
      DISCREPANCY_STATUS: 'discrepancyStatus', // discrepancy status
      COMPENSATION_STATUS: 'compensationStatus', // compensation status
      REJECTION_STATUS: 'rejectionStatus', // rejected status
      COLUMNS_SETTING: 'COLUMNS_SETTING',
      SPLIT_BY_TU: 'splitByTu',
      SPLIT_BY_ROUTE: 'splitByRoute',
      DELAY: 'delay'
    };
  }

  static get ORDER_ALL_COLUMNS_NAMES() {
    const ORDER_ALL_COLUMNS_PROPERTY = this.ORDER_ALL_COLUMNS_PROPERTY;

    return {
      [ORDER_ALL_COLUMNS_PROPERTY.ORDER_ID]: '',
      [ORDER_ALL_COLUMNS_PROPERTY.ORDER_NUMBER]: 'tt.order.table.orderNumber',
      [ORDER_ALL_COLUMNS_PROPERTY.ERP_NUMBER]: 'tt.order.table.erpNumber',
      [ORDER_ALL_COLUMNS_PROPERTY.VENDOR_ORDER_NUMBER]: 'tt.order.table.vendorOrderNumber',
      [ORDER_ALL_COLUMNS_PROPERTY.VENDOR]: 'tt.order.table.vendor',
      [ORDER_ALL_COLUMNS_PROPERTY.ORDER_STATUS]: 'tt.order.table.orderStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.PICKUP_SLA]: 'tt.order.table.pickupSla',
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY_SLA]: 'tt.order.table.deliverySla',
      [ORDER_ALL_COLUMNS_PROPERTY.PICKUP]: 'tt.order.table.pickup',
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY]: 'tt.order.table.delivery',
      [ORDER_ALL_COLUMNS_PROPERTY.EPOD_STATUS]: 'tt.order.table.epodStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.SHIP_FROM]: 'tt.order.table.shipFrom',
      [ORDER_ALL_COLUMNS_PROPERTY.SHIP_TO]: 'tt.order.table.shipTo',
      [ORDER_ALL_COLUMNS_PROPERTY.REMARK]: 'tt.order.table.remark',
      [ORDER_ALL_COLUMNS_PROPERTY.EXCEPTIONS]: 'tt.order.table.exceptions',
      [ORDER_ALL_COLUMNS_PROPERTY.CLIENT]: 'tt.order.table.client',
      [ORDER_ALL_COLUMNS_PROPERTY.LOCATION_NAME]: 'tt.order.table.locationName',
      [ORDER_ALL_COLUMNS_PROPERTY.CLIENT_LOCATION]: 'tt.order.table.clientLocation',
      [ORDER_ALL_COLUMNS_PROPERTY.NEXT_STATUS]: 'tt.order.table.nextStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.UPDATE_MILESTONE]: 'tt.order.table.onlineStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.ORIGIN]: 'tt.order.table.origin',
      [ORDER_ALL_COLUMNS_PROPERTY.SHIP_FROM_ADDRESS]: 'tt.order.table.shipFromAddress',
      [ORDER_ALL_COLUMNS_PROPERTY.DESTINATION]: 'tt.order.table.destination',
      [ORDER_ALL_COLUMNS_PROPERTY.SHIP_TO_ADDRESS]: 'tt.order.table.shipToAddress',
      [ORDER_ALL_COLUMNS_PROPERTY.CREATED_ON]: 'tt.order.table.createdOn',
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_QTY]: 'tt.order.table.totalQty',
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_WEIGHT]: 'tt.order.table.totalWeight',
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_VOLUME]: 'tt.order.table.totalVolume',
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_INSURANCE]: 'tt.order.table.totalInsurance',
      [ORDER_ALL_COLUMNS_PROPERTY.CARGO]: 'tt.order.table.cargo',
      [ORDER_ALL_COLUMNS_PROPERTY.HOURS_TILL_PICKUP_SLA]: 'tt.order.table.hoursTillPickupSla',
      [ORDER_ALL_COLUMNS_PROPERTY.HOURS_TILL_DELIVERY_SLA]: 'tt.order.table.hoursTillDeliverySla',
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY_DELAY]: 'tt.order.table.deliveryDelay',
      [ORDER_ALL_COLUMNS_PROPERTY.POLICY_NUMBER]: 'tt.order.table.policyNumber',
      [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATE_SOURCE]: 'tt.order.table.lastUpdateSource',
      [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATED_BY]: 'tt.order.table.lastUpdatedBy',
      [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATE_AT]: 'tt.order.table.lastUpdateAt',
      [ORDER_ALL_COLUMNS_PROPERTY.DISCREPANCY_REMARKS]: 'tt.order.table.discrepancyRemarks',
      [ORDER_ALL_COLUMNS_PROPERTY.UPDATE_STATUS]: 'tt.order.table.updateStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.DISCREPANCY_STATUS]: 'tt.order.table.discrepancyStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.COMPENSATION_STATUS]: 'tt.order.table.compensationStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.REJECTION_STATUS]: 'tt.order.table.rejectedStatus',
      [ORDER_ALL_COLUMNS_PROPERTY.COLUMNS_SETTING]: '',
      [ORDER_ALL_COLUMNS_PROPERTY.SPLIT_BY_TU]: 'tt.order.table.splitByTu',
      [ORDER_ALL_COLUMNS_PROPERTY.SPLIT_BY_ROUTE]: 'tt.order.table.splitByRoute',
      [ORDER_ALL_COLUMNS_PROPERTY.DELAY]: 'tt.order.table.delay'
    };
  }

  static get ORDER_TABLE_COLUMN_DEFAULT_WIDTH() {
    return 200;
  }

  static get ORDER_ALL_COLUMNS_WIDTH() {
    const ORDER_ALL_COLUMNS_PROPERTY = this.ORDER_ALL_COLUMNS_PROPERTY;

    return {
      // [ORDER_ALL_COLUMNS_PROPERTY.ORDER_ID]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.ORDER_NUMBER]: 150,
      [ORDER_ALL_COLUMNS_PROPERTY.ERP_NUMBER]: 150,
      // [ORDER_ALL_COLUMNS_PROPERTY.VENDOR]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.ORDER_STATUS]: 140,
      [ORDER_ALL_COLUMNS_PROPERTY.PICKUP_SLA]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY_SLA]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.PICKUP]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.EPOD_STATUS]: 140,
      // [ORDER_ALL_COLUMNS_PROPERTY.SHIP_FROM]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.SHIP_TO]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.REMARK]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.EXCEPTIONS]: 215,
      // [ORDER_ALL_COLUMNS_PROPERTY.CLIENT]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.LOCATION_NAME]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.CLIENT_LOCATION]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.NEXT_STATUS]: 130,
      // [ORDER_ALL_COLUMNS_PROPERTY.UPDATE_MILESTONE]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.ORIGIN]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.SHIP_FROM_ADDRESS]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.DESTINATION]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.SHIP_TO_ADDRESS]: 220,
      [ORDER_ALL_COLUMNS_PROPERTY.CREATED_ON]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_QTY]: 130,
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_WEIGHT]: 130,
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_VOLUME]: 135,
      [ORDER_ALL_COLUMNS_PROPERTY.TOTAL_INSURANCE]: 150,
      [ORDER_ALL_COLUMNS_PROPERTY.CARGO]: 130,
      [ORDER_ALL_COLUMNS_PROPERTY.HOURS_TILL_PICKUP_SLA]: 120,
      [ORDER_ALL_COLUMNS_PROPERTY.HOURS_TILL_DELIVERY_SLA]: 120,
      [ORDER_ALL_COLUMNS_PROPERTY.DELIVERY_DELAY]: 80,
      // [ORDER_ALL_COLUMNS_PROPERTY.POLICY_NUMBER]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATE_SOURCE]: 200,
      // [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATED_BY]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATE_AT]: 135,
      // [ORDER_ALL_COLUMNS_PROPERTY.DISCREPANCY_REMARKS]: 200,
      [ORDER_ALL_COLUMNS_PROPERTY.UPDATE_STATUS]: 140,
      [ORDER_ALL_COLUMNS_PROPERTY.DISCREPANCY_STATUS]: 140,
      [ORDER_ALL_COLUMNS_PROPERTY.COMPENSATION_STATUS]: 140,
      [ORDER_ALL_COLUMNS_PROPERTY.REJECTION_STATUS]: 150,
      [ORDER_ALL_COLUMNS_PROPERTY.COLUMNS_SETTING]: 80
    };
  }

  /**
   * order page default params for ALL, TODO, FILTER
   */
  static get DEFAULT_ORDER_PAGE_PARAMS() {
    return {
      pageNumber: 1,
      pageSize: 20,
      sortColumn: this.ORDER_ALL_COLUMNS_PROPERTY.ORDER_NUMBER,
      asc: true
    };
  }

  /**
   * order page default query params for COMMON
   */
  static get DEFAULT_COMMON_ORDER_PAGE_PARAMS() {
    return {
      pageNumber: 1,
      pageSize: 20,
      sortColumn: this.ORDER_ALL_COLUMNS_PROPERTY.LAST_UPDATE_AT,
      asc: false
    };
  }

  static get ORDER_FILTER_LEVEL() {
    return {
      SYSTEM_LEVEL: 'SYSTEM_LEVEL',
      USER_LEVEL: 'USER_LEVEL'
    };
  }

  static get ORDER_FILTER_TYPE() {
    return {
      ALL: 'ALL',
      PICKUP: 'PICKUP',
      DELIVERY: 'DELIVERY',
      UPLOAD_EPOD: 'UPLOAD_EPOD',
      EPOD_TO_VERIFY: 'EPOD_TO_VERIFY',
      UPDATE: 'UPDATE',
      DISCREPANCY: 'DISCREPANCY',
      COMPENSATION: 'COMPENSATION',
      REJECTED: 'REJECTED',
      FAVORITE: 'FAVORITE'
    };
  }

  static get ORDER_ACTIONS() {
    return {
      PICKUP: 'PICKUP',
      DELIVERY: 'DELIVERY',
      MULTIPLE_TRUCK_PICKUP: 'MULTIPLE_TRUCK_PICKUP',
      MULTIPLE_TRUCK_DELIVERY: 'MULTIPLE_TRUCK_DELIVERY',
      UPLOAD_EPOD: 'UPLOAD_EPOD',
      CHECK_EPOD: 'CHECK_EPOD',
      DOWNLOAD_EPOD: 'DOWNLOAD_EPOD',
      ACCEPT_EPOD: 'ACCEPT_EPOD',
      REJECT_EPOD: 'REJECT_EPOD',
      LOCATION_REQUEST: 'LOCATION_REQUEST',
      DELAY_REASON: 'DELAY_REASON',
      SPECIAL_CHARGES: 'SPECIAL_CHARGES',
      IN_TRANSIT_EVENT: 'IN_TRANSIT_EVENT',
      COMPLAIN: 'COMPLAIN',
      DISCREPANCY: 'DISCREPANCY',
      COMPENSATION: 'COMPENSATION',
      REJECTION: 'REJECTION',
      RATING: 'RATING',
      BATCH_UPLOAD_EPOD: 'BATCH_UPLOAD_EPOD'
    };
  }

  static get BATCH_ACTIONS() {
    return {
      ACCEPT: 'ACCEPT',
      REJECT: 'REJECT',
      BATCH_UPLOAD: 'BATCHUPLOADEPOD',
      DOWNLOAD: 'DOWNLOAD',
      BATCH_SPECIAL_CHARGE: 'BATCHREGIESTSPECIALCHARGES'
    };
  }

  static get ORDER_ACTIONS_NAME() {
    return {
      [this.ORDER_ACTIONS.PICKUP]: 'tt.order.actions.pickup',
      [this.ORDER_ACTIONS.DELIVERY]: 'tt.order.actions.delivery',
      [this.ORDER_ACTIONS.MULTIPLE_TRUCK_PICKUP]: 'tt.order.actions.multipleTruckPickup',
      [this.ORDER_ACTIONS.MULTIPLE_TRUCK_DELIVERY]: 'tt.order.actions.multipleTruckDelivery',
      [this.ORDER_ACTIONS.UPLOAD_EPOD]: 'tt.order.actions.uploadEpod',
      [this.ORDER_ACTIONS.CHECK_EPOD]: 'tt.order.actions.checkEpod',
      [this.ORDER_ACTIONS.DOWNLOAD_EPOD]: 'tt.order.actions.downloadEpod',
      [this.ORDER_ACTIONS.ACCEPT_EPOD]: 'tt.order.actions.acceptEpod',
      [this.ORDER_ACTIONS.REJECT_EPOD]: 'tt.order.actions.rejectEpod',
      [this.ORDER_ACTIONS.LOCATION_REQUEST]: 'tt.order.actions.locationRequest',
      [this.ORDER_ACTIONS.DELAY_REASON]: 'tt.order.actions.delayReason',
      [this.ORDER_ACTIONS.SPECIAL_CHARGES]: 'tt.order.actions.specialCharges',
      [this.ORDER_ACTIONS.IN_TRANSIT_EVENT]: 'tt.order.actions.inTransitEvent',
      [this.ORDER_ACTIONS.COMPLAIN]: 'tt.order.actions.complain',
      [this.ORDER_ACTIONS.DISCREPANCY]: 'tt.order.actions.discrepancy',
      [this.ORDER_ACTIONS.COMPENSATION]: 'tt.order.actions.compensation',
      [this.ORDER_ACTIONS.REJECTION]: 'tt.order.actions.rejection',
      [this.ORDER_ACTIONS.RATING]: 'tt.order.actions.rating',
      [this.ORDER_ACTIONS.BATCH_UPLOAD_EPOD]: 'tt.order.actions.uploadEpod'
    };
  }

  static get ORDER_BATCH_ACTIONS_NAME() {
    return {
      ...this.ORDER_ACTIONS_NAME,
      [this.ORDER_ACTIONS.PICKUP]: 'tt.order.actions.batchPickup',
      [this.ORDER_ACTIONS.DELIVERY]: 'tt.order.actions.batchDelivery'
    };
  }

  static get ORDER_ACTIONS_ICON() {
    return {
      [this.ORDER_ACTIONS.PICKUP]: 'otms-timeline-pickup',
      [this.ORDER_ACTIONS.DELIVERY]: 'otms-timeline_delivery',
      [this.ORDER_ACTIONS.MULTIPLE_TRUCK_PICKUP]: 'otms-timeline-pickup',
      [this.ORDER_ACTIONS.MULTIPLE_TRUCK_DELIVERY]: 'otms-timeline_delivery',
      [this.ORDER_ACTIONS.UPLOAD_EPOD]: 'otms-file-upload',
      [this.ORDER_ACTIONS.BATCH_UPLOAD_EPOD]: 'otms-file-upload',
      [this.ORDER_ACTIONS.CHECK_EPOD]: 'otms-uploadFiles',
      [this.ORDER_ACTIONS.DOWNLOAD_EPOD]: 'otms-downloadAll',
      [this.ORDER_ACTIONS.ACCEPT_EPOD]: 'otms-checkmark',
      [this.ORDER_ACTIONS.REJECT_EPOD]: 'otms-rfi-blocked',
      [this.ORDER_ACTIONS.DELAY_REASON]: 'otms-help',
      [this.ORDER_ACTIONS.IN_TRANSIT_EVENT]: 'otms-intransit',
      [this.ORDER_ACTIONS.SPECIAL_CHARGES]: 'otms-specialFee'
    };
  }

  static get FILTER_ITEM_ACTIONS() {
    return {
      RENAME: 'RENAME',
      DELETE: 'DELETE'
    };
  }

  static get ORDER_EXPORT_TYPE() {
    return {
      SELECTED: 'SELECTED',
      CURRENT_PAGE: 'CURRENT_PAGE',
      MAXIMUM: 'MAXIMUM'
    };
  }

  static get ORDER_EXPORT_TYPE_TEXT() {
    return {
      [this.ORDER_EXPORT_TYPE.SELECTED]: 'tt.order.summary.export.selected',
      [this.ORDER_EXPORT_TYPE.CURRENT_PAGE]: 'tt.order.summary.export.currentPage',
      [this.ORDER_EXPORT_TYPE.MAXIMUM]: 'tt.order.summary.export.maximum'
    };
  }

  static get ORDER_EXPORT_FILE_TYPE() {
    return {
      ORDER_INFO: 'ORDER_INFO',
      CARGO_INFO: 'CARGO_INFO',
      EXCEPTION_DETAIL: 'EXCEPTION_DETAIL'
    };
  }

  static get ORDER_EXPORT_FILE_TYPE_TEXT() {
    return {
      [this.ORDER_EXPORT_FILE_TYPE.ORDER_INFO]: 'tt.order.summary.exportFile.orderInfo',
      [this.ORDER_EXPORT_FILE_TYPE.CARGO_INFO]: 'tt.order.summary.exportFile.cargoInfo',
      [this.ORDER_EXPORT_FILE_TYPE.EXCEPTION_DETAIL]: 'tt.order.summary.exportFile.exceptionDetail'
    };
  }

  static get ORDER_EXPORT_PROMPT_KEY() {
    return 'ORDER_EXPORT_PROMPT';
  }

  static get SAVE_FILTER_TOOL_TIP_KEY() {
    return 'SAVE_FILTER_TOOL_TIP_KEY';
  }


  static get ORDER_STATUS() {
    return {
      CREATED: 'CREATED',
      RECEIVED: 'CREATEDRECIVED',
      RELEASED: 'RELEASED',
      DISPATCHED: 'DISPATCHED',
      VENDOR_RECEIVED: 'VENDORRECEIVED',
      VENDOR_RELEASED: 'VENDORRELEASED',
      VENDOR_DISPATCHED: 'VENDORDISPATCHED',
      PICKED: 'PICKED',
      DELIVERED: 'DELIVERED',
      EPOD: 'EPOD',
      VENDORS_POD: 'VENDORSPOD',
      VENDOR_BILL: 'VENDORBILL',
      BILL: 'BILL',
      BILL_CONFIRMED: 'BILLCONFIRMED',
      VENDOR_BILL_CONFIRMED: 'VENDORBILLCONFIRMED',
      CLOSED: 'CLOSED',
      //TODO
      DELIVERYED: 'DELIVERYED'
    };
  }

  static get ORDER_STATUS_MSG_ID() {
    return {
      [this.ORDER_STATUS.CREATED]: 'tt.order.status.created',
      [this.ORDER_STATUS.RECEIVED]: 'tt.order.status.received',
      [this.ORDER_STATUS.RELEASED]: 'tt.order.status.released',
      [this.ORDER_STATUS.DISPATCHED]: 'tt.order.status.dispatched',
      [this.ORDER_STATUS.VENDOR_RELEASED]: 'tt.order.status.vendorReleased',
      [this.ORDER_STATUS.VENDOR_DISPATCHED]: 'tt.order.status.vendorDispatched',
      [this.ORDER_STATUS.VENDOR_RECEIVED]: 'tt.order.status.vendorReceived',
      [this.ORDER_STATUS.PICKED]: 'tt.order.status.picked',
      [this.ORDER_STATUS.DELIVERED]: 'tt.order.status.delivered',
      [this.ORDER_STATUS.EPOD]: 'tt.order.status.epod',
      [this.ORDER_STATUS.VENDORS_POD]: 'tt.order.status.vendorsPod',
      [this.ORDER_STATUS.VENDOR_BILL]: 'tt.order.status.vendorBill',
      [this.ORDER_STATUS.BILL]: 'tt.order.status.bill',
      [this.ORDER_STATUS.BILL_CONFIRMED]: 'tt.order.status.billConfirmed',
      [this.ORDER_STATUS.VENDOR_BILL_CONFIRMED]: 'tt.order.status.vendorBillConfirmed',
      [this.ORDER_STATUS.CLOSED]: 'tt.order.status.closed',
      //TODO:
      [this.ORDER_STATUS.DELIVERYED]: 'tt.order.status.delivered'
    };
  }


  static get EPOD_STATUS() {
    return {
      NOT_REQUIRED: 'NOT_REQUIRED',
      PENDING: 'PENDING',
      DONE: 'DONE',
      PENDING_ACCEPTANCE: 'PENDING_ACCEPTANCE',
      ACCEPTED_BY_US: 'ACCEPTED_BY_US',
      REJECTED_BY_US: 'REJECTED_BY_US',
      CLIENT_ACCEPTED: 'CLIENT_ACCEPTED',
      CLIENT_REJECTED: 'CLIENT_REJECTED',
      HANDSHAKE: 'HANDSHAKE',
      HANDSHAKE_WITH_EPOD: 'HANDSHAKE_WITH_EPOD',
      OPTIONAL_EPOD: 'OPTIONAL_EPOD'
    };
  }

  static get EPOD_STATUS_MSG_ID() {
    return {
      [this.EPOD_STATUS.NOT_REQUIRED]: 'tt.order.epodStatus.notRequired',
      [this.EPOD_STATUS.PENDING]: 'tt.order.epodStatus.pending',
      [this.EPOD_STATUS.DONE]: 'tt.order.epodStatus.done',
      [this.EPOD_STATUS.PENDING_ACCEPTANCE]: 'tt.order.epodStatus.pendingAcceptance',
      [this.EPOD_STATUS.ACCEPTED_BY_US]: 'tt.order.epodStatus.acceptedByUs',
      [this.EPOD_STATUS.REJECTED_BY_US]: 'tt.order.epodStatus.rejectedByUs',
      [this.EPOD_STATUS.CLIENT_ACCEPTED]: 'tt.order.epodStatus.clientAccepted',
      [this.EPOD_STATUS.CLIENT_REJECTED]: 'tt.order.epodStatus.clientRejected',
      [this.EPOD_STATUS.HANDSHAKE]: 'tt.order.epodStatus.handshake',
      [this.EPOD_STATUS.HANDSHAKE_WITH_EPOD]: 'tt.order.epodStatus.handshakeWithEpod',
      [this.EPOD_STATUS.OPTIONAL_EPOD]: 'tt.order.epodStatus.optionalEpod'
    };
  }

  static get SEARCH() {

    const {
      ORDER_NUMBER,
      ERP_NUMBER,
      REMARK,
      VENDOR_ORDER_NUMBER
    } = this.ORDER_ALL_COLUMNS_PROPERTY;

    return {
      ORDER_NUMBER,
      ERP_NUMBER,
      REMARK,
      VENDOR_ORDER_NUMBER
    };
  }

  static get SEARCH_MSG_ID() {
    const {
      ORDER_NUMBER,
      ERP_NUMBER,
      REMARK,
      VENDOR_ORDER_NUMBER
    } = this.SEARCH;

    return {
      [ORDER_NUMBER]: this.ORDER_ALL_COLUMNS_NAMES[ORDER_NUMBER],
      [ERP_NUMBER]: this.ORDER_ALL_COLUMNS_NAMES[ERP_NUMBER],
      [REMARK]: this.ORDER_ALL_COLUMNS_NAMES[REMARK],
      [VENDOR_ORDER_NUMBER]: this.ORDER_ALL_COLUMNS_NAMES[VENDOR_ORDER_NUMBER]
    };
  }

  static get EXCEPTIONS() {
    return {
      A: 'A',
      B0: 'B0',
      B: 'B',
      B1: 'B1',
      B2: 'B2',
      C: 'C',
      D: 'D',
      E: 'E',
      E2: 'E2',
      F: 'F',
      G: 'G',
      G1: 'G1',
      G2: 'G2',
      H: 'H',
      R: 'R',
      O: 'O',
      T: 'T',
      U: 'U',
      Z: 'Z'
    };
  }

  static get EXCEPTIONS_MSG_ID() {
    return {
      [this.EXCEPTIONS.A]: 'tt.order.exceptions.A',
      [this.EXCEPTIONS.B0]: 'tt.order.exceptions.B0',
      [this.EXCEPTIONS.B]: 'tt.order.exceptions.B',
      [this.EXCEPTIONS.B1]: 'tt.order.exceptions.B1',
      [this.EXCEPTIONS.B2]: 'tt.order.exceptions.B2',
      [this.EXCEPTIONS.C]: 'tt.order.exceptions.C',
      [this.EXCEPTIONS.D]: 'tt.order.exceptions.D',
      [this.EXCEPTIONS.E]: 'tt.order.exceptions.E',
      [this.EXCEPTIONS.E2]: 'tt.order.exceptions.E2',
      [this.EXCEPTIONS.F]: 'tt.order.exceptions.F',
      [this.EXCEPTIONS.G]: 'tt.order.exceptions.G',
      [this.EXCEPTIONS.G1]: 'tt.order.exceptions.G1',
      [this.EXCEPTIONS.G2]: 'tt.order.exceptions.G2',
      [this.EXCEPTIONS.H]: 'tt.order.exceptions.H',
      [this.EXCEPTIONS.R]: 'tt.order.exceptions.R',
      [this.EXCEPTIONS.O]: 'tt.order.exceptions.O',
      [this.EXCEPTIONS.T]: 'tt.order.exceptions.T',
      [this.EXCEPTIONS.U]: 'tt.order.exceptions.U',
      [this.EXCEPTIONS.Z]: 'tt.order.exceptions.Z'
    };
  }

  static get DELAY() {
    return {
      OVERDUE_PICKUP_SLA: 'OVERDUE_PICKUP_SLA',
      OVERDUE_DELIVERY_SLA: 'OVERDUE_DELIVERY_SLA',
      PICKUP_DELAY: 'PICKUP_DELAY',
      DELIVERY_DELAY: 'DELIVERY_DELAY'
    };
  }

  static get DELAY_MSG_ID() {
    return {
      [this.DELAY.OVERDUE_PICKUP_SLA]: 'tt.order.delay.overduePickupSla',
      [this.DELAY.OVERDUE_DELIVERY_SLA]: 'tt.order.delay.overdueDeliverySla',
      [this.DELAY.PICKUP_DELAY]: 'tt.order.delay.pickupDelay',
      [this.DELAY.DELIVERY_DELAY]: 'tt.order.delay.deliveryDelay'
    };
  }

  static get DISCREPANCY_STATUS() {
    return {
      REGISTERED: 'REGISTERED',
      REJECTED: 'REJECTED',
      RECALLED: 'RECALLED',
      ACCEPTED: 'ACCEPTED',
      REASSIGNED: 'REASSIGNED'
    };
  }

  static get DISCREPANCY_STATUS_MSG_ID() {
    return {
      [this.DISCREPANCY_STATUS.REGISTERED]: 'tt.order.discrepancyStatus.registered',
      [this.DISCREPANCY_STATUS.REJECTED]: 'tt.order.discrepancyStatus.rejected',
      [this.DISCREPANCY_STATUS.RECALLED]: 'tt.order.discrepancyStatus.recalled',
      [this.DISCREPANCY_STATUS.ACCEPTED]: 'tt.order.discrepancyStatus.accepted',
      [this.DISCREPANCY_STATUS.REASSIGNED]: 'tt.order.discrepancyStatus.reassigned'
    };
  }

  static get COMPENSATION_STATUS() {
    return {
      REGISTERED: 'REGISTERED',
      REJECTED: 'REJECTED',
      RECALLED: 'RECALLED',
      ACCEPTED: 'ACCEPTED',
      REASSIGNED: 'REASSIGNED'
    };
  }

  static get COMPENSATION_STATUS_MSG_ID() {
    return {
      [this.COMPENSATION_STATUS.REGISTERED]: 'tt.order.compensationStatus.registered',
      [this.COMPENSATION_STATUS.REJECTED]: 'tt.order.compensationStatus.rejected',
      [this.COMPENSATION_STATUS.RECALLED]: 'tt.order.compensationStatus.recalled',
      [this.COMPENSATION_STATUS.ACCEPTED]: 'tt.order.compensationStatus.accepted',
      [this.COMPENSATION_STATUS.REASSIGNED]: 'tt.order.compensationStatus.reassigned'
    };
  }

  static get CARGO_TYPE() {
    return {
      TYPE_1: 'TYPE_1',
      TYPE_2: 'TYPE_2',
      TYPE_3: 'TYPE_3',
      TYPE_4: 'TYPE_4'
    };
  }

  static get CARGO_TYPE_MSG_ID() {
    return {
      [this.CARGO_TYPE.TYPE_1]: 'tt.order.cargoType.type_1',
      [this.CARGO_TYPE.TYPE_2]: 'tt.order.cargoType.type_2',
      [this.CARGO_TYPE.TYPE_3]: 'tt.order.cargoType.type_3',
      [this.CARGO_TYPE.TYPE_4]: 'tt.order.cargoType.type_4'
    };
  }

  static get REJECTION_STATUS() {
    return {
      REPORTED: 'REPORTED',
      REGISTERED: 'REGISTERED',
      RECALLED: 'RECALLED',
      UPDATED: 'UPDATED',
      REJECTED: 'REJECTED',
      ACCEPTED: 'ACCEPTED'
    };
  }

  static get REJECTION_STATUS_MSG_ID() {
    return {
      [this.REJECTION_STATUS.REPORTED]: 'tt.order.rejectionStatus.reported',
      [this.REJECTION_STATUS.REGISTERED]: 'tt.order.rejectionStatus.registered',
      [this.REJECTION_STATUS.RECALLED]: 'tt.order.rejectionStatus.recalled',
      [this.REJECTION_STATUS.UPDATED]: 'tt.order.rejectionStatus.updated',
      [this.REJECTION_STATUS.REJECTED]: 'tt.order.rejectionStatus.rejected',
      [this.REJECTION_STATUS.ACCEPTED]: 'tt.order.rejectionStatus.accepted'
    };
  }

  static get UPDATE_STATUS() {
    return {
      APPROVED: 'APPROVED',
      REJECTED: 'REJECTED'
    };
  }

  static get UPDATE_STATUS_MSG_ID() {
    return {
      [this.UPDATE_STATUS.APPROVED]: 'tt.order.updateStatus.approved',
      [this.UPDATE_STATUS.REJECTED]: 'tt.order.updateStatus.rejected'
    };
  }

  static get FILTER_ITEM_OPTIONS() {
    return {
      orderStatus: Constants.ORDER_STATUS,
      search: Constants.SEARCH,
      epod: Constants.EPOD_STATUS,
      cargoType: Constants.CARGO_TYPE,
      exceptions: Constants.EXCEPTIONS,
      discrepancyStatus: Constants.DISCREPANCY_STATUS,
      compensationStatus: Constants.COMPENSATION_STATUS,
      rejectionStatus: Constants.REJECTION_STATUS,
      updateStatus: Constants.UPDATE_STATUS,
      lastUpdateSource: this.UPDATE_SOURCE,
      delay: Constants.DELAY,
      //TODO
      epodStatus: Constants.EPOD_STATUS,
      cargo: Constants.CARGO_TYPE
    };
  }

  static get FILTER_ITEM_OPTIONS_MSG_ID() {
    return {
      orderStatus: Constants.ORDER_STATUS_MSG_ID,
      search: Constants.SEARCH_MSG_ID,
      epod: Constants.EPOD_STATUS_MSG_ID,
      cargoType: Constants.CARGO_TYPE_MSG_ID,
      exceptions: Constants.EXCEPTIONS_MSG_ID,
      discrepancyStatus: Constants.DISCREPANCY_STATUS_MSG_ID,
      compensationStatus: Constants.COMPENSATION_STATUS_MSG_ID,
      rejectionStatus: Constants.REJECTION_STATUS_MSG_ID,
      updateStatus: Constants.UPDATE_STATUS_MSG_ID,
      lastUpdateSource: this.UPDATE_SOURCE_MSG_ID,
      delay: Constants.DELAY_MSG_ID,
      //TODO
      epodStatus: Constants.EPOD_STATUS_MSG_ID,
      cargo: Constants.CARGO_TYPE_MSG_ID
    };
  }

  static get PERIOD_OPTIONS() {
    return {
      TODAY: 'tt.filter.period.today',
      YESTERDAY: 'tt.filter.period.yesterday',
      TOMORROW: 'tt.filter.period.tomorrow',
      THIS_WEEK: 'tt.filter.period.thisWeek',
      LAST_WEEK: 'tt.filter.period.lastWeek',
      THIS_MONTH: 'tt.filter.period.thisMonth',
      LAST_MONTH: 'tt.filter.period.lastMonth'
    };
  }

  static get UNIT_OPTIONS() {
    return {
      BEFORE: 'tt.filter.unit.before',
      AFTER: 'tt.filter.unit.after',
      WITHIN: 'tt.filter.unit.withIn'
    };
  }

  static get UPDATE_SOURCE() {
    return {
      SHIPPER: 'SHIPPER',
      VENDOR: 'VENDOR',
      INCOMING_SHIP_FROM: 'INCOMING_SHIP_FROM',
      INCOMING_SHIP_TO: 'INCOMING_SHIP_TO',
      XTT_SHIP_FROM: 'XTT_SHIP_FROM',
      XTT_SHIP_TO: 'XTT_SHIP_TO',
      DRIVER: 'DRIVER',
      ME: 'ME',
      CLIENT: 'CLIENT',
      UNKNOWN: 'UNKNOWN',
      HANDSHAKE: 'HANDSHAKE',
      HUB_SHIP_FROM: 'HUB_SHIP_FROM',
      HUB_SHIP_TO: 'HUB_SHIP_TO',
      EXTERNAL_TRACK_AND_TRACE: 'EXTERNAL_TRACK_AND_TRACE',
      CONSIGNEE: 'CONSIGNEE',
      OTMS_LABEL: 'OTMS_LABEL',
      HUB_USER: 'HUB_USER',
      OTMS_OPEN_API: 'OTMS_OPEN_API'
    };
  }

  static get UPDATE_SOURCE_MSG_ID() {
    return  {
      [this.UPDATE_SOURCE.SHIPPER]: 'tt.order.updateSource.shipper',
      [this.UPDATE_SOURCE.VENDOR]: 'tt.order.updateSource.vendor',
      [this.UPDATE_SOURCE.INCOMING_SHIP_FROM]: 'tt.order.updateSource.incomingShipFrom',
      [this.UPDATE_SOURCE.INCOMING_SHIP_TO]: 'tt.order.updateSource.incomingShipTo',
      [this.UPDATE_SOURCE.XTT_SHIP_FROM]: 'tt.order.updateSource.xttShipFrom',
      [this.UPDATE_SOURCE.XTT_SHIP_TO]: 'tt.order.updateSource.xttShipTo',
      [this.UPDATE_SOURCE.DRIVER]: 'tt.order.updateSource.driver',
      [this.UPDATE_SOURCE.ME]: 'tt.order.updateSource.me',
      [this.UPDATE_SOURCE.CLIENT]: 'tt.order.updateSource.client',
      [this.UPDATE_SOURCE.UNKNOWN]: 'tt.order.updateSource.notImplementedYet',
      [this.UPDATE_SOURCE.HANDSHAKE]: 'tt.order.updateSource.handshake',
      [this.UPDATE_SOURCE.HUB_SHIP_FROM]: 'tt.order.updateSource.hubShipFrom',
      [this.UPDATE_SOURCE.HUB_SHIP_TO]: 'tt.order.updateSource.hubShipTo',
      [this.UPDATE_SOURCE.EXTERNAL_TRACK_AND_TRACE]: 'tt.order.updateSource.external.tt',
      [this.UPDATE_SOURCE.CONSIGNEE]: 'tt.order.updateSource.consignee',
      [this.UPDATE_SOURCE.OTMS_LABEL]: 'tt.order.updateSource.otmsLabel',
      [this.UPDATE_SOURCE.HUB_USER]: 'tt.order.updateSource.hubUser',
      [this.UPDATE_SOURCE.OTMS_OPEN_API]: 'tt.order.updateSource.otmsOpenApi'
    };
  }

  static get ONLINE_STATUS() {
    return {
      ONLINE_UPDATE: "onlineUpdate",
      OFFLINE_UPDATE: "offlineUpdate",
      CLIENT_UPDATE: "clientUpdate",
      VENDOR_UPDATE: "vendorUpdate",
      AUTO_UPDATE: "autoUpdate"
    };
  }
  static get ONLINE_STATUS_MSG_ID() {
    return {
      [this.ONLINE_STATUS.ONLINE_UPDATE]: 'tt.order.onlineStatus.onlineUpdate',
      [this.ONLINE_STATUS.OFFLINE_UPDATE]: 'tt.order.onlineStatus.offlineUpdate',
      [this.ONLINE_STATUS.CLIENT_UPDATE]: 'tt.order.onlineStatus.clientUpdate',
      [this.ONLINE_STATUS.VENDOR_UPDATE]: 'tt.order.onlineStatus.vendorUpdate',
      [this.ONLINE_STATUS.AUTO_UPDATE]: 'tt.order.onlineStatus.autoUpdate'
    };
  }
}

export default Constants;
