import "./Sidebar.css";
import {
  HomeIcon,
  DirectionWalkIcon,
  HospitalIcon,
  CountryManagementIcon,
  EventIcon,
} from "../Icons/IconPack";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export function Sidebar() {
  let NavLinkObject = [
    {
      id: 1,
      link: "/",
      icon: <HomeIcon />,
      name: "Dashboard",
    },
    {
      id: 2,
      link: "Patients",
      icon: <DirectionWalkIcon />,
      name: "Patients",
    },
    {
      id: 3,
      link: "Hospitals",
      icon: <HospitalIcon />,
      name: "Hospitals",
    },
    {
      id: 4,
      link: "country_management",
      icon: <CountryManagementIcon />,
      name: "Country Management",
    },
    {
      id: 5,
      link: "Procedures",
      icon: <EventIcon />,
      name: "Procedures",
    },
  ];
  const [toggle, setToggle] = useState(false);
  const sidebarToggle = () => {
    setToggle(!toggle);
  };

  function matchMediaFunc() {
    let x = window.matchMedia("(max-width: 700px)");
    //console.log(x.matches)
    x.matches ? setToggle(true) : setToggle(false);
  }
  useEffect(() => {
    matchMediaFunc();
  }, []);

  window.addEventListener("resize", () => {
    matchMediaFunc();
  });
  
  return (
    <div id="Sidebar" className={toggle ? "Sidebar_minimize" : ""}>
      <menu id="sidebar_menu_wrapper">
        <ul>
          {NavLinkObject.map((v) => {
            return (
              <li  key={v.id}>
                <NavLink
                  to={v.link}
                 
                  href={v.link}
                  className={({ isActive }) =>
                    isActive ? `active_nav nav_link` : "nav_link"
                  } 
                >
                <span className="design_angle_top"></span>
                  {v.icon} {v.name}{" "}
                <span className="design_angle_bottom"></span>

                </NavLink>
              </li>
            );
          })}
        </ul>
      </menu>
      <div className="bar_icon_wrapper">
        <div className="bar_icon_inner" onClick={sidebarToggle}>
          {Array.from({ length: 3 }, (a, b) => {
            return <span key={b} className="icon_span"></span>;
          })}
        </div>
      </div>
    </div>
  );
}
