import React from "react";
import Box from "@material-ui/core/Box";
import Menu from "@mui-treasury/components/menu/collapsible";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ModeComment from "@material-ui/icons/ModeComment";
import Schedule from "@material-ui/icons/Schedule";
import Mail from "@material-ui/icons/Mail";
import Report from "@material-ui/icons/Report";
import Settings from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";

export const NewSidebar = () => {
  const history = useHistory();
  const [index, setIndex] = React.useState(-1);
  const createOnClick = (idx, to) => () => {
    history.push(to);
    setIndex(idx);
  };
  return (
    <Box minWidth={256}>
      <GmailSidebarItem
        startIcon={<ModeComment />}
        label={"Chats"}
        onClick={createOnClick(9)}
        selected={index === 1}
        // selected={false}
      />
      <Menu
        collapsed
        renderToggle={({ collapsed, onClick }) => (
          <GmailSidebarItem
            startIcon={collapsed ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            label={collapsed ? "Less" : "More"}
            onClick={onClick}
          />
        )}
      >
        <GmailSidebarItem
          startIcon={<ModeComment />}
          label={"Chats"}
          onClick={createOnClick(0, "/perfil")}
          selected={index === 0}
        />
        <GmailSidebarItem
          startIcon={<Schedule />}
          label={"Scheduled"}
          onClick={createOnClick(1)}
          selected={index === 1}
        />
        <GmailSidebarItem
          startIcon={<Mail />}
          label={"All Mail"}
          onClick={createOnClick(2)}
          selected={index === 2}
        />
        <GmailSidebarItem
          startIcon={<Report />}
          label={"Spam"}
          amount={"52"}
          onClick={createOnClick(3)}
          selected={index === 3}
        />
        <GmailSidebarItem
          startIcon={<Settings />}
          label={"Manage Labels"}
          onClick={createOnClick(4)}
          selected={index === 4}
        />
      </Menu>
    </Box>
  );
};
