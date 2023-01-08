import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FaAnchor} from "react-icons/fa";
import '../ComposantsIcons/ComposantsIcons.css';
import './SelectPoissons';
import FishinService from '../Service/FishinService';

function ModalSpot(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Ajouter un nouveau spot de pêche
    </Tooltip>
  );
  const[nomSpot,setNomSpot]=useState('');
  const[ville,setVille]=useState('');
  const[message,setMessage]=useState('');
  const [spots, updateSpots]=useState([]);

  const handlenomspot=(event)=>{
    const nomSpot=event.target.value;
    console.log(nomSpot);
    setNomSpot(nomSpot);
  }

  const handleville=(event)=>{
    const ville=event.target.value;
    console.log(ville);
    setVille(ville);
  }

  const addSpot=(e)=>{
    e.preventDefault();
    const {getSpots}=props;
    const spotdata={nomSpot:nomSpot, ville:ville,user:{user_id:1,nom:"Bob",password:"56270 Ploemeur"}}
    FishinService.addSpot(spotdata).then((result)=>{
      
     setMessage(result.data)
      console.log(result.data);
      //recup du getSpots avec props de ListSpot
      getSpots();
  })
  handleClose();;
  }



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
        <Form.Control type="spot" name="nom_spot"placeholder="spot"  onChange={(e)=>handlenomspot(e)} />
        <Form.Label>Ville</Form.Label>
        <Form.Control name="ville" type="ville" placeholder="ville"  onChange={(e)=>handleville(e)} />
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="bg-gris" onClick={addSpot}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSpot;