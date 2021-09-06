import React from 'react';

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
            Functional components
            <div className="sub-title">
            What React is and what React isn’t?
            </div>
          </a>
        </nav>
      </div>
    );
};
 
export default NavBar;