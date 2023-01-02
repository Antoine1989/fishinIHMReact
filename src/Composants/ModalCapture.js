import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaFish} from "react-icons/fa";
import '../ComposantsIcons/ComposantsIcons.css';
import './SelectPoissons';
import SelectTechnique from './SelectTechnique';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectPoisson from './SelectPoissons';
import SelectMaree from './SelectMaree';
import '../ComposantsIcons/ComposantsIcons.css';

function ModalCapture(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un nouveau poisson
    </Tooltip>
  );
  const today = new Date();
  const {spot}= props;


  return (
    <>
      
      <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
         <Button  className="square bg-gris rounded-9 ms-3 me-3" onClick={handleShow} ><FaFish/></Button>
    </OverlayTrigger>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'un nouveau poisson</Modal.Title>
        </Modal.Header>
        <Form.Label style={{textAlign: "center"}}>Type</Form.Label>
        <Form.Control name="type" defaultValue="POISSON" disabled/>
        <Form.Label style={{textAlign: "center"}}>Nom</Form.Label>
        <SelectPoisson name="nomPoisson"/>
        <Form.Label style={{textAlign: "center"}}>Technique de pêche</Form.Label>
        <SelectTechnique name="technique"/>
        <Form.Label style={{textAlign: "center"}}>Quantité</Form.Label>
        <Form.Control name="quantité" />
        <Form.Label style={{textAlign: "center"}}>Poids (kg)</Form.Label>
        <Form.Control name="poids" />
        <Form.Label style={{textAlign: "center"}}>Longueur (cm)</Form.Label>
        <Form.Control name="longueur" />
        <Form.Label style={{textAlign: "center"}}>Date de la pêche </Form.Label>
        <DatePicker  className="form-control"  name="date"
        minDate={today}/>
         <Form.Label style={{textAlign: "center"}}>Marée</Form.Label>
         <SelectMaree />
         <Form.Label style={{textAlign: "center"}}>Commentaires</Form.Label>
        <Form.Control name="commentaires" />
        <Form.Label style={{textAlign: "center"}}>Photo</Form.Label>
        <Form.Control name="photo" />
        <Form.Label style={{textAlign: "center"}}>Nom du spot</Form.Label>
        <Form.Control type="spot" placeholder={spot} /> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button className="bg-gris" onClick={handleClose}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}

export default ModalCapture;