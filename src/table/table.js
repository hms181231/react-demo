import React, { PureComponent } from 'react';
import { Table } from 'antd';

class EditableTable extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        key: 'name'
      }
    ];
    this.state = { data: this.props.data };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length !== this.props.data.length) {
      this.setState({
        data: nextProps.data
      });
    }
  }

  render() {
    let { data } = this.state;

    data = data.map((elem, index) => ({ key: `${index}`, name: elem.name }));
    return <Table bordered dataSource={data} columns={this.columns} />;
  }
}

export default EditableTable;
