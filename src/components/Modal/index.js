import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Modals =({ onClose, currentPortfolio }) => {
    const { name, description, category, index } = currentPortfolio;

    return (
      <div>
        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
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
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
    
};

export default Modals;