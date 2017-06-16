import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <ul className="tabs tabs-fixed-width z-depth-1">
        <li className="tab">
          <Link to={'/'}>Books</Link>
        </li>
        <li className="tab">
          <Link to={'/stats'}>Stats</Link>
        </li>
      </ul>
    );
  }
}

export default withRouter(Header);
