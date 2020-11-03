import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  /**DEFINING INITIAL STATE FOR THE GLOBAL CONTEXT */

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  /** useEffect */

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        /** WE CHECK IF THERE IS A TOKEN IF NOT WE SET THE TOKEN TO AN EMPTY STRING */

        let token = localStorage.getItem("auth-token");

        if (token === null) {
          localStorage.setItem("auth-token", "");

          token = "";
        }

        /** WE CALL TO CHECK IF THERE IS A TOKE OR IS A VALID TOKEN */

        const tokenRes = await Axios.post(
          "http://localhost:5000/users/tokenIsValid",
          null,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );

        /** IF THE TOKEN IS VALID RETURN TRUE AND WE REQUEST THE USER SETTING THE INITIAL STATE WITH THE DATA FROM
      THE DATABASE */

        if (tokenRes.data) {
          const userRes = await Axios.get("http://localhost:5000/users/", {
            headers: {
              "x-auth-token": token,
            },
          });
          setUserData({
            token: token,
            user: userRes.data,
          });
        }
      } catch (error) {
        return console.log(error);
      }
    };
    checkLoggedIn();
  }, []);

  /** LOGIN */

  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const loginHistory = useHistory();

  const submits = async (e) => {
    try {
      e.preventDefault();
      const loginUser = { emails, passwords };

      const userResLog = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );

      /**Since this is a login we do not need a login request just we can post the
login data to the login route and put it in a variable so we can set the setUserData hook*/

      setUserData({
        token: userResLog.data.token,
        user: userResLog.data.user,
      });

      localStorage.setItem("auth-token", userResLog.data.token);

      loginHistory.push("/home");
    } catch (error) {
      return console.log(error);
    }
  };

  /** SignUp */

  /* REGISTER USER CREATING A NEW USER OBJECT,
    POSTING WITH AXIOS TO THE SERVER ROUTE REFGISTER PASSING THE NEW USER AND
AUTOMATICALLY LOGIN THE USER POSTING  WITH AXIOS TO THE LOGIN ROUTE PASSING THE EMAIL AND PASSWORD
IN AN OBJECT AND SETTING THE USERDATA COMING FROM THE GLOBAL CONTEXT WITH THE NEW DATA FROM THE REGISTER SCREEN
SETTING THE TOKEN IN THE LOCAL STORAGE AND USING THE USEhISTORY TO GO TO THE HOMEPAGE STRAIGHT */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [displayName, setDisplayName] = useState("");

  const history = useHistory();

  const submit = async (e) => {
    try {
      e.preventDefault();

      const newUser = { email, password, passwordCheck, displayName };

      await Axios.post("http://localhost:5000/users/register", newUser);

      /**loginRes used to login straight to the home page */

      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        emails: email,
        passwords: password,
      });

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/home");
    } catch (error) {
      return console.log(error);
    }
  };

  /** for authorization requestes */

  return (
    <UserContext.Provider
      value={{
        setEmail,
        setPassword,
        setEmails,
        setPasswords,
        submits,
        submit,
        setPasswordCheck,
        setDisplayName,
        setUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
