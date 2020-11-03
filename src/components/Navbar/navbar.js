import React, { useContext } from "react";

import {
  Drawer as MyDraw,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { UserContext } from "../../globalContext/Context";
import PicProfile from "../avatar/Avatar";
import ModalTextEditor from "../modal/ModalTextEditor";
import { ProfileContext } from "../../globalContext/profileContext";
import { SnippetContext } from "../../globalContext/SnippetsContext";
import { ResourceContext } from "../../globalContext/resourcesContext";
import ModalCreateProfile from "../modal/ModalCreateProfile";

const useStyles = makeStyles({
  drawer: {
    width: "280px",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
  },
});

const Navbar = (props) => {
  const { history } = props;

  const classes = useStyles();

  const { setUserData } = useContext(UserContext);
  const { profileData, setProfileData } = useContext(ProfileContext);
  const { setSnippetsContent, setSortedTech } = useContext(SnippetContext);
  const { setResources } = useContext(ResourceContext);

  const img = profileData.map((obj) => obj.image).join("");

  const resetLogout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });

    setProfileData([]);

    setSnippetsContent([]);

    setSortedTech([]);

    setResources([]);

    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  const itemList = [
    {
      text: "Dashboard",
      onClick: () => history.push("/home"),
    },
    {
      text: "Resources",
      onClick: () => history.push("/resources"),
    },

    {
      text: <ModalCreateProfile />,
    },
    {
      text: "Logout",
      onClick: resetLogout,
    },
  ];
  return (
    <MyDraw
      open
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawer,
      }}
    >
      <PicProfile picImg={img} />
      <ModalTextEditor />

      <List>
        <Divider variant="middle" light={false} />
        {itemList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MyDraw>
  );
};

export default withRouter(Navbar);
