import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ marginLeft: "20px", width: "70px" }}
        variant="dark"
        onClick={handleShow}
      >
        <img src="./img/menu-icon.png" style={{ width: "100%" }} alt="" />
      </Button>

      <Offcanvas
        style={{ backgroundColor: "#212429", color: "white" }}
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>SI Perum</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
