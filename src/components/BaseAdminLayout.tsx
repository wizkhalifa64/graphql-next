"use client";

import { AuthContext } from "@/provider/AuthContext";
import { ReactNode, useContext } from "react";
import AdminAuth from "./auth/admin";
import Navbar from "./navbar/Navbar";

const BaseAdminLayout = ({ children }: { children: ReactNode }) => {
  const state = useContext(AuthContext);
  return (
    <>
      {state?.adminAuth?.token ? (
        <>
          <div className="flex flex-col h-full md:flex-row flex-1">
            <aside className="w-16 fixed left-0 top-0  h-full">
              <Navbar />
            </aside>
            <main className="pt-12 flex ml-16 flex-1">{children}</main>
          </div>
        </>
      ) : (
        <AdminAuth />
      )}
    </>
  );
};

export default BaseAdminLayout;
