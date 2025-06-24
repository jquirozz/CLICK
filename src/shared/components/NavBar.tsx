import { useState, type JSX } from "react";
import { useLocation, NavLink } from "react-router-dom";

import "./NavBar.css";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoFolderSharp,
  IoFolderOutline,
  IoNavigateSharp,
  IoNavigateOutline,
  IoGrid,
  IoGridOutline,
  IoPersonOutline,
  IoPersonSharp,
  IoSettingsSharp,
  IoSettingsOutline,
} from "react-icons/io5";

interface LinkProps {
  to: string;
  active_icon: JSX.Element;
  default_icon: JSX.Element;
  label: string;
}

const MAIN_LINKS = [
  {
    to: "/",
    active_icon: <IoFolderSharp />,
    default_icon: <IoFolderOutline />,
    label: "Home",
  },
  {
    to: "/explore",
    active_icon: <IoNavigateSharp />,
    default_icon: <IoNavigateOutline />,
    label: "Explore",
  },
  {
    to: "/explore/collections",
    active_icon: <IoGrid />,
    default_icon: <IoGridOutline />,
    label: "Collections",
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

export default function NavBar() {
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
    <nav className={`NavBar ${isOpen ? "show" : ""}`}>
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
