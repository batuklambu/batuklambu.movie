import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/user.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">movie App</div>
      </Link>
      <div className="user-image">
        <img src={pic} alt="user" className="logo"></img>
      </div>
    </div>
  );
};

export default Header;
