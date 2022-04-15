import React from "react";
import Modal from 'react-bootstrap/Modal';

const Modals =({ onClose, currentPortfolio}) => {
    const { name, description, category, index } = currentPortfolio;

    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <img
          src={require(`../../assets/images/${category}/${index}.png`).default}
          alt="current category"
          />
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
    
};

export default Modals;