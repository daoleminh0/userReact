import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.showDataEdit.id,
      name: this.props.showDataEdit.name,
      tel: this.props.showDataEdit.tel,
      permission: this.props.showDataEdit.permission,
    };
  }

  ischange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  //getUserEditInfo
  saveButton = () => {
    this.props.changeEditUserStatus(); //ẩn form

    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;

    this.props.getUserEditInfo(info);
  };

  render() {
    return (
      <div className='col-sm-12'>
        <div className='card mt-2'>
          <div className='card-header text-center'>Thay đổi thông tin User</div>
          <form method='POST'>
            <div className='card-body text-primary'>
              <div className='form-group'>
                <label>Tên User:</label>
                <input
                  name='name'
                  type='text'
                  className='form-control'
                  placeholder='Nhập tên User'
                  defaultValue={this.props.showDataEdit.name}
                  onChange={(event) => this.ischange(event)}
                />
              </div>
              <div className='form-group'>
                <label>Số điện thoại:</label>
                <input
                  defaultValue={this.props.showDataEdit.tel}
                  type='text'
                  name='tel'
                  className='form-control'
                  placeholder='Nhập tên User'
                  onChange={(event) => this.ischange(event)}
                />
              </div>
              <div className='form-group'>
                <label>Quyền:</label>
                <div className='form-group'>
                  <select
                    className='form-control'
                    name='permission'
                    defaultValue={this.props.showDataEdit.permission}
                    onChange={(event) => this.ischange(event)}
                  >
                    <option>Chọn quyền thích hợp:</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='button'
                  value='Lưu'
                  className='btn btn-success btn-block'
                  onClick={() => this.saveButton()}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUser;
