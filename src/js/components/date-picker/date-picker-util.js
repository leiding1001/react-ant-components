import _ from 'underscore';

class DatePickerUtil {
  /**
   * get disabled date time for DatePicker Component
   * Available Time >= time of fromDate
   * Available Time <= time of toDate
   * @param {*} current
   * @param {*} fromDate
   * @param {*} toDate
   * @param {*} param3
   */
  static getDisabledDateTime(
    current,
    fromDate,
    toDate,
    {
      isDisabledHours = true,
      isDisabledMinutes = true,
      isDisabledSeconds = true
    }) {
    if(!current) {
      return;
    }
    let fromObj = null;
    let toObj = null;

    if(fromDate) {
      fromObj = {
        isCurrentDay: current.isSame(fromDate, 'day'),
        disableHourRange: _.range(24).slice(0, fromDate.hour()),
        disableMinRange: _.range(60).slice(0, fromDate.minute()),
        disableSecondRange: _.range(60).slice(0, fromDate.second())
      };
    }

    if(toDate) {
      toObj = {
        isCurrentDay: current.isSame(toDate, 'day'),
        disableHourRange: _.range(24).slice(toDate.hour() + 1, 24),
        disableMinRange: _.range(60).slice(toDate.minute() + 1, 60),
        disableSecondRange: _.range(60).slice(toDate.second() + 1, 60)
      };
    }
    if(fromDate && toDate && fromDate.isAfter(toDate)) {
      return {
        disabledHours : () => _.range(24),
        disabledMinutes: () => _.range(60),
        disabledSeconds: () => _.range(60)
      };
    }
    if(fromObj && toObj && fromObj.isCurrentDay && toObj.isCurrentDay) {
      const currentObj = {
        isCurrentDay: true,
        disableHourRange: _.union(fromObj.disableHourRange, toObj.disableHourRange),
        disableMinRange: _.union(fromObj.disableMinRange, toObj.disableMinRange),
        disableSecondRange: _.union(fromObj.disableSecondRange, toObj.disableSecondRange)
      };

      fromObj = currentObj;
      toObj = currentObj;
    }

    const disabledHours = () => {
      if(!isDisabledHours) {
        return [];
      }

      if(fromObj && fromObj.isCurrentDay) {
        return fromObj.disableHourRange;
      }
      if(toObj && toObj.isCurrentDay) {
        return toObj.disableHourRange;
      }

      return [];
    };

    const disabledMinutes = (selectedHour) => {
      if(!isDisabledMinutes) {
        return [];
      }
      if(fromObj && fromObj.isCurrentDay && selectedHour === fromDate.hour()) {
        return fromObj.disableMinRange;
      }
      if(toObj && toObj.isCurrentDay && selectedHour === toDate.hour()) {
        return toObj.disableMinRange;
      }

      return [];
    };

    const disabledSeconds = (selectedHour, selectedMinute) => {
      if(!isDisabledSeconds) {
        return [];
      }
      if(fromObj && fromObj.isCurrentDay && selectedHour === fromDate.hour() && selectedMinute === fromDate.minute()) {
        return fromObj.disableSecondRange;
      }
      if(toObj && toObj.isCurrentDay && selectedHour === toDate.hour() && selectedMinute === toDate.minute()) {
        return toObj.disableSecondRange;
      }

      return [];
    };

    return {
      disabledHours,
      disabledMinutes,
      disabledSeconds
    };
  }
}

export default DatePickerUtil;