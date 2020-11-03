import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import avatarImg from "../../Img/avatarImg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "120px",
  },
}));
const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAvatar: {
      // Name of the rule
      root: {
        // Some CSS
        width: "80px",
        height: "80px",
      },
    },
  },
});

const PicProfile = ({ picImg }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Avatar alt="Michele" src={picImg} />
      </ThemeProvider>
    </div>
  );
};

export default PicProfile;

PicProfile.defaultProps = {
  picImg: avatarImg,
};
