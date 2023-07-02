import React, { useEffect } from "react";
import "./menu.css";
import { MenuItems } from "../../utils/MenuItems";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useMenuHandle } from "../../context/menuHandle";

const LeftMenu = () => {
  const [itemSelected, setItemSelected] = useState(0);
  const { menuClose, isMenuClicked } = useMenuHandle();
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (deviceWidth <= 768) {
      const menuELement = document.getElementById("menuContainer");
      if (isMenuClicked) {
        menuELement.style.display = "block";
      } else {
        menuELement.style.display = "none";
      }
    }
  }, [isMenuClicked, deviceWidth]);

  const MenuLogo = () => {
    return (
      <div className="menu-logo">
        <h1 className="text-4xl text-white font-bold">Board.</h1>
      </div>
    );
  };

  const AllMenuItems = () => {
    return (
      <div className="menu">
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className={
              itemSelected === index ? "menu-item font-semibold" : "menu-item"
            }
            onClick={() => setItemSelected(index)}
          >
            <div className="menu-icon ">
              <img src={item.iconImage} alt="menuIconImage" />
            </div>
            <span className="menu-link text-base">{item.name}</span>
          </div>
        ))}
        <div className="menu-bottom">
          <div className="menu-bottom-item text-sm">
            <span>Help</span>
          </div>
          <div className="menu-bottom-item text-sm">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div className="mobile-menu-container" id="menuContainer">
        <MenuLogo />
        <div className="mobile-close-icon" onClick={() => menuClose()}>
          <AiOutlineClose />
        </div>
        <AllMenuItems />
      </div>
    );
  };

  return (
    <>
      <div className="menu-container">
        <MenuLogo />
        <AllMenuItems />
      </div>
      {deviceWidth <= 768 ? <MobileMenu /> : ""}
    </>
  );
};

export default LeftMenu;
