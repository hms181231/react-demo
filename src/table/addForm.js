import React, { PureComponent } from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

class FormLayoutDemo extends PureComponent {
  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  handleChange = e => {
    this.props.handleChange(e.target.value);
  };

  render() {
    return (
      <Form>
        <FormItem label="name">
          <Input
            placeholder="input placeholder"
            value={this.props.name}
            onChange={this.handleChange}
          />
        </FormItem>
      </Form>
    );
  }
}

export default FormLayoutDemo;
