import React from 'react';
import { NavBarProps } from '../../consts/types';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const NavBar: React.FC<NavBarProps> = ({ categories }) => {
  return (
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <a className='navbar-brand' href='/'>
            <img src='assets/images/draft-logo.png' width='30' height='30' alt=''></img>
          </a>
        </li>
        <li className='nav-item dropdown'>
          <DropDownMenu items={categories} />
        </li>
      </ul>
      <form className='form-inline my-2 my-lg-0'>
        <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search'></input>
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default NavBar;
