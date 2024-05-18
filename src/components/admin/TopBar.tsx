"use client";
import { MenuItem } from "primereact/menuitem";
import { useAdminAuthStore } from "./AuthContext";
import { Menubar } from "primereact/menubar";

const TopBar = () => {
  const { setDetails } = useAdminAuthStore((state) => state);
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Features",
      icon: "pi pi-star",
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
  ];
  return (
    <div className="card p-1 fixed left-0 top-0 w-full">
      <Menubar model={items} />
    </div>
  );
};

export default TopBar;
