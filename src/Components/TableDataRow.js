import React, { Component } from 'react';

class TableDataRow extends Component {
  constructor(props) {
    super(props);
  }

  permissionShow = () => {
    if (this.props.permission == 1) {
      return 'Admin';
    } else if (this.props.permission == 2) {
      return 'Modrator';
    } else {
      return 'Normal';
    }
  };

  editClick = () => {
    this.props.edit2();
    this.props.changeEditUserStatus();
  };

  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <button className='btn btn-warning' onClick={() => this.editClick()}>
            <i className='fa fa-edit sua' />
            Sửa
          </button>
          <button
            className='btn btn-danger'
            onClick={() => this.props.deleteButtonClick(this.props.id)}
          >
            <i className='fa fa-trash xoa' /> Xoá
          </button>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
