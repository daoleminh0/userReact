import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

import { v1 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: '',
    };
  }

  componentWillMount() {
    //Kiểm tra xem có Local Storage này chưa
    if (localStorage.getItem('userData') == null) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp,
      });
    }
  }

  deleteButtonClick = (idUser) => {
    var tempData = this.state.data;

    tempData = tempData.filter((item) => item.id != idUser);
    console.log(tempData);

    this.setState({
      data: tempData,
    });

    //đẩy vào local storage
    localStorage.setItem('userData', JSON.parse(tempData));
  };
  
  getUserEditInfo = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id == info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
      //đẩy vào local storage
      localStorage.setItem('userData', JSON.stringify(this.state.data));
    });
  };

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };

  editUser = (user) => {
    console.log(user);
    this.setState({
      userEditObject: user,
    });
  };

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });
  };

  getNewUserData = (name, tel, permission) => {
    // console.log('Name: ' + name, ' tel: ' + tel, 'permission: ' + permission);
    //pakage to item
    var item = [];
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items,
    });

    localStorage.setItem('userData', JSON.stringify(this.state.data));
  };

  render() {
    // localStorage.setItem('userData', JSON.stringify(this.state.data));
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    // console.log(this.state.userObj.id);
    return (
      <div>
        <Header></Header>
        <div className='searchForm'>
          <div className='container'>
            <div className='row'>
              <Search
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                showDataEdit={this.state.userEditObject}
              ></Search>
              <TableData
                deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
                edit={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              ></TableData>
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUserData(name, tel, permission)
                }
              ></AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
