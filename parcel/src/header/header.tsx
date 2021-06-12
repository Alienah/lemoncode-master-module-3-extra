import React from 'react';
import logo from '../assets/logo.png';
import './header.css';

export interface UserHeader {
  name: string;
  lastname: string;
}

export const Header: React.FC = () => {

  return (
    <div className="header">
      <div id="logo-container" className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div id="user-container" className="user">
        AA
      </div>
    </div>
  );
};
