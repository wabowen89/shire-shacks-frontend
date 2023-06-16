import React from 'react'
import { Navbar, Nav, NavItem, NavLink } from "reactstrap"

const Header = ({ currentUser }) => {

  console.log("prop",currentUser)

  return (
    <>
      <Navbar>
        <a href="/">
          <img
            src="https://secretdallas.com/wp-content/uploads/2022/04/hobbit.png"
            alt="shire shacks icon"
            height="50"
          />
        </a>
        <Nav className="nav">
          {currentUser && (
            <>
              <NavItem>
                <NavLink href="/myshacks">My Shacks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Add Shack</NavLink>
              </NavItem>
              <NavItem>
                <input
                  type="button"
                  value="Log Out"
                />
              </NavItem>
            </>
          )}
          {!currentUser && (
            <>
              <NavItem>
                <NavLink href="/login" className="nav-link">
                  Log In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );

}

export default Header