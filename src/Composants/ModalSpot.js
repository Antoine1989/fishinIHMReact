import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaAnchor} from "react-icons/fa";
import '../ComposantsIcons/ComposantsIcons.css';
import './SelectPoissons';
import SelectPoisson from './SelectPoissons';

function ModalSpot() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un nouveau spot de pêche
    </Tooltip>
  );

  return (
    <>
      
      <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button  className="square bg-gris rounded-9 ms-3 me-3"  onClick={handleShow}><FaAnchor/></Button>
    </OverlayTrigger>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'un nouveau spot</Modal.Title>
        </Modal.Header>
        <Form.Label>Nom du spot</Form.Label>
        <Form.Control type="spot" placeholder="spot" />
        <Form.Label>Ville</Form.Label>
        <Form.Control type="ville" placeholder="ville" />
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSpot;