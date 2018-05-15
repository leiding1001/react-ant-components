import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DatePicker} from 'antd';
import moment from 'moment';
import DatePickerUtil from './date-picker-util';


class CommonDatePicker extends Component {
  constructor(props) {
    super(props);

    this.initData(props);
    this.isDisabledDate = this.isDisabledDate.bind(this);
    this.isDisabledDateTime = this.isDisabledDateTime.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.initData(nextProps);
    }
  }

  initData(props) {
    this.fromDate = props.fromDate;
    this.endDate = props.endDate;

    this.isLatestDateAfterNow = !!(
      this.fromDate
      && this.endDate
      && this.fromDate.isAfter(this.endDate)
    );
  }

  isDisabledDate(current) {
    if(!current) {
      return true;
    }

    if(this.fromDate && current.isBefore(this.fromDate, 'day')) {
      return true;
    }
    if(this.endDate && current.isAfter(this.endDate, 'day')) {
      return true;
    }

    return false;
  }

  isDisabledDateTime(current) {

    return DatePickerUtil.getDisabledDateTime(current || this.now, this.fromDate, this.endDate, {isDisabledSeconds: false});
  }


  render() {
    const {
      showTime,
      showToday,
      format,
      placeholder,
      ...others
    } = this.props;

    const showTimeValue = !this.isLatestDateAfterNow ? showTime : false;

    return(
      <DatePicker
        showTime={showTimeValue}
        showToday={showToday}
        format={format}
        placeholder={placeholder}
        disabledDate={this.isDisabledDate}
        disabledTime={this.isDisabledDateTime}
        {...others}
      />
    );
  }
}

CommonDatePicker.propTypes = {
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  showToday: PropTypes.bool,
  format: PropTypes.string,
  placeholder: PropTypes.string,
  fromDate: PropTypes.objectOf(moment),
  endDate: PropTypes.objectOf(moment)
};

CommonDatePicker.defaultProps = {
  showTime: {format: 'HH:mm'},
  showToday: true,
  format:'YYYY-MM-DD HH:mm',
  placeholder:'YYYY-MM-DD HH:mm',
  fromDate: null,
  endDate: null
};

export default CommonDatePicker;
