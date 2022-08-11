import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../assets/styles/components/_event.scss";

function Event({ nom, image, description, date, tag, lieu }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="containerEvent">
      <Button onClick={handleOpen}>
        <div className="card">
          <div className="card-header">
            <div className="profile">
              <span className="letter">{tag}</span>
            </div>
            <div className="card-title-group">
              <h5 className="card-title">{nom}</h5>
              <div className="card-date">
                Le {date} à {lieu}
              </div>
            </div>
          </div>
          <img
            className="card-image"
            src={require(`../assets/images/events/${image}`)}
            alt="Logo"
          />
          <div className="card-text">
            <p className="descri">{description}</p>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="cardM">
              <div className="card-header">
                <div className="profile">
                  <span className="letter">{tag}</span>
                </div>
                <div className="card-title-group">
                  <h5 className="card-title">{nom}</h5>
                  <div className="card-date">
                    Le {date} à {lieu}
                  </div>
                </div>
              </div>
              <img
                className="card-image"
                src={require(`../assets/images/events/${image}`)}
                alt="Logo"
              />
              <div className="card-text">{description}</div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Event;
