import { ReactNode } from "react";
import { StyledMain } from "./style";
import { Menu } from "@react-chrono-ts/ui";
import { header, footer, mobileConfig } from "./menuItems";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Menu header={header} footer={footer} mobileConfig={mobileConfig} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
