import React from "react";
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="asd" width="75" />
          </Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <span>
            <span>
              <Link className="btn btn-sm btn-outline-light" to="/admin">
                Administrator</Link>
            </span>
            <span>
              <Link className="btn btn-sm btn-light" to="/logout">
                Logout
              </Link>
            </span>
          </span>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/encounters">
                  Encounters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sample">
                  Sample Released
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Claim">
                  Direct Claim
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Map">
                  Map
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
