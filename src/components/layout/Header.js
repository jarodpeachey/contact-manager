import React from 'react';

const Header = (props) => {
  const { content } = props;

  return (
    <div className="bg-primary">
      <div className="navbar-content">
        <div className="navbar-left">
          <h6>{content}</h6>
        </div>
        <div className="navbar-right">
          <ul className="menu">
            <li className="menu-item">
              <a className="no-action" href="https://github.com/jarodpeachey">
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
            <li className="menu-item">
              <a
                className="no-action"
                href="https://linkedin.com/in/jarod-peachey"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
