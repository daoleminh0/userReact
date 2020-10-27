import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
    };
  }

  showEditUserForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getUserEditInfo={(info) => this.props.getUserEditInfo(info)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          showDataEdit={this.props.showDataEdit}
        ></EditUser>
      );
    }
  };

  ischange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value,
    });
    this.props.checkConnectProps(event.target.value);
  };

  render() {
    return (
      <div className='col-sm-12'>
        <div className='row'>{this.showEditUserForm()}</div>
        <div className='form-group mt-2'>
          <div className='btn-group'>
            <input
              onChange={(event) => this.ischange(event)}
              className='float-left form-control'
              type='text'
              aria-describedby='helpId'
              placeholder='Nhập từ khoá tìm kiếm'
            ></input>
            <button
              className='float-left btn btn-info'
              style={{ width: 150 }}
              onClick={(dl) =>
                this.props.checkConnectProps(this.state.tempValue)
              }
            >
              Tìm kiếm
            </button>
          </div>
        </div>
        <div className='col-sm-12'>
          <hr />
        </div>
      </div>
    );
  }
}

export default Search;
