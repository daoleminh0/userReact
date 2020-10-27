import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow
        key={key}
        edit2={(user) => this.props.edit(value)}
        stt={key}
        id={value.id}
        name={value.name}
        tel={value.tel}
        permission={value.permission}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        deleteButtonClick={(idUser) => this.props.deleteButtonClick(idUser)}
      ></TableDataRow>
    ));

  render() {
    // console.log(this.props.edit2);
    return (
      <div className='col'>
        <table className='table table-striped table-inverse table-hover'>
          <thead className='thead-inverse'>
            <tr>
              <th>Stt</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
