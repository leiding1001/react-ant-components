import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Checkbox} from 'antd';

import WrapperItem from './filter-wrapper-item.jsx';


const CheckboxGroup = Checkbox.Group;

class MulSelect extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    visible: false
  };
  selected = [];

  onVisibleChange = (visible) => {
    this.setState({
      visible
    });
  }

  saveSelected = ({selectedKeys}) => {
    this.selected = selectedKeys;
  }


  menu = () => {
    return (
      <Menu
        multiple
        onSelect={this.saveSelected}
        onDeselect={this.saveSelected}
      >
        <Menu.Item key="0">
          <Checkbox>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Item key="1">
          <Checkbox>Checkbox</Checkbox>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <Checkbox>Checkbox</Checkbox>
        </Menu.Item>
      </Menu>
    );
  };

  checkGroups = () => {
    const options = [
      {label: 'Apple',
        value: 'Apple'},
      {label: 'Pear',
        value: 'Pear'},
      {label: 'Orange',
        value: 'Orange'}
    ];

    return (
      <CheckboxGroup options={options} defaultValue={['Apple']} onChange={this.onChange} />
    );
  }

  render() {
    return (
      <WrapperItem removable={true}>
        <Dropdown
          onVisibleChange={this.onVisibleChange}
          visible={this.state.visible}
          closeOnSelect={false}
          overlay={this.menu()}
          trigger={['click']}
        >
          <label>
            <span>Click me</span>
            {/* <Icon type="down" /> */}
            <i className="filter-bar__dropdown-arrow" />
          </label>
        </Dropdown>
      </WrapperItem>
    );
  }
}

MulSelect.propTypes = {};

MulSelect.defaultProps = {};

export default MulSelect;
