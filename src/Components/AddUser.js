import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: false,
      id: '',
      name: '',
      tel: '',
      permission: '',
    };
  }
  hienThi = () => {
    if (this.state.trangthai) {
      return (
        <div
          className='col-12'
          className='btn btn-block btn-secondary'
          onClick={() => this.thaydoitrangthai()}
        >
          Đóng lại
        </div>
      );
    } else {
      return (
        <div
          className='btn btn-block btn-info'
          onClick={() => this.thaydoitrangthai()}
        >
          Thêm mới User
        </div>
      );
    }
  };

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  thaydoitrangthai = () => {
    this.setState({
      trangthai: !this.state.trangthai,
    });
  };

  hienThiForm = () => {
    if (this.state.trangthai) {
      return (
        <div className='col-sm-12'>
          <div className='card border-primary mt-2'>
            <div className='card-header text-center'>Thêm mới User</div>
            <form>
              <div className='card-body text-primary'>
                <div className='form-group'>
                  <label>Tên User:</label>
                  <input
                    name='name'
                    onChange={(event) => this.isChange(event)}
                    type='text'
                    className='form-control'
                    placeholder='Nhập tên User'
                  />
                </div>
                <div className='form-group'>
                  <label>Số điện thoại:</label>
                  <input
                    onChange={(event) => this.isChange(event)}
                    type='text'
                    name='tel'
                    className='form-control'
                    placeholder='Nhập tên User'
                  />
                </div>
                <div className='form-group'>
                  <label>Quyền:</label>
                  <div className='form-group'>
                    <select
                      className='form-control'
                      name='permission'
                      onChange={(event) => this.isChange(event)}
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
                    type='reset'
                    value='Thêm mới'
                    className='btn btn-success btn-block'
                    onClick={(name, tel, permission) =>
                      this.props.add(
                        this.state.name,
                        this.state.tel,
                        this.state.permission
                      )
                    }
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        {this.hienThi()}
        {this.hienThiForm()}
      </div>
    );
  }
}

export default AddUser;
