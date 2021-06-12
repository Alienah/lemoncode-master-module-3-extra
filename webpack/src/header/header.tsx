import React from "react";
import { getUser } from '../utils/getUser';
import logo from '../assets/logo.png';
import './header.scss';

interface UserHeader {
  name: string;
  lastname: string;
}

const defaultUser = {
  name: "User",
  lastname: "Lastname",
}

export const Header: React.FC = () => {
  const [user, setUser] = React.useState<UserHeader>(defaultUser);

  React.useEffect(() => {
    setUser(getUser("id1"))
  },[])

  return <div className="header">
      <div id="logo-container" className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div id="user-container" className="user">
        {user.name.charAt(0)} {user.lastname.charAt(0)}
      </div>
    </div>
  ;
};

