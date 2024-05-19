import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.svg';
import Search from '../img/interface/Search.svg';

interface IAppProps {}

const Header: FC<IAppProps> = () => {
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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pages" className="nav-link">
              Pages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/service" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ourProject" className="nav-link">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/сalculator" className="nav-link">
                Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <img src={Search} alt="Search" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
