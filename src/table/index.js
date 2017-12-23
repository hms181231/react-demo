import React, { PureComponent, Fragment } from 'react';
import axios from 'axios';
import List from './table.js';
import Form from './form.js';

class Table extends PureComponent {
  state = {
    name: '',
    data: []
  };

  search = async values => {
    const data = await axios
      .get('http://localhost:3001/api/getTable', { params: values })
      .then(({ data }) => {
        return data;
      });
    this.setState({
      name: values ? values.name : '',
      data: data.data
    });
  };

  componentDidMount() {
    this.search();
  }

  render() {
    const { data, name } = this.state;
    return (
      <Fragment>
        <Form state={name} search={this.search} />
        <List data={data} />
      </Fragment>
    );
  }
}

export default Table;
