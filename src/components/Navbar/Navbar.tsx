import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

import type { LinkProps } from "./types";

import "./Navbar.css";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoNavigateSharp,
  IoNavigateOutline,
  IoGrid,
  IoGridOutline,
  IoPersonOutline,
  IoPersonSharp,
  IoSettingsSharp,
  IoSettingsOutline,
} from "react-icons/io5";

const MAIN_LINKS = [
  {
    to: "/",
    label: "Home",
    active_icon: <IoNavigateSharp />,
    default_icon: <IoNavigateOutline />,
  },
  {
    to: "/explore",
    label: "Explore",
    active_icon: <IoGrid />,
    default_icon: <IoGridOutline />,
  },
];

const PROFILE_LINKS = [
  {
    to: "/profile",
    active_icon: <IoPersonSharp />,
    default_icon: <IoPersonOutline />,
    label: "Profile",
  },
  {
    to: "/settings",
    active_icon: <IoSettingsSharp />,
    default_icon: <IoSettingsOutline />,
    label: "Settings",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderNavLink = (link: LinkProps) => (
    <NavLink key={link.to} to={link.to}>
      {pathname === link.to ? link.active_icon : link.default_icon}
      <h3>{link.label}</h3>
    </NavLink>
  );

  return (
    <nav className={`Navbar ${isOpen ? "show" : ""}`}>
      <header>
        <a onClick={handleMenu}>
          {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          <h3>Close</h3>
        </a>
      </header>
      <section>{MAIN_LINKS.map(renderNavLink)}</section>
      <footer>{PROFILE_LINKS.map(renderNavLink)}</footer>
    </nav>
  );
}
