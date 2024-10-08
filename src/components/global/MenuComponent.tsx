"use client";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";

const MenuComponent = ({ items }: { items: MenuItem[] }) => {
  const menuRight = useRef<Menu>(null);
  return (
    <>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
        className="text-sm"
        style={{
          backgroundColor: "#efedf1",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
          fontSize: "0.875rem",
          fontWeight: "500",
        }}
      />
      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2rem"
            viewBox="0 -960 960 960"
            width="1.2rem"
            fill="#5f6368"
          >
            <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
          </svg>
        }
        link
        onClick={(event) => menuRight.current?.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      />
    </>
  );
};

export default MenuComponent;
