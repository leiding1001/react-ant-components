import Express from 'express';

import {responseClient} from '../util';

const router = Express.Router();

router.put('/info', function(req, res) {

  /* eslint-disable */
  console.log('getFilterInfo, query:', req.query);
  /* eslint-enable */

  responseClient(res, 200, 1000, {
    "name": "ALL_SP",
    "level": "SYSTEM_LEVEL",
    "filterId": "C6372443E916D206",
    "tableCode": null,
    "filterDetailInfo": {
      "allFilterFields": [
        {
          "field": "search",
          "type": "composeSearch",
          "isDefault": true,
          "isFromAPI": false,
          "values": [
            "orderNumber",
            "erpNumber",
            "remark"
          ],
          "condition": null,
          "description": null,
          "isActive": true
        },
        {
          "field": "vendor",
          "type": "search",
          "isDefault": true,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": true
        },
        {
          "field": "orderStatus",
          "type": "multipleSelect",
          "isDefault": true,
          "isFromAPI": false,
          "values": [
            "CREATED",
            "RELEASED",
            "DISPATCHED",
            "VENDORRECEIVED",
            "VENDORRELEASED",
            "VENDORDISPATCHED",
            "PICKED",
            "DELIVERED",
            "VENDORSPOD",
            "EPOD",
            "VENDORBILL",
            "BILL",
            "VENDORBILLCONFIRMED",
            "BILLCONFIRMED",
            "CLOSED"
          ],
          "condition": null,
          "description": null,
          "isActive": true
        },
        {
          "field": "pickupSla",
          "type": "dateRange",
          "isDefault": true,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": true
        },
        {
          "field": "deliverySla",
          "type": "dateRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "pickupDate",
          "type": "dateRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "deliveryDate",
          "type": "dateRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "epod",
          "type": "multipleSelect",
          "isDefault": false,
          "isFromAPI": false,
          "values": [
            "PENDING",
            "DONE",
            "PENDING_ACCEPTANCE",
            "ACCEPTED_BY_US",
            "REJECTED_BY_US",
            "CLIENT_ACCEPTED",
            "CLIENT_REJECTED",
            "HANDSHAKE",
            "HANDSHAKE_WITH_EPOD",
            "OPTIONAL_EPOD"
          ],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "shipFrom",
          "type": "search",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "shipTo",
          "type": "search",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "exceptions",
          "type": "multipleSelect",
          "isDefault": false,
          "isFromAPI": false,
          "values": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "R",
            "O",
            "T",
            "U"
          ],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "client",
          "type": "asyncMultipleSelect",
          "isDefault": false,
          "isFromAPI": true,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "location",
          "type": "asyncMultipleSelect",
          "isDefault": false,
          "isFromAPI": true,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "clientLocation",
          "type": "search",
          "isDefault": false,
          "isFromAPI": true,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "origin",
          "type": "typeHeadSelect",
          "isDefault": false,
          "isFromAPI": true,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "shipFromAddress",
          "type": "search",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "destination",
          "type": "typeHeadSelect",
          "isDefault": false,
          "isFromAPI": true,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "shipToAddress",
          "type": "search",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "createdAt",
          "type": "dateTimeRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "totalQuantity",
          "type": "integerRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "totalWeight",
          "type": "kgRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "totalVolume",
          "type": "cbmRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "totalInsurance",
          "type": "rmbRange",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "cargoType",
          "type": "multipleSelect",
          "isDefault": false,
          "isFromAPI": false,
          "values": [
            "TYPE_1",
            "TYPE_2",
            "TYPE_3",
            "TYPE_4"
          ],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "policyNumber",
          "type": "search",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "splitByTu",
          "type": "yesOrNo",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "splitByRoute",
          "type": "yesOrNo",
          "isDefault": false,
          "isFromAPI": false,
          "values": [],
          "condition": null,
          "description": null,
          "isActive": false
        },
        {
          "field": "delay",
          "type": "multipleSelect",
          "isDefault": false,
          "isFromAPI": false,
          "values": [
            "OVERDUE_PICKUP_SLA",
            "OVERDUE_DELIVERY_SLA",
            "PICKUP_DELAY",
            "DELIVERY_DELAY"
          ],
          "condition": null,
          "description": null,
          "isActive": false
        }
      ],
      "defaultFilterFields": {
        "orderNumber": null,
        "vendorOrderNumber": null,
        "erpNumber": null,
        "remark": null,
        "exceptions": null,
        "lastUpdateSource": null,
        "lastUpdateAt": null,
        "orderStatus": null,
        "compensationStatus": null,
        "discrepancyStatus": null,
        "rejectionStatus": null,
        "updateStatus": null,
        "createdAt": null,
        "discrepancyRemarks": null,
        "cargoType": null,
        "policyNumber": null,
        "totalWeight": null,
        "totalVolume": null,
        "totalQuantity": null,
        "totalInsurance": null,
        "client": null,
        "vendor": null,
        "shipFrom": null,
        "origin": null,
        "shipFromAddress": null,
        "shipTo": null,
        "destination": null,
        "shipToAddress": null,
        "pickupDate": null,
        "deliveryDate": null,
        "pickupSla": null,
        "deliverySla": null,
        "location": null,
        "clientLocation": null,
        "epod": null,
        "splitByTu": null,
        "splitByRoute": null,
        "delay": null,
        "customFieldText": null,
        "customFieldEnum": null,
        "customFieldNumeric": null,
        "lastUpdatedBy": null
      },
      "allCustomFields": []
    },
    "columns": null,
    "baseFilterId": null
  });
});
module.exports = router;
