import React from 'react';
import {Navbar,Button} from 'flowbite-react';
import {NavLink} from 'react-router-dom';
import logo from "../../assets/icons/logo.png";

function NavSection() {
  return (
    <div>
      <Navbar container={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dentics
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Appoinment</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:shadow md:shadow-white/5  md:mb-0"
            style={({ isActive }) => ({
              color: isActive ? "#009432" : "black",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:shadow md:shadow-white/5  md:mb-0"
            style={({ isActive }) => ({
              color: isActive ? "#009432" : "black",
            })}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:shadow md:shadow-white/5  md:mb-0"
            style={({ isActive }) => ({
              color: isActive ? "#009432" : "black",
            })}
          >
            About us
          </NavLink>
          <NavLink
            to="/register"
            className="p-2 mb-2 shadow-sm font-bold font-text-2xl md:text-base md:shadow md:shadow-white/5  md:mb-0"
            style={({ isActive }) => ({
              color: isActive ? "#009432" : "black",
            })}
          >
            Register
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      <div className=" md:w-[95%] md:m-auto md:h-[1px] bg-gray-200 "></div>
    </div>
  );
}

export default NavSection