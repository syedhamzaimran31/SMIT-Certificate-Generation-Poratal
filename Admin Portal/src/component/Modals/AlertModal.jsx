import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = ({ show, handleClose, handleDelete, body, title }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>{title || 'Confirm Deletion'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
