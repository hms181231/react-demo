import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import AddForm from './addForm.js';
import axios from 'axios';

class Add extends PureComponent {
  state = {
    name: ''
  };

  handleSend = () => {
    axios
      .post('http://localhost:3001/api/add', this.state)
      .then(({ data }) => {});
  };

  handleOk = async () => {
    await this.handleSend();
    this.handleCancel();
  };

  handleCancel = () => {
    this.props.handleClose();
  };

  handleChange = (value = '') => {
    this.setState({
      name: value
    });
  };

  render() {
    return (
      <Modal
        title="Title"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <AddForm name={this.state.name} handleChange={this.handleChange} />
      </Modal>
    );
  }
}

export default Add;
