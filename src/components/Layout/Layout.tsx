import { ReactNode } from "react";
import { StyledMain } from "./style";
import { Menu } from "@react-chrono-ts/ui";
import { getItems } from "./menuItems";
import Settings from "@Components/Settings/Settings";
import useSettingsStore from "@Stores/settingsStore";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const setOpenSettings = useSettingsStore((state) => state.setOpen);

  const onClickSettings = () => {
    setOpenSettings(true);
  };

  const { header, footer, mobileConfig } = getItems(onClickSettings);

  return (
    <>
      <Menu header={header} footer={footer} mobileConfig={mobileConfig} />
      <StyledMain>{children}</StyledMain>
      <Settings />
    </>
  );
};

export default Layout;
