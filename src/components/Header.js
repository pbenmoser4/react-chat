import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="ui primary pointing menu" style={{borderRadius: "0px"}}>
      <Link to="/chat" className="item">
        Chat
      </Link>
      <div className="right menu">
        <div className="item">
          <Link to="/login" className="ui blue button">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
