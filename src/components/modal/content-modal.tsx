import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ContentModal({ children }: Props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <img src="https://lh3.googleusercontent.com/proxy/AHNoMpjo5xjfeX7gHEByUj2o1QqAFx4FIgkGduUi1ytk4V1r-EF_ax7yjOhCVQuXWK5RyqZwCa2o-jlOpVr89q5nBHWJ93fG-63mg-EQmP4uujHDdir_tezP" />
            <Button variant="contained" color="secondary" target="__blank" href="https://www.youtube.com/watch?v=ZnZqB5Z75zI">Watch the Trailer</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
