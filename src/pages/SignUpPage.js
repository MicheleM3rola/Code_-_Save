import React from "react";
import { Redirect } from "react-router-dom";

import Signup from "../components/signup/signup";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import ModalLogin from "../components/modal/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10%",
  },

  outer: {
    backgroundColor: "#eeeeee",
    height: "100vh",
  },

  title: {
    padding: "8px",
    border: "2px solid purple",
    fontWeight: "bold",
    fontFamily: "Monospace",
    fontSize: "1.5rem",
  },
  heroTitle: {
    fontWeight: "bold",
    marginLeft: "24px",
    fontFamily: "Monospace",
  },
  heroPar: {
    textAlign: "justify",
    marginLeft: "24px",
    width: "80%",
    letterSpacing: "0.5px",
    lineHeight: "30px",
    fontFamily: "Monospace",
    fontSize: "1.4rem",
  },
  appBar: {
    backgroundColor: "#eeeeee",
    color: "black",
    border: "none",
    boxShadow: "none",

    padding: "20px",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  slogan: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sectionTwo: {
    height: "100%",
    width: "100%",
  },
  service: {
    color: "black",
    fontSize: "3rem",
    fontFamily: "Monospace",
    textAlign: "center",

    fontWeight: "bold",
  },
}));

const SignUpPage = () => {
  const classes = useStyles();

  const isAuth = localStorage.getItem("auth-token");

  if (isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <Grid container className={classes.outer}>
        <Grid item xs={12} sm={12} className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                Code_&_Save
              </Typography>
              <ModalLogin />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.slogan}>
          <Typography variant="h3" className={classes.heroTitle}>
            Create Your Learning World
          </Typography>
          <Typography variant="body1" className={classes.heroPar}>
            Create,organise and make your life easier with all the resources
            that you need in one place. You don't need to bookmark your links,
            or save a piece of code somewhere in your computer, you can do
            everything here.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.slogan}>
          <Signup />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUpPage;
