import AdminIndexPage from "@/components/organization";
import { OrgAuthProvider } from "@/components/organization/AuthContext";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgAuthProvider>
        <AdminIndexPage>{children}</AdminIndexPage>
      </OrgAuthProvider>
    </>
  );
};

export default Layout;
