import React, { PureComponent, Fragment } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import Add from './add.js';

const FormItem = Form.Item;

class HorizontalLoginForm extends PureComponent {
  state = {
    add: false
  };

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.search(values);
    });
  };

  handelAdd = () => {
    this.setState({
      add: true
    });
  };

  handleClose = () => {
    this.setState({
      add: false
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('name') && getFieldError('name');
    return (
      <Fragment>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('name')(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="name"
              />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              search
            </Button>
          </FormItem>
          <FormItem style={{ float: 'right' }}>
            <Button type="primary" htmlType="button" onClick={this.handelAdd}>
              add
            </Button>
          </FormItem>
        </Form>
        <Add visible={this.state.add} handleClose={this.handleClose} />
      </Fragment>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;
