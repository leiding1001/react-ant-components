import OrdersUtil from './orders-util';


class OrderPermissionsUtil {
  /**
   * 是否可以操作订单
   */
  static isAllowOrderAction(user, tabKey) {

    return user.isFullPrivilege() && !OrdersUtil.isCommonTab(tabKey);
  }

  /**
   * 是否允许订单表多选
   */
  static isAllowOrderMultipleSelect(user) {
    return user.isFullPrivilege();
  }

  /**
   * 是否允许订单导出
   */
  static isAllOrderExport(user, tabKey) {
    if(!tabKey) {
      return false;
    }
    // update tab 不支持导出
    if(OrdersUtil.isUpdateTab(tabKey)) {
      return false;
    }

    return user.isFullPrivilege();
  }

  /**
   * 是否允许保存自定义过滤条件
   */
  static isAllowSaveFilter(user, tabKey) {

    return (user.isFullPrivilege() || user.isViewPrivilege()) && !OrdersUtil.isCommonTab(tabKey);
  }
}

export default OrderPermissionsUtil;
