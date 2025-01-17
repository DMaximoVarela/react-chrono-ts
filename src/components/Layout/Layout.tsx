import { ReactNode } from "react";
import { StyledMain } from "./style";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
