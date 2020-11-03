import React, { useContext } from "react";
import { UserContext } from "../../globalContext/Context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid purple",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "4px 0px 20px 0px rgba(0,0,0,0.75)",
    width: "48%",
    height: "500px",
  },

  innerCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    letterSpacing: "6px",
    padding: "20px",
    fontFamily: "Monospace",
    fontSize: "48px",
  },
  btn: {
    padding: "15px",
    marginTop: "60px",
    width: "50%",
  },
});

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiFormControl: {
      // Name of the rule
      root: {
        // Some CSS
        minWidth: "100%",
      },
    },
  },
});

const Signup = () => {
  const classes = useStyles();
  const {
    submit,
    setEmail,
    setPassword,
    setPasswordCheck,
    setDisplayName,
  } = useContext(UserContext);

  return (
    <div className="signUp">
      <div className={classes.innerCont}>
        <h4 className={classes.signUpText}>Signup</h4>
        <form className={classes.root} onSubmit={submit} autoComplete="off">
          <ThemeProvider theme={theme}>
            <TextField
              id="standard-required"
              label="Display Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <TextField
              required
              id="standard-email-input"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="standard-password-input"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              id="standard-password-input"
              label="Verify Password"
              type="password"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
          </ThemeProvider>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.btn}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
