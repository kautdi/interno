import * as React from 'react';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.svg';
import Search from '../img/interface/Search.svg';
import Store from '../../store';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

interface IAppProps {}

const Header: FC<IAppProps> = () => {
  const {store} = useContext(Context);


  async function handleOut() {
    localStorage.removeItem('admin');
    store.setAuth(false);
    window.location.href = '/';
  }
  return (
    <header className="header">
      <div className="logo-block header__logo-block">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav header__nav">
        <ul className="nav-items nav__nav-items">
          <li className="nav-item">
            <Link to="/createProjects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createService" className="nav-link">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/createNews" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">
          <button onClick={()=>handleOut()} className="button about-form__botton button__default">
            Sign out
            <i>
                <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.58984 14.9353L20.313 14.7984M15.208 8.41125L21.731 14.9342L15.0766 21.5886" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
            </i>
        </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
