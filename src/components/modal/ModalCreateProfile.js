import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { ListItemText } from "@material-ui/core";
import { ProfileContext } from "../../globalContext/profileContext";

import CreateProfile from "../createProfile/CreateProfile";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",

    border: "2px solid purple",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "80vh",
    overflowY: "scroll",
    width: "400px",
    borderRadius: "15px",
  },
}));

const ModalCreateProfile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { profileData, reset } = useContext(ProfileContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset({
      nickname: "",
      image: "",
      stack: "",
      favlanguage: "",
      linkedin: "",
      facebook: "",
      github: "",
    });
  };

  return (
    <div>
      <ListItemText onClick={handleOpen}>
        {profileData.length >= 1 ? "Edit Profile " : "Create Profile"}
      </ListItemText>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CreateProfile handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCreateProfile;
