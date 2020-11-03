import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Login from '../login/login';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "white",
      
      border: '2px solid purple',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height:"600px",
      width:"400px",
      borderRadius:"15px"
    },
  }));

const ModalLogin = () => {

    const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

     return (
        <div>
        <Button variant="contained" onClick={handleOpen} color="primary">
          Login
        </Button>
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
              <Login/>
            </div>
          </Fade>
        </Modal>
      </div>
    )
}

export default ModalLogin
