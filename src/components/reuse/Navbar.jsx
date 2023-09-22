import React, { useState } from "react";
import BrigLogo from "./../../assets/logo/logo.svg";
import { NavLink } from "react-router-dom";
import {
  Bag2,
  HambergerMenu,
  ProfileCircle,
  SearchNormal,
  LoginCurve,
  Clock,
} from "iconsax-react";

const navItems = [
  {
    linkText: "Home",
    url: "/",
  },
  {
    linkText: "About us",
    url: "/about-us",
  },
  {
    linkText: "Buy",
    url: "/buy",
  },
  {
    linkText: "Sell",
    url: "/sell",
  },
  {
    linkText: "Repair",
    url: "/repair",
  },
  {
    linkText: "Resources",
    url: "/resources",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-primary flex justify-between px-8 md:px-24 py-4">
      <div>
        <NavLink to="/">
          <img src={BrigLogo} alt="Brig Africa Logo" />
        </NavLink>
      </div>
      <ul className={`text-white hidden md:flex gap-12 self-center`}>
        {navItems.map((item) => {
          return (
            <li key={item.linkText}>
              <NavLink to={item.url}>{item.linkText}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="hidden md:flex gap-4 self-center">
        <SearchNormal color="#fff" />
        <NavLink to="/empty-cart">
          <Bag2 color="#fff" />
        </NavLink>
        <NavLink to="/launch">
          <Clock color="#fff" />
        </NavLink>
        <NavLink to="/signin">
          <LoginCurve color="#fff" />
        </NavLink>
        <NavLink to="/profile">
          <ProfileCircle color="#fff" />
        </NavLink>
      </div>
      <div className="block md:hidden self-center">
        <HambergerMenu color="#fff" size={36} onClick={handleHamburgerClick} />
      </div>
      {isDropdownOpen && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '41%',
          zIndex: 1,
          marginTop: '5rem'
        }}>
            <ul className="text-white block md:hidden gap-12 self-center px-8 py-2 bg-primary">
            {navItems.map((item) => {
              return (
                <li className="py-1" key={item.url}>
                  <NavLink to={item.url}>{item.linkText}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
          
        )}
      
    </nav>
  );
};

export default Navbar;
