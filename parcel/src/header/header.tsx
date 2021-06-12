import React from 'react';
import { getUser, getUsers, User } from '../utils/getUser';
import { SelectUserInput } from '../selectUserInput';
import logo from '../assets/logo.png';
import './header.scss';

export interface UserHeader {
  name: string;
  lastname: string;
}

export const Header: React.FC = () => {
  const [users, setUsers] = React.useState<Array<User>>([]);
  const [user, setUser] = React.useState<UserHeader>(null);
  const [userIdSelected, setUserIdSelected] = React.useState<string>("");

  
  React.useEffect(() => {
    setUsers(getUsers());
  }, []);

  React.useEffect(() => {
    setUser(getUser(users, userIdSelected));
  }, [users, userIdSelected]);

  React.useEffect(() => {
    users.length && setUserIdSelected(users[0].id);
  }, [users]);

  return (
    <div className="header">
      <div id="logo-container" className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div id="user-container" className="user">
        <SelectUserInput onSelect={setUserIdSelected} options={users} userSelected={user} />
      </div>
    </div>
  );
};
